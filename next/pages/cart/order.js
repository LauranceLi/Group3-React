import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import CheckoutList from '@/components/checkout/checkout_list'

export default function Order() {
  return (
    <>
      <Navbar />
      <section className="">
        <div className="container">
          <form action="#">
            <div className="travel-form mb-3">
              {/* <div className="row align-items-start justify-content-center text-center big-title">
                <div className="col first pass">1 選購商品</div>
                <div className="col first pass">2 填寫訂單資訊</div>
                <div className="col first  active-carttitle">3 付款完成</div>
              </div> */}
              <div className="second mb-3 mt-5">
                <div className="mb-3">
                  <h4 className="bottom-line d-inline">訂單內容</h4>
                </div>
                <div>
                  <div className="travel-info2">
                    <h6 className="travel-saleitem">訂單編號</h6>
                    <div className="unit-price text-center">2024041500001</div>
                    <div className="unit-price text-center" />
                  </div>
                  <div className="travel-info2">
                    <h6 className="travel-saleitem">商品明細</h6>
                    <div className="unit-price text-center">單價</div>
                    <div className="unit-price text-center">數量</div>
                    <div className="unit-price text-center">品項小計</div>
                  </div>
                </div>
                <CheckoutList />
              </div>
              <div className="second mb-3">
                <div className="mt-5 mb-3">
                  <h4 className="bottom-line d-inline">訂購人資訊</h4>
                </div>
                <div>
                  <div className="travel-info2">
                    <h6 className="travel-saleitem">訂購人姓名</h6>
                    <div className="unit-price text-center">王小明</div>
                    <div className="unit-price text-center" />
                  </div>
                  <div className="travel-info2">
                    <h6 className="travel-saleitem">訂購人Email</h6>
                    <div className="unit-price text-center">
                      LandMoutain@gmail.com
                    </div>
                    <div className="unit-price text-center" />
                  </div>
                </div>
                <div className="travel-info2">
                  <h6 className="travel-saleitem">訂購人手機號碼</h6>
                  <div className="unit-price text-center">0910123123</div>
                  <div className="unit-price text-center"></div>
                </div>
                <div className="travel-info2">
                  <h6 className="travel-saleitem">收件人姓名</h6>
                  <div className="unit-price text-center">王小明</div>
                  <div className="unit-price text-center"></div>
                </div>
                <div className="travel-info2">
                  <h6 className="travel-saleitem">收件人手機號碼</h6>
                  <div className="unit-price text-center">0910123123</div>
                  <div className="unit-price text-center"></div>
                </div>
              </div>
              <div className="second mb-3">
                <div className="mt-5 mb-3">
                  <h4 className="bottom-line d-inline">其他資訊</h4>
                </div>
                <div>
                  <div className="travel-info2">
                    <h6 className="travel-saleitem">送貨方式</h6>
                    <div className="unit-price text-center">超取</div>
                    <div className="unit-price text-center" />
                  </div>
                  <div className="travel-info2">
                    <h6 className="travel-saleitem">付款方式</h6>
                    <div className="unit-price text-center">貨到付款</div>
                    <div className="unit-price text-center" />
                  </div>
                </div>
                <div className="travel-info2">
                  <h6 className="travel-saleitem">發票類型</h6>
                  <div className="unit-price text-center">電子載具</div>
                  <div className="unit-price text-center">/DSKD545</div>
                </div>
                <div className="travel-info2">
                  <h6 className="travel-saleitem">下單時間</h6>
                  <div className="unit-price text-center">2024/04/15 14:55</div>
                  <div className="unit-price text-center"></div>
                </div>
              </div>
              <div className="agreement-btn">
                <div className="m-1">
                  <a href="./index.html">
                    <button
                      type="button"
                      className="text-center btn btn-warning go-shopping mb-5 mt-5"
                    >
                      返回商城
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  )
}
