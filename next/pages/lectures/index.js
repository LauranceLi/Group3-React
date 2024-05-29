import React from 'react'
import Preloader from '@/components/layout/preloader'
import Banner from '@/components/layout/banner'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

import styles from '@/styles/lectures/lectures.module.css'

import LectureCard from '@/components/lecture/lecture-card'

export default function Lectures() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Banner imgUrl={'./images/tes.jpg'} />
      {/* Banner 填寫別的路徑就可以放自己要的圖片 */}
      <div className={styles.selectBar}>
        <div className={styles.selectTitle}>
          精選講座
        </div>
        <div className={styles.selectBtns}>
          <button className={styles.selectBtn} data-filter="*">
            全部
          </button>
          <button className={styles.selectBtn}  data-filter=".southAmerica">
            中南美洲
          </button>
          <button className={styles.selectBtn}  data-filter=".europe">
            歐洲
          </button>
          <button className={styles.selectBtn}  data-filter=".japan">
            日本
          </button>
        </div>
      </div>
      <div className={styles.lectureList}>
        <LectureCard />
        <LectureCard />
        <LectureCard />
        <LectureCard />
        <LectureCard />
        <LectureCard />
      </div>

      <Footer />
    </>
  )
}
