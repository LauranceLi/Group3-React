import React from 'react'
import styles from '@/styles/members/profile.module.css'
import useMemberInfo from '@/hooks/use-member-info'
import Avatar from '@/components/members/avatar'
import MemberAction from '@/components/members/action-list'

export default function ProfileInfo() {
  const { name } = useMemberInfo()
  return (
    <>
      <main className={styles.memberMain}>
        <div className={styles.memberContainer}>
          <div className={styles.memberBox}>
            <div className={styles.leftBox}>
              <div className="member">
                <Avatar width={'10rem'} height={'10rem'} />
                <h4>{name}</h4>
              </div>
              <MemberAction className={styles.actionColumn} />
            </div>
            <div className={styles.rightBox}>
              <MemberAction className={styles.actionRow} />
              <div className={styles.infoItem}>
                <h5>姓名</h5>
              </div>
              <div className={styles.infoItem}>
                <h5></h5>
              </div>
              <div className={styles.infoItem}>
                <h5></h5>
              </div>
              <div className={styles.infoItem}>
                <h5></h5>
              </div>
              <div className={styles.infoItem}>
                <h5></h5>
              </div>
              <div className={styles.infoItem}>
                <h5></h5>
              </div>
              <div className={styles.infoItem}>
                <h5></h5>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
