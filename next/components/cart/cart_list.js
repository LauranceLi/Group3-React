import React from 'react'
import { useCart } from '@/hooks/use_cart'
import TrashCan from '../icons/trash_can'
import SquareMinus from '../icons/square_minus'
import SquarePlus from '../icons/square_plus'

export default function CartList() {
  const { items, increaseItem, decreaseItem, removeItem } = useCart()
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
            <div className="unit-price text-center">
              <button
                onClick={() => {
                  decreaseItem(v.id)
                }}
                className="no-border"
              >
                <SquareMinus />
              </button>
              <span className="number">{v.qty}</span>
              <button
                onClick={() => {
                  increaseItem(v.id)
                }}
                className="no-border"
              >
                <SquarePlus />
              </button>
            </div>
            <div className="unit-price text-center">
              <button
                onClick={() => {
                  removeItem(v.id)
                }}
                className="no-border"
              >
                <TrashCan className="unit-price text-center" />
              </button>
            </div>
            <div className="unit-price text-center">{v.qty * v.price}</div>
          </div>
        )
      })}
    </>
  )
}
