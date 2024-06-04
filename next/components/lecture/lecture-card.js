import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import Swal from 'sweetalert2'
import useMemberInfo from '@/hooks/use-member-info'
import styles from '@/styles/lectures/lectures.module.css'
import { PiChalkboardTeacherFill } from 'react-icons/pi'
import { BsInfoCircle } from 'react-icons/bs'

export default function LectureCard({
  title,
  country,
  date,
  place,
  img,
  introduction,
  time,
}) {
  const { email, mobile, name } = useMemberInfo()

  const signUpName = name ? `value=${name}` : ``
  const signUpEmail = email ? `value=${email}` : ``
  const signUpMobile = mobile ? `value=${mobile}` : ``
  const signUpBtn = () => {
    Swal.fire({
      title: '請填寫報名訊息',
      html:
        `<input id="swal-input1" class="swal2-input" placeholder="姓名" ${signUpName}>` +
        `<input id="swal-input2" class="swal2-input" placeholder="信箱" ${signUpEmail}>` +
        `<input id="swal-input3" class="swal2-input" placeholder="手機" ${signUpMobile}>`,
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: '確認報名',
      confirmButtonColor: '#192a56',
      cancelButtonText:'取消',
      showLoaderOnConfirm: true,
      preConfirm: async (login) => {
        try {
          const githubUrl = `
            https://api.github.com/users/${login}
          `
          const response = await fetch(githubUrl)
          if (!response.ok) {
            return Swal.showValidationMessage(`
              ${JSON.stringify(await response.json())}
            `)
          }
          return response.json()
        } catch (error) {
          Swal.showValidationMessage(`
            Request failed: ${error}
          `)
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `報名成功`,
          icon: 'success',
          confirmButtonText: '了解',
          confirmButtonColor: '#192a56',
        })
      }
    })
  }




  const showInfo = () => {
    Swal.fire({
      title: title,
      text: introduction,
      imageUrl: `images/lectures/${img}.jpg`,
      imageWidth: 450,
      imageAlt: 'Custom image',
      confirmButtonColor: '#192a56',
      confirmButtonText: '了解',
    })
  }

  const showSpeaker = () => {
    Swal.fire({
      title: title,
      text: introduction,
      imageUrl: `images/lectures/${img}.jpg`,
      imageWidth: 450,
      imageAlt: 'Custom image',
      confirmButtonColor: '#192a56',
      confirmButtonText: '了解',
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
          <button className={styles.signUpformBtn} href="" onClick={signUpBtn}>
            <div>
              <span>點此報名</span>
              <span>免費參加</span>
            </div>
          </button>
        </div>
      </div>
    </>
  )
}
