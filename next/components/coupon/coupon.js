import React from 'react'
import { useCart } from '@/hooks/use_cart'

export default function Coupon() {
  const { netTotal, selectedCouponId, setSelectedCouponId, couponOptions } =
    useCart()
  const selectedCoupon = couponOptions.find(
    (coupon) => coupon.id === selectedCouponId
  )
  return (
    <>
      <div className="mb-3 mt-3">
        <select
          className="form-select"
          value={selectedCouponId}
          onChange={(e) => {
            setSelectedCouponId(Number(e.target.value))
          }}
        >
          <option value="0">選擇折價券</option>
          {couponOptions.map((v) => {
            return (
              <option key={v.id} value={v.id}>
                {v.name}
              </option>
            )
          })}
        </select>
        <hr />
        {selectedCouponId !== 0 && selectedCoupon && (
          <div className="mb-2">
            折扣金額:{' '}
            {selectedCoupon.type === 'amount'
              ? `${selectedCoupon.value} 元`
              : `${selectedCoupon.value * 100}%`}
          </div>
        )}
        <h5>最後折價金額: {netTotal}</h5>
      </div>
    </>
  )
}
