import React from 'react'
import styles from '@/styles/members/member.module.css'
import useMemberInfo from '@/hooks/use-member-info';
import Avatar from '@/components/members/avatar'
import MemberCenter from '@/components/members/member-center'
import ActionList from '@/components/members/action-list'

export default function Member() {

const { name } = useMemberInfo()
  return (
    <main className={styles.memberMain}>
      <div className={styles.memberContainer}>
        <div className={styles.memberBox}>
          <div className={styles.leftBox}>
            <div className="member">
              <Avatar width={'9rem'} height={'9rem'} />
              <h2>{name}</h2>
            </div>
            <ActionList className={styles.actionColumn} />
          </div>
          <div className={styles.rightBox}>
            <MemberCenter />
          </div>
        </div>
      </div>
    </main>
  )
}
