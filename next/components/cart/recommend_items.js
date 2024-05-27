import React from 'react'
import products from '@/data/Product.json'
import { useCart } from '@/hooks/use_cart'
export default function RecommendItems() {
  const { addItem } = useCart()
  return (
    <>
      {products
        .filter((v, i) => {
          return i < 4
        })
        .map((v, i) => {
          return (
            <div className="shopping_items" key={v.id}>
              <div className="shopping_pic">
                <img src={`/pics/${v.photos.split(',')[0]}`} alt="" />
              </div>
              <div className="shopping_text mt-3">
                <h5>{v.name}</h5>
                <span className="tag">{v.tag}</span>
                <h5>
                  <span>建議售價$</span>
                  {v.price}
                </h5>
              </div>
              <div className="m-3">
                <button
                  onClick={() => {
                    addItem(v)
                  }}
                >
                  加入購物車
                </button>
              </div>
            </div>
          )
        })}
    </>
  )
}
