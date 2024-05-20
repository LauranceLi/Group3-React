import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

export default function Order() {
  return (
    <>
      <Navbar />
      <section className="">
        <div className="container">
          <form action="#">
            <div className="travel-form mb-3">
              <div className="row align-items-start justify-content-center text-center big-title">
                <div className="col first pass">1 選購商品</div>
                <div className="col first pass">2 填寫訂單資訊</div>
                <div className="col first  active-carttitle">3 付款完成</div>
              </div>
              <div className="second mb-3 mt-5">
                <div className="order-title">
                  <h4>訂單詳細內容</h4>
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
                  </div>
                </div>
                <div className="travel-info">
                  <div className="travel-saleitem">
                    <Image
                      src="/001.jpg"
                      alt="001.jpg"
                      width={100}
                      height={150}
                    />
                    <span className="travel-saleitem bottom-line">
                      追夢到秘魯：探索失落文明，尋覓古都風華
                    </span>
                  </div>
                  <div className="unit-price text-center">NT$400</div>
                  <div className="unit-price text-center">
                    <span className="number">1</span>
                  </div>
                </div>
                <div className="travel-info">
                  <div className="travel-saleitem">
                    <Image
                      src="/001.jpg"
                      alt="001.jpg"
                      width={100}
                      height={150}
                    />
                    <span className="travel-saleitem bottom-line">
                      追夢到秘魯：探索失落文明，尋覓古都風華
                    </span>
                  </div>
                  <div className="unit-price text-center">NT$400</div>
                  <div className="unit-price text-center">
                    <span className="number">1</span>
                  </div>
                </div>
                <div className="travel-info">
                  <div className="travel-saleitem">
                    <Image
                      src="/001.jpg"
                      alt="001.jpg"
                      width={100}
                      height={150}
                    />
                    <span className="travel-saleitem bottom-line">
                      追夢到秘魯：探索失落文明，尋覓古都風華
                    </span>
                  </div>
                  <div className="unit-price text-center">NT$400</div>
                  <div className="unit-price text-center">
                    <span className="number">1</span>
                  </div>
                </div>
              </div>
              <div className="second mb-3">
                <div className="order-title">
                  <h4>訂購人資訊</h4>
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
                <div className="order-title">
                  <h4>其他</h4>
                </div>
                <div>
                  <div className="travel-info2">
                    <h6 className="travel-saleitem">優惠券折扣碼</h6>
                    <div className="unit-price text-center">無</div>
                    <div className="unit-price text-center"></div>
                  </div>
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
                <div className="row mt-3 p-2">
                  <div className="col total-amount">
                    <h4>小計</h4>
                    <h4>NT$ 1,200</h4>
                  </div>
                </div>
              </div>
              <div className="second mb-3">
                <div className="">
                  <div className="row">
                    <div className="col total-amount">
                      <h4>訂單總金額</h4>
                      <h4>NT$ 1,200</h4>
                    </div>
                  </div>
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
