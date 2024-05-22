import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { useCart } from '@/hooks/use_cart'
import CartList from '@/components/cart/cart_list'
import TrashCan from '@/components/icons/trash_can'
import Coupon from '@/components/coupon/coupon'
import RecommendItems from '@/components/cart/recommend_items'

export default function Cart() {
  const { totalPrice, totalQty } = useCart()

  return (
    <>
      <>
        <Navbar />
        <Link href="/product/product_list">返回商城</Link>
        <div className="container mt-5">
          <h2 className="bottom-line d-inline">我的購物車</h2>
          <div className="second">
            <div className="travel-info2">
              <div className="travel-saleitem">品項</div>
              <div className="unit-price text-center">單價</div>
              <div className="unit-price text-center">數量</div>
              <div className="unit-price text-center">
                <TrashCan />
              </div>
              <div className="unit-price text-center">品項小計</div>
            </div>
            <CartList />
          </div>
          <div>
            <div className="total-amount mt-5">
              <div className="col-3 d-flex"></div>
              <div>
                <span className="bottom-line d-inline me-5">
                  商品總數量: {totalQty}
                </span>
                <h5 className="bottom-line d-inline ms-5 me-2">
                  總金額: {totalPrice}
                </h5>
                <Coupon />
              </div>
            </div>
          </div>
          <div className="total-amount">
            <div></div>
            <Link href="/cart/checkout">
              <button type="button" className="btn btn-warning">
                點我去結帳
              </button>
            </Link>
          </div>
        </div>
        <section className="mt-5 mb-3">
          <div className="container">
            <h2 className="d-inline bottom-line">猜你喜歡</h2>
            <div className="salebox mt-3">
              <RecommendItems />
            </div>
          </div>
        </section>
        <Footer />
      </>
    </>
  )
}
