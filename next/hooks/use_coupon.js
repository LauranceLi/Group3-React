import { createContext, useState, useContext, useEffect } from 'react'
import { useCart } from './use_cart'

const CouponContext = createContext(null)

// 範例資料
// type: 'amount'相減，'percent'折扣
const coupons = [
  { id: 1, name: '折100元', value: 100, type: 'amount' },
  { id: 2, name: '折300元', value: 300, type: 'amount' },
  { id: 3, name: '折550元', value: 550, type: 'amount' },
  { id: 4, name: '8折券', value: 0.2, type: 'percent' },
]

export function UseCouponProvider({ children }) {
  const { totalPrice } = useCart()
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
    <>
      <CouponContext.Provider
        value={{
          netTotal,
          selectedCouponId,
          setSelectedCouponId,
          couponOptions,
          setCouponOptions,
        }}
      >
        {children}
      </CouponContext.Provider>
    </>
  )
}
export const useCoupon = () => useContext(CouponContext)
