import React from 'react'
import Link from 'next/link'
import styles from '@/styles/lectures/lectures.module.css'
import { PiChalkboardTeacherFill } from 'react-icons/pi'

export default function LectureCard() {
  return (
    <>
      <div
        className={`col-12 col-sm-6 col-lg-3  southAmerica wow fadeInUpBig ${styles.lecture_item}`}
        data-wow-delay="300ms"
      >
        <div className={styles.lectureContent}>
          <div className={styles.imgContainer}>
            <img src="images/blog.jpg" alt="" />
            <div className={styles.country}>巴西</div>
            <button type="button" title="講師資訊" className={styles.speaker}>
              <PiChalkboardTeacherFill size={30} />
            </button>
          </div>
          <div className={styles.cardContext}>
            <h4>04/12（五）台北</h4>
            <h5>19:00-20:30</h5>
          </div>
          <Link className={styles.signUpformBtn} href="#">
            <div>
              <span>點此報名</span>
              <span>免費參加</span>
            </div>
            {/* <button
              type="button"
              className={`${styles.btn} ${styles.btnOne} ${styles.btnSep}`}
              data-bs-toggle="modal"
              data-bs-target="#signUpdrop"
            >
              免費報名
            </button> */}
          </Link>
        </div>
      </div>
    </>
  )
}
