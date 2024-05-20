import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { useCart } from '@/hooks/use_cart'
import CartList from '@/components/cart/cart_list'

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
            <CartList />
          </div>
          <div className="d-block">
            <div>總數量: {totalQty}</div>
            <div className="col-3 d-flex">
              <input className="form-control" />
              <button className="btn btn-warning">使用折扣碼</button>
            </div>
            <div>總金額: {totalPrice}</div>
            <button type="submit" className="btn btn-warning">
              去結帳
            </button>
          </div>
        </div>
        <section className="mt-5 mb-3">
          <div className="container">
            <h2 className="d-inline bottom-line">猜你喜歡</h2>
            <div className="salebox mt-3">
              <div className="saleitem">
                <div className="salepic">
                  <Image
                    src="/002.jpg"
                    alt="002.jpg"
                    width={250}
                    height={300}
                  />
                </div>
                <div className="saletext">
                  <h5 className="mb-3">
                    追夢到古巴：穿梭純樸與恬靜，漫步華麗與時尚
                  </h5>
                  <div className="mb-3">
                    <span>建議售價 </span>
                    <h5 className="d-inline">$400</h5>
                  </div>
                  <div className="salebtn">
                    <button type="button" className="btn btn-warning col-5">
                      加入購物車
                    </button>
                    <button type="button" className="btn btn-secondary col-5">
                      詳細資訊
                    </button>
                  </div>
                </div>
              </div>
              <div className="saleitem">
                <div className="salepic">
                  <Image
                    src="/002.jpg"
                    alt="002.jpg"
                    width={250}
                    height={300}
                  />
                </div>
                <div className="saletext">
                  <h5 className="mb-3">
                    追夢到古巴：穿梭純樸與恬靜，漫步華麗與時尚
                  </h5>
                  <div className="mb-3">
                    <span>建議售價 </span>
                    <h5 className="d-inline">$400</h5>
                  </div>
                  <div className="salebtn">
                    <button type="button" className="btn btn-warning col-5">
                      加入購物車
                    </button>
                    <button type="button" className="btn btn-secondary col-5">
                      詳細資訊
                    </button>
                  </div>
                </div>
              </div>
              <div className="saleitem">
                <div className="salepic">
                  <Image
                    src="/002.jpg"
                    alt="002.jpg"
                    width={250}
                    height={300}
                  />
                </div>
                <div className="saletext">
                  <h5 className="mb-3">
                    追夢到古巴：穿梭純樸與恬靜，漫步華麗與時尚
                  </h5>
                  <div className="mb-3">
                    <span>建議售價 </span>
                    <h5 className="d-inline">$400</h5>
                  </div>
                  <div className="salebtn">
                    <button type="button" className="btn btn-warning col-5">
                      加入購物車
                    </button>
                    <button type="button" className="btn btn-secondary col-5">
                      詳細資訊
                    </button>
                  </div>
                </div>
              </div>
              <div className="saleitem">
                <div className="salepic">
                  <Image
                    src="/002.jpg"
                    alt="002.jpg"
                    width={250}
                    height={300}
                  />
                </div>
                <div className="saletext">
                  <h5 className="mb-3">
                    追夢到古巴：穿梭純樸與恬靜，漫步華麗與時尚
                  </h5>
                  <div className="mb-3">
                    <span>建議售價 </span>
                    <h5 className="d-inline">$400</h5>
                  </div>
                  <div className="salebtn">
                    <button type="button" className="btn btn-warning col-5">
                      加入購物車
                    </button>
                    <button type="button" className="btn btn-secondary col-5">
                      詳細資訊
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    </>
  )
}
