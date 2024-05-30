import React from 'react'
import { useCart } from '@/hooks/use_cart'

export default function CheckoutList() {
  const {
    items,
    discountAmount,
    finalAmount,
  } = useCart()

  return (
    <>
      {items.map((v, i) => {
        return (
          <div className="travel-info" key={v.id}>
            <div className="travel-saleitem">
              {/* <img src={`/pics/${v.photos.split(',')[0]}`} alt="" width={150} /> */}
              <span className="bottom-line m-2">{v.name}{v.title}</span>
            </div>
            <div className="unit-price text-center">{v.price}</div>
            <div className="unit-price text-center">{v.qty}</div>
            <div className="unit-price text-center">{v.qty * v.price}</div>
          </div>
        )
      })}
      <div className="row mt-3">
        <div className="col total-amount mb-5">
          <h4 className="bottom-line">訂單總金額NT${finalAmount}</h4>
        </div>
      </div>
    </>
  )
}
