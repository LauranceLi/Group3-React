import { createContext, useState, useContext, useEffect } from 'react'

const CartContext = createContext(null)
//折價券定義
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

  //折價券的部分
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

  //積分的部分
  const [points, setPoints] = useState(0)
  const [discountAmount, setDiscountAmount] = useState(0)
  const [finalAmount, setFinalAmount] = useState(0)

  useEffect(() => {
    // 從後端獲取會員積分信息
    fetch(`http://localhost:3005/api/points`)
      .then((response) => response.json())
      .then((data) => {
        // 獲取積分並將其存儲在狀態中
        if (Array.isArray(data) && data.length > 0) {
          // 確保返回的數據不是空數組
          const totalPoints = data.reduce(
            (accumulator, current) => accumulator + current.points,
            0
          )
          setPoints(totalPoints) // 將所有積分相加並存儲在狀態中

          // 計算可以折扣的金額
          const discount = Math.min(Math.floor(totalPoints / 300), 100) // 滿300點換成1元，最多折扣100元
          setDiscountAmount(discount) // 存儲折扣金額
        }
      })
      .catch((error) => console.error('Error fetching member points:', error))
  }, [])

  // 處理用戶輸入想要折扣的金額
  const handleDiscountChange = (event) => {
    let inputAmount = parseInt(event.target.value)
    // 限制金額不大於顯示的金額
    inputAmount = Math.min(inputAmount, discountAmount)
    // 限制金額不小於0
    inputAmount = Math.max(inputAmount, 0)
    setDiscountAmount(inputAmount)
  }

  // 增加按鈕事件處理函式
  const handleIncrease = () => {
    // 限制增加的金額不大於顯示的金額且不超過100元折扣
    const increasedAmount = Math.min(
      discountAmount + 10,
      Math.min(points / 300, 100)
    )
    setDiscountAmount(increasedAmount)
  }

  // 減少按鈕事件處理函式
  const handleDecrease = () => {
    // 限制減少的金額不小於0
    const decreasedAmount = Math.max(discountAmount - 10, 0)
    setDiscountAmount(decreasedAmount)
  }

  useEffect(() => {
    const finalAmount = totalPrice - discountAmount
    setFinalAmount(finalAmount)
  }, [totalPrice, discountAmount])

  return (
    <CartContext.Provider
      value={{
        items,
        addItem, //cart 商品放入購物車
        increaseItem, //cart 增加數量
        decreaseItem, //cart 減少數量
        removeItem, //cart 移除商品
        totalQty,
        totalPrice,
        netTotal, //折價後金額
        selectedCouponId,
        setSelectedCouponId,
        couponOptions,
        setCouponOptions,
        points, //積分
        discountAmount, //折扣的金額
        handleDiscountChange, //積分改變
        handleIncrease, //增加使用的積分
        handleDecrease, //減少使用的積分
        finalAmount, //扣除積分後的金額
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
