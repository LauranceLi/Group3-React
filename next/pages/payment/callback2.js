// 綠界科技付款完成後跳轉的頁面
import React from 'react'
import Preloader from '@/components/layout/preloader'
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'
import { IoCheckmarkCircle } from 'react-icons/io5'
import styles from '@/styles/itinerary.module.css'
import Link from 'next/link'



export default function Callback2() {
  return (
    <>
      <Preloader />
      <Navbar />
      <div className="contianer text-center view">
        <div className={styles.callBack2}>
          <IoCheckmarkCircle size={42} />
          <h4 style={{ marginTop: '10px' }}>訂金付款已成功，感謝您的購買。</h4>
        </div>
        <Link href="/itinerary-product/list">
            <button type="button" className="btn btn-outline-dark m-3 col-2">
            返回行程列表頁
            </button>
          </Link>
      </div>
      <Footer />
    </>
  )
}
