import { useState } from 'react'
// import Image from 'next/image'
// import SquarePlus from '@/components/icons/square_plus'
// import SquareMinus from '@/components/icons/square_minus'
// import TrashCan from '@/components/icons/trash_can'
import { useCart } from '@/hooks/use_cart'

export default function CartTable() {
  const { items, increaseItem, decreaseItem, removeItem } = useCart()

  return (
    <>
      {/* <div className="travel-form mb-3">
        <h4 className="bottom-line d-inline">我的購物車</h4>
        <div className="second">
          <div className="">
            <div className="travel-info2">
              {/* <div className="unit-price text-center">
                <input type="checkbox" />
              </div> */}
      {/* <div className="travel-saleitem">品項</div>
              <div className="unit-price text-center">單價</div>
              <div className="unit-price text-center">數量</div>
              <div className="unit-price text-center">刪除</div> */}
      {/* </div>
            {products.map((product) => (
              <div className="travel-info" key={product.id}> */}
      {/* <div className="unit-price text-center">
                  <input type="checkbox" />
                </div> */}
      {/* <div className="travel-saleitem">
                  <Image
                    src="/001.jpg"
                    alt="001.jpg"
                    width={100}
                    height={150}
                  />
                  <span className="bottom-line">{product.name}</span>
                </div>
                <div className="unit-price text-center">NT${product.price}</div>
                <div className="unit-price text-center">
                  <button
                    onClick={() => {
                      onDecrease(product.id)
                    }}
                    className="no-border"
                    disabled={product.count === 1}
                  >
                    <SquareMinus />
                  </button>
                  <span className="number">{product.count}</span>
                  <button
                    onClick={() => {
                      onIncrease(product.id)
                    }}
                    className="no-border"
                  >
                    <SquarePlus />
                  </button>
                </div>
                <div className="unit-price text-center">
                  <button
                    onClick={() => {
                      onRemove(product.id)
                    }}
                    className="no-border"
                  >
                    <TrashCan />
                  </button>
                </div> */}
      {/* </div>
            ))}
          </div>
        </div>
      </div> */}
      <ul>
        <li>
          <div>名稱</div>
          <div>價格</div>
          <div>數量</div>
          <div>小計</div>
          <div>移除</div>
        </li>
        {items.map((v, i) => {
          return (
            <li key={v.id}>
              <div>{v.name}</div>
              <div>{v.price}</div>
              <div>
                <button
                  onClick={() => {
                    increaseItem(v.id)
                  }}
                >
                  +
                </button>
                <span>{v.qty}</span>
                <button
                  onClick={() => {
                    decreaseItem(v.id)
                  }}
                >
                  -
                </button>
              </div>
              <div>小計</div>
              <div>
                {/* <button
                  onClick={() => {
                    // removeItem(v.id)
                    // 改為跳出對話框 按確定才刪除
                    // notifyAndRemove(v.name, v.id)
                    // 將上面改寫成 按下確定後執行刪除的函式
                    notifyAndCallback(v.name, () => removeItem(v.id))
                  }}
                >
                  移除
                </button> */}
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
