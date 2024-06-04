import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Swal from 'sweetalert2'
import styles from '@/styles/members/member.module.css'
import MemberAction from '@/components/members/action-list'
import useMemberInfo from '@/hooks/use-member-info'
import useFetchLectures from '@/hooks/use-fetch-lectures'
import { FaStar } from 'react-icons/fa'
import { BsFillPersonVcardFill } from 'react-icons/bs'
import { BsInfoCircle } from 'react-icons/bs'
import { FaRegThumbsUp } from 'react-icons/fa'
import { BsPersonFillGear } from 'react-icons/bs'
import OrderQueryNew from '../order/order_query_new'

export default function MemberCenter() {
  const { lectures, loading } = useFetchLectures()
  const { points, tag, email, mobile, name } = useMemberInfo()
  const [recommend, setRecommend] = useState([])
  const [dataLoaded, setDataLoaded] = useState(false) // 添加一个状态来表示数据是否已加载完成
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

  useEffect(() => {
    if (!loading && lectures.length > 0) {
      if (tag) {
        const recommendedLectures = lectures.filter(
          (lecture) => lecture.category === tag
        )
        setRecommend(recommendedLectures.slice(0, 1))
      } else {
        setRecommend(lectures.slice(0, 1))
      }
      setDataLoaded(true) // 设置数据已加载完成
    }
  }, [lectures, loading, tag])

  // 只有在数据加载完成后才渲染相关内容
  if (!dataLoaded) {
    return <div>Loading...</div>
  }

  const showInfo = () => {
    Swal.fire({
      title: recommend[0].title,
      text: recommend[0].introduction,
      imageUrl: `images/lectures/${recommend[0].img_id}.jpg`,
      imageWidth: 450,
      imageAlt: 'Custom image',
      confirmButtonColor: '#192a56',
      confirmButtonText: '了解',
    })
  }

  return (
    <>
      <MemberAction className={styles.actionRow} />
      <div className={styles.title}>
        <BsFillPersonVcardFill size={40} className={styles.memberActionIcon} />
        <h4>會員中心</h4>
      </div>
      <div className={styles.offerInfo}>
        <div className={`${styles.recommendLecture} ${styles.memberItem}`}>
          <h5>講座推薦</h5>
          <div className={styles.recommenItem}>
            <div className={styles.imgContainer}>
              <img
                src={`/images/lectures/${recommend[0].img_id}.jpg`}
                alt={recommend[0].title}
              />
            </div>
            <div className={styles.textContainer}>
              <p>主題：{recommend[0].title}</p>
              <p>時間：{recommend[0].date.slice(5, 16)}</p>
              <div className={styles.btnCountainer}>
                <button
                  className={styles.infoBtn}
                  onClick={showInfo}
                  type="button"
                >
                  <BsInfoCircle size={23} />
                </button>
                <button
                  className={styles.signInBtn}
                  type="button"
                  onClick={signUpBtn}
                >
                  <FaRegThumbsUp size={23} />
                  報名參加
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={`${styles.remainPointsBox} ${styles.memberItem}`}>
          <h5>剩餘積分</h5>
          <div className={styles.remainPoints}>
            <FaStar size={25} className={styles.remainPointsIcon} />
            <h3>{points}</h3>
          </div>
        </div>
      </div>
      <div className={styles.orderInfo}>
        <div className={styles.memberItem}>
          <h5>行程預定</h5>
          <p>暫無預定行程</p>
        </div>
      </div>
      <div className={styles.itineraryInfo}>
        <div className={styles.memberItem}>
          <Link href="/cart/order_query" title="訂單詳細">
            <Link href="/cart/order_query" title="點擊查詢訂單詳情" />
            <h5>商城訂單</h5>
            <div className="mt-3">
              <OrderQueryNew />
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
