import React, {useEffect, useRef} from 'react'
import Link from 'next/link'
import Swal from 'sweetalert2'
import styles from '@/styles/lectures/lectures.module.css'
import { PiChalkboardTeacherFill } from 'react-icons/pi'
import { BsInfoCircle } from 'react-icons/bs'

export default function LectureCard({ title, country, date, place, img, introduction, time }) {
  const showInfo = () => {
    Swal.fire({
      title: title,
      text: introduction,
      imageUrl: `images/lectures/${img}.jpg`,
      imageWidth: 450,
      imageAlt: 'Custom image',
      confirmButtonColor: '#192a56',confirmButtonText: '了解',
    })
  }

  const showSpeaker = () => {
    Swal.fire({
      title: title,
      text: introduction,
      imageUrl: `images/lectures/${img}.jpg`,
      imageWidth: 450,
      imageAlt: 'Custom image',
      confirmButtonColor: '#192a56',confirmButtonText: '了解',
    })
  }

  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show)
          }
        })
      },
      { threshold: 0.1 } // 當 10% 卡片進入視口時觸發
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])
  return (
    <>
      <div
        className={`col-12 col-sm-6 col-lg-3  southAmerica wow fadeInUpBig ${styles.lecture_item}`}
        ref={cardRef}
      >
        <div className={styles.lectureContent}>
          <div className={styles.imgContainer}>
            <img src={`images/lectures/${img}.jpg`} alt="" />
            <div className={styles.country}>{country}</div>
            <button type="button" title="講師資訊" className={styles.speaker}>
              <PiChalkboardTeacherFill size={30} />
            </button>
            <button
              type="button"
              title="講座介紹"
              className={styles.introduction}
              onClick={showInfo}
            >
              <BsInfoCircle size={30} />
            </button>
          </div>
          <div className={styles.cardContext}>
            <h4>{title}</h4>
            <h6>{date}</h6>
            <h1>{time}</h1>
            <h6>{place}</h6>
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
