import React from 'react'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import MyFormComponent from '@/components/form/form'

export default function Checkout() {
  return (
    <>
      <Navbar />
      <section className="">
        <div className="container">
          <div className="travel-form mb-3">
            <div className=" mb-3 mt-5">
              <h4 className="bottom-line d-inline">確認購買商品</h4>
              <div className="travel-info2">
                <h6 className="travel-saleitem">商品名稱</h6>
                <div className="unit-price text-center">單價</div>
                <div className="unit-price text-center">數量</div>
                <div className="unit-price text-center">品項小計</div>
              </div>
              <MyFormComponent />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
