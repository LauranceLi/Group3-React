import React from 'react'
import styles from '@/styles/members/member.module.css'
import MemberAction from '@/components/members/action-list'
import useMemberInfo from '@/hooks/use-member-info';

import { FaStar } from 'react-icons/fa'

export default function MemberCenter() {
  const {points} = useMemberInfo()
  return (
    <>
      <MemberAction className={styles.actionRow} />
      <div className={styles.offerInfo}>
        <div className={`${styles.recommendItinerary} ${styles.memberItem}`}>
          <h5>行程推薦</h5>
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
          <h5>商城訂單</h5>
        </div>
      </div>
    </>
  )
}
