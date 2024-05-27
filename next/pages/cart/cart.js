import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { useCart } from '@/hooks/use_cart'
import CartList from '@/components/cart/cart_list'
import TrashCan from '@/components/icons/trash_can'

export default function Cart() {
  const { totalPrice, totalQty } = useCart()

  return (
    <>
      <>
        <Navbar />
        <div className="container">
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
            <div className="total-amount mt-3">
              <div className="col-3 d-flex">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="使用折扣碼"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-outline-dark"
                    type="button"
                    id="button-addon2"
                  >
                    使用
                  </button>
                </div>
              </div>
              <div>
                <span className="bottom-line d-inline me-5">
                  商品總數量: {totalQty}
                </span>
                <h5 className="bottom-line d-inline ms-5 me-2">
                  總金額: {totalPrice}
                </h5>
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
