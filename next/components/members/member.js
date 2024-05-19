import React from 'react'
import styles from '@/styles/members/member.module.css'
import Avatar from '@/components/members/avatar'
import MemberAction from '@/components/members/member-action'
import { FaStar } from 'react-icons/fa'

export default function Member() {
  return (
    <main className={styles.memberMain}>
      <div className={styles.memberContainer}>
        <div className={styles.memberBox}>
          <div className={styles.leftBox}>
            <div className="member">
              <Avatar width={'10rem'} height={'10rem'} />
              <h4>締杉旅遊</h4>
            </div>
            <MemberAction className={styles.actionColumn} />
          </div>
          <div className={styles.rightBox}>
            <div className={styles.offerInfo}>
              <div className={styles.recommendItinerary}></div>
              <div className={styles.remainPoints}>

                <div className={styles.iconBorder}>
                  <FaStar />
                </div>
                <div className={styles.rightBox}>
                  <h5>剩餘點數</h5>
                  <h3>123456</h3>
                </div>
              </div>
            </div>
            <div className={styles.orderInfo}></div>
            <div className={styles.itineraryInfo}></div>
            <MemberAction className={styles.actionRow} />
          </div>
        </div>
      </div>
    </main>
  )
}
