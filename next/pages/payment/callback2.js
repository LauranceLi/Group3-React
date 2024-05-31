// 綠界科技付款完成後跳轉的頁面
import React from 'react'
import Preloader from '@/components/layout/preloader'
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import { IoCheckmarkCircle } from 'react-icons/io5'

export default function Callback2() {
  return (
    <>
    <Preloader />
      <Navbar />
      <div className="contianer text-center view">
        <div>
          <IoCheckmarkCircle />
          <h4>付款已成功</h4>
        </div>
      </div>
      <Footer />
    </>
  )
}
