import React from 'react'
import styles from '@/styles/members/member.module.css'
import cn from 'classnames'

export default function MemberAction({ className }) {
  return (
    <div className={cn(styles.memberActionList, className)}>
      <a className={styles.memberActionItem} href="">
        會員資料
      </a>
      <a className={styles.memberActionItem} href="">
        積分明細
      </a>
      <a className={styles.memberActionItem} href="">
        帳戶安全
      </a>
      <a className={styles.memberActionItem} href="">
        登出
      </a>
    </div>
  )
}
