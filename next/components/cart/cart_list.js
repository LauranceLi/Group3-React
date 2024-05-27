import React from 'react'
import { useCart } from '@/hooks/use_cart'
import TrashCan from '../icons/trash_can'
import SquareMinus from '../icons/square_minus'
import SquarePlus from '../icons/square_plus'
import Link from 'next/link'
import Coupon from '../coupon/coupon'

export default function CartList() {
  const { items, increaseItem, decreaseItem, removeItem } = useCart()

  const handleCheckout = async () => {
    // 收集購物車中每個物品的信息
    const itemsData = []
    // 遍歷購物車中的每個物品，並將其信息添加到 itemsData 中
    items.map((item) => {
      itemsData.push({
        id: item.id,
        name: item.name,
        price: item.price,
        qty: item.qty,
        // 添加其他你需要的物品信息
      })
    })
    console.log(itemsData)
    // 傳送JSON至後端
    // try {
    //   const res = await fetch('http://localhost:3005/api/checkout', {
    //     method: 'POST',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ items: itemsData }),
    //   })
    //   const data = await res.json()
    //   console.log('後端返回的數據:', data)
    // } catch (error) {
    //   console.error('提交表單時出錯:', error)
    // }
  }

  if (items.length === 0) {
    return (
      <>
        <div className="text-center mt-3">目前沒有選購商品</div>
        <div className="total-amount p-2">
          <div></div>
          <button type="button" className="btn btn-secondary">
            點我去結帳
          </button>
        </div>
      </>
    )
  }

  return (
    <>
      {items.map((v, i) => {
        return (
          <div className="travel-info" key={v.id}>
            <div className="travel-saleitem">
              <img src={`/pics/${v.photos.split(',')[0]}`} alt="" width={150} />
              <span className="bottom-line m-2">{v.name}</span>
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
      <div className="total-amount p-2">
        <div>
          <Coupon />
        </div>
        <Link href="/cart/checkout">
          <button
            type="button"
            className="btn btn-warning"
            onClick={handleCheckout}
          >
            點我去結帳
          </button>
        </Link>
      </div>
    </>
  )
}
