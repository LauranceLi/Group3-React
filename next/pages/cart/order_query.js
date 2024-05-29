import React from 'react'
import OrderQuery from '@/components/order/order_query'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
export default function Test() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="mb-5">
          <h4 className="bottom-line d-inline">訂單查詢</h4>
        </div>
        <OrderQuery />
      </div>
      <Footer />
    </>
  )
}
