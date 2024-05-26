import React from 'react'
import { useCart } from '@/hooks/use_cart'

export default function CheckoutList() {
  const { items, totalPrice } = useCart()
  return (
    <>
      {items.map((v, i) => {
        return (
          <div className="travel-info" key={v.id}>
            <div className="travel-saleitem">
              <img src={`/pics/${v.photos.split(',')[0]}`} alt="" width={150} />
              <span className="bottom-line">{v.name}</span>
            </div>
            <div className="unit-price text-center">{v.price}</div>
            <div className="unit-price text-center">{v.qty}</div>
            <div className="unit-price text-center">{v.qty * v.price}</div>
          </div>
        )
      })}
      <div className="travel-info2">
        <h6 className="travel-saleitem">折扣碼 : 無</h6>
        <div className="unit-price text-center">折扣金額 $0</div>
      </div>
      <div className="row mt-3">
        <div className="col total-amount  mb-5">
          <h4 className="bottom-line">訂單總金額</h4>
          <h4 className="bottom-line">NT${totalPrice}</h4>
        </div>
      </div>
    </>
  )
}
