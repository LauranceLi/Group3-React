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
      <p>你的點數(目前是所有會員的總和): {points}</p>
      <p>300點換1元 單筆訂單最多折抵100元</p>
      <button onClick={handleDecrease} disabled={discountAmount <= 0}>
        <SquareMinus />
      </button>
      <input
        type="number"
        value={discountAmount}
        onChange={handleDiscountChange}
        min="0"
        step="10"
        disabled={true}
      />
      <button
        onClick={handleIncrease}
        disabled={discountAmount >= Math.min(points / 300, 100)}
      >
        <SquarePlus />
      </button>
      <p>Discount amount: ${discountAmount}</p>
      <p>折扣後金額: ${finalAmount}</p>
    </>
  )
}
