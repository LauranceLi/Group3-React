import { createContext, useState, useContext, useEffect } from 'react'

const CartContext = createContext(null)

const coupons = [
  { id: 1, name: '折100元', value: 100, type: 'amount' },
  { id: 2, name: '折300元', value: 300, type: 'amount' },
  { id: 3, name: '折550元', value: 550, type: 'amount' },
  { id: 4, name: '8折券', value: 0.2, type: 'percent' },
]

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  const increaseItem = (id) => {
    const nextItems = items.map((v, i) => {
      if (v.id === id) return { ...v, qty: v.qty + 1 }
      else return v
    })
    setItems(nextItems)
  }
  const decreaseItem = (id) => {
    let nextItems = items.map((v, i) => {
      if (v.id === id) return { ...v, qty: v.qty - 1 }
      else return v
    })

    nextItems = nextItems.filter((v) => v.qty > 0)

    setItems(nextItems)
  }
  const removeItem = (id) => {
    const nextItems = items.filter((v, i) => {
      return v.id !== id
    })
    setItems(nextItems)
  }
  const addItem = (product) => {
    const foundIndex = items.findIndex((v) => v.id === product.id)
    if (foundIndex > -1) {
      increaseItem(product.id)
    } else {
      const newItem = { ...product, qty: 1 }
      const nextItems = [newItem, ...items]
      setItems(nextItems)
    }
  }
  const totalQty = items.reduce((acc, v) => acc + v.qty, 0)
  const totalPrice = items.reduce((acc, v) => acc + v.qty * v.price, 0)

  const [couponOptions, setCouponOptions] = useState(coupons)
  const [selectedCouponId, setSelectedCouponId] = useState(0)
  const [netTotal, setNetTotal] = useState(0)
  useEffect(() => {
    // 一開始沒套用折價券，netTotal和cart.totalPrice一樣
    if (!selectedCouponId) {
      setNetTotal(totalPrice)
      return
    }

    const coupon = couponOptions.find((v) => v.id === selectedCouponId)

    // type: 'amount'相減，'percent'折扣
    const newNetTotal =
      coupon.type === 'amount'
        ? totalPrice - coupon.value
        : Math.round(totalPrice * (1 - coupon.value))

    setNetTotal(newNetTotal)
  }, [totalPrice, selectedCouponId])

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        increaseItem,
        decreaseItem,
        removeItem,
        totalQty,
        totalPrice,
        netTotal, //折價後金額
        selectedCouponId,
        setSelectedCouponId,
        couponOptions,
        setCouponOptions,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
