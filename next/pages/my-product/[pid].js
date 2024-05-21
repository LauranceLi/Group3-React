import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function ItineraryProduct() {
  // 第1步. 宣告能得到動態路由pid的路由器
  // router.query(物件)，其中包含了pid屬性值
  // router.isReady(布林)，如果是true代表頁面已完成水合作用，可以得到pid
  const router = useRouter()

  const [product, setProduct] = useState({
    travel_id: 0,
    days: '',
    photos: '',
    time: '',
    name: '',
    introduce: '',
    seat: 0,
    number: 0,
    sale: 0,
    price: 0,
    airport: '',
  })

  // 宣告一個指示是不是正在載入資料的狀態
  // 因為一開始一定是要載入資料，所以預設值為true
  const [isLoading, setIsLoading] = useState(true)


  // 第2步: 在useEffect中監聽router.isReady為true時，才能得到網址上的pid，之後向伺服器要資料
  useEffect(() => {
    console.log(router.query)

    if (router.isReady) {
      const { pid } = router.query
      getProduct(pid)
    }
    // eslint-disable-next-line
  }, [router.isReady])

  return (
    <>
      <h1>商品詳細頁</h1>
      <hr />
      <br />
      
        <>
          <p>ID: {product.id}</p>
          <p>名稱: {product.name}</p>
          <p>價格: {product.price}</p>
        </>
      
    </>
  )
}
