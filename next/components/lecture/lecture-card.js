import React from 'react'
import Link from 'next/link'
import styles from '@/styles/lectures/lectures.module.css'
import { PiChalkboardTeacherFill } from 'react-icons/pi'
import { BsInfoCircle } from "react-icons/bs";

export default function LectureCard({title,country, date, place}) {

  console.log('country:', country);
  console.log('date:', date);
  console.log('place:', place);
  return (
    <>
      <div
        className={`col-12 col-sm-6 col-lg-3  southAmerica wow fadeInUpBig ${styles.lecture_item}`}
        data-wow-delay="300ms"
      >
        <div className={styles.lectureContent}>
          <div className={styles.imgContainer}>
            <img src="images/blog.jpg" alt="" />
            <div className={styles.country}>{country}</div>
            <button type="button" title="講師資訊" className={styles.speaker}>
              <PiChalkboardTeacherFill size={30} />
            </button>
            <button type="button" title="講座介紹" className={styles.introduction}>
            <BsInfoCircle size={30}/>
            </button>
          </div>
          <div className={styles.cardContext}>
            <h4>{title}</h4>
            <h6>{date}</h6>
            <h5>{place}</h5>
          </div>
          <Link className={styles.signUpformBtn} href="#">
            <div>
              <span>點此報名</span>
              <span>免費參加</span>
            </div>

          </Link>
        </div>
      </div>
    </>
  )
}
