import Success from '@/components/icons/success'
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import React from 'react'
import Link from 'next/link'

export default function Callback() {
  return (
    <>
      <Navbar />
      <div className="contianer text-center view">
        <div>
          <div className="m-5">
            <Success />
          </div>
          <h1 className="view_color">感謝您的購買</h1>
          <h3 className="view_color">
            已收到您的訂單，請您檢視訂單並確認付款狀態
          </h3>
          <Link href="/cart/cart">
            <button type="button" className="btn btn-outline-dark m-3 col-2">
              返回商城
            </button>
          </Link>
          <Link href="/cart/order_query">
            <button
              type="button"
              className="btn btn-outline-warning m-3  col-2"
            >
              檢視訂單
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}
