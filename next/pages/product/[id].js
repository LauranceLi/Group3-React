import { useRouter } from 'next/router'
import products from '@/data/Product.json'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { useCart } from '@/hooks/use_cart'
import SquareMinus from '@/components/icons/square_minus'
import SquarePlus from '@/components/icons/square_plus'
import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

const ProductDetails = () => {
  const router = useRouter()
  const { id } = router.query
  const { addItem,  cart } = useCart()
  const product = products.find((p) => p.id === parseInt(id))

  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    if (product && cart) {
      const cartItem = cart.find((item) => item.id === product.id)
      setQuantity(cartItem ? cartItem.qty : 1) // 修改初始值為1
    }
  }, [product, cart])

  if (!product) {
    return <p>商品未找到</p>
  }

  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1)
  }

  const handleDecrease = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1)) // 確保數量不小於1
  }

  const handleAddToCart = () => {
    addItem(product, quantity) // 傳遞商品和數量
    Swal.fire({
      title:"成功加入購物車",
      icon:"success",
      confirmButtonColor:"#192a56"
    })
    // 顯示加入購物車成功的提示或其他處理
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="mb-4">
          <h2 className="bottom-line">{product.name}</h2>
        </div>
        <div className="d-flex">
          <img
            src={`/pics/${product.photos.split(',')[0]}`}
            alt={product.name}
          />
          <div className="m-5 travel-saleitem">
            <h5>
              價格: <span>{product.price}</span>
            </h5>
            <div className="d-flex">
              <span>購買數量 : </span>
              <div className="ms-2">
                <button onClick={handleDecrease} className="no-border btn">
                  <SquareMinus />
                </button>
                <span className="number">{quantity}</span>
                <button onClick={handleIncrease} className="no-border btn">
                  <SquarePlus />
                </button>
              </div>
              <div className="ms-3">
                <button
                  onClick={handleAddToCart}
                  className="btn btn-warning"
                >
                  加入購物車
                </button>
              </div>
            </div>
            <p>庫存: {product.stock-quantity}</p>
          </div>
        </div>
        <div className="mt-5 mb-3">
          <h3 className="bottom-line d-inline">商品介紹</h3>
        </div>
        <p>{product.info}</p>
      </div>
      <Footer />
    </>
  )
}

export default ProductDetails
