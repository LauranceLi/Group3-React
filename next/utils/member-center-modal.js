import React from 'react'

import styles from '@/styles/members/member.module.css'
import Avatar from '@/components/members/avatar'
import ActionList from '@/components/members/action-list'

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
            <ActionList className={styles.actionColumn} />
          </div>
          <div className={styles.rightBox}>
            <ActionList className={styles.actionRow} />

            {/*  */}


          </div>
        </div>
      </div>
    </main>
  )
}
