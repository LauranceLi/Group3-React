import React from 'react'
import styles from '@/styles/members/member.module.css'
import Avatar from '@/components/members/avatar'
import MemberAction from '@/components/members/member-action'

export default function Member() {
  return (
    <main>
      <div className={styles.memberContainer}>
        <div className={styles.memberBox}>
          <div className={styles.leftBox}>
            <Avatar />
            <MemberAction className={styles.actionColumn} />
          </div>
          <div className={styles.rightBox}></div>
          <MemberAction className={styles.actionRow} />
        </div>
      </div>
    </main>
  )
}
