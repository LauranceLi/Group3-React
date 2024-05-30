import Success from '@/components/icons/success'
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import React from 'react'

export default function Callback2() {
  return (
    <>
      <Navbar />
      <div className="contianer text-center view">
        <div>
          <div className="m-5">
            <Success />
          </div>
          <h1 className="view_color">付款已成功</h1>
        </div>
      </div>
      <Footer />
    </>
  )
}
