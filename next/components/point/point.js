import React from 'react'
import { useCart } from '@/hooks/use_cart'
import SquareMinus from '../icons/square_minus'
import SquarePlus from '../icons/square_plus'
export default function Point() {
  const {
    points,
    handleDecrease,
    discountAmount,
    handleDiscountChange,
    handleIncrease,
    finalAmount,
  } = useCart()
  return (
    <>
      <div>
        <span>可用點數: {points}點</span>
      </div>
      <div className="d-flex col-6 m-2">
        <div className="d-flex col-6 m-2">
          <button
            onClick={handleDecrease}
            disabled={discountAmount <= 0}
            className="no-border"
          >
            <h5 className="m-0">
              <SquareMinus />
            </h5>
          </button>
          <input
            type="number"
            value={discountAmount}
            onChange={handleDiscountChange}
            min="0"
            step="10"
            disabled={true}
            className="form-control text-center"
          />
          <button
            onClick={handleIncrease}
            disabled={discountAmount >= Math.min(points / 300, 100)}
            className="no-border"
          >
            <h5 className="m-0">
              <SquarePlus />
            </h5>
          </button>
        </div>
      </div>
      <div className="m-2">
        <span>折扣金額: ${discountAmount}</span>
      </div>
      <h5 className="bottom-line d-inline">折扣後金額: ${finalAmount}</h5>
    </>
  )
}
