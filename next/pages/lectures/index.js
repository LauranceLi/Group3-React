import React, { useState, useEffect } from 'react'
import Preloader from '@/components/layout/preloader'
import Banner from '@/components/layout/banner'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

import styles from '@/styles/lectures/lectures.module.css'

import LectureCard from '@/components/lecture/lecture-card'

export default function Lectures() {
  const [lectures, setLectures] = useState([])
  const [filterText, setFilterText] = useState('')
  const [filteredData, setFilteredData] = useState([])
  const checkUrl = 'http://localhost:3005/api/lectures'
  useEffect(() => {
    const getLectures = async () => {
      const res = await fetch(checkUrl, {
        credentials: 'include',
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })

      const data = await res.json()
      setLectures(data.data)
    }
    getLectures()
  }, [])
  // console.log(lectures[0].country)

  return (
    <>
      <Preloader />
      <Navbar />
      <Banner imgUrl={'./images/tes.jpg'} />
      {/* Banner 填寫別的路徑就可以放自己要的圖片 */}
      <div className={styles.selectBar}>
        <div className={styles.selectTitle}>精選講座</div>
        <div className={styles.selectBtns}>
          <button className={styles.selectBtn} data-filter="*">
            全部
          </button>
          <button className={styles.selectBtn} data-filter=".southAmerica">
            中南美洲
          </button>
          <button className={styles.selectBtn} data-filter=".europe">
            歐洲
          </button>
          <button className={styles.selectBtn} data-filter=".japan">
            日本
          </button>
        </div>
      </div>
      <div className={styles.lectureList}>
        {/* <LectureCard key={lecture.lecture_id} country={123} /> */}


        {lectures.map((lecture) => (
          <LectureCard
            key={lecture.lecture_id}
            country={lecture.country}
            date={lecture.date.slice(0,10)}
            time={lecture.date.slice(11,16)}
            place={lecture.place}
            title={lecture.title}
            img ={lecture.img_id}
            introduction={lecture.introduction}
          />
        ))}
      </div>

      <Footer />
    </>
  )
}
