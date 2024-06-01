import React from 'react'
import { useRouter } from 'next/router'
import products from '@/data/Product.json'
import { useCart } from '@/hooks/use_cart'

export default function RecommendItems() {
  const { addItem } = useCart()
  const router = useRouter()

  const handleViewDetails = (id) => {
    router.push(`/product/${id}`)
  }

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
              <div className="m-3 d-flex justify-content-evenly">
                <button
                  onClick={() => {
                    addItem(v)
                  }}
                  className="btn btn-warning"
                >
                  加入購物車
                </button>
                <button
                  onClick={() => handleViewDetails(v.id)}
                  className="btn btn-outline-dark"
                >
                  商品詳細
                </button>
              </div>
            </div>
          )
        })}
    </>
  )
}
