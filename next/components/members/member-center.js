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
import OrderQueryNew from '../order/order_query_new'

export default function MemberCenter() {
  const { lectures, loading } = useFetchLectures()
  const { points, tag } = useMemberInfo()
  const [recommend, setRecommend] = useState([])

  useEffect(() => {
    if (!loading) {
      if (tag) {
        const recommendedLectures = lectures.filter(
          (lecture) => lecture.category === tag
        )
        setRecommend(recommendedLectures.slice(0, 1))
      } else {
        setRecommend(lectures.slice(0, 1))
      }
    }
  }, [lectures, loading])
console.log(lectures);


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
                <button className={styles.signInBtn} type="button">
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
        </div>
      </div>
      <div className={styles.itineraryInfo}>
        <div className={styles.memberItem}>
          <Link href="/cart/order_query" title="購物車">
            <h5>商城訂單</h5>
          </Link>
          <OrderQueryNew />
        </div>
      </div>
    </>
  )
}
