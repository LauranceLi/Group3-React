import React from 'react'
import Link from 'next/link'
import styles from '@/styles/members/member.module.css'
import { FaShieldAlt } from 'react-icons/fa'
import { VscSignOut } from 'react-icons/vsc'
import { FaStar } from "react-icons/fa";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { BsPersonFillGear } from "react-icons/bs";

export default function ActionList({ className }) {
  return (
    <div className={className}>
      <Link className={styles.memberActionItem} href="/members" >
      <BsFillPersonVcardFill size={20} className={styles.memberActionIcon}/>
        會員中心
      </Link>
      <Link className={styles.memberActionItem} href="/members/profile" >
      <BsPersonFillGear size={20} className={styles.memberActionIcon}/>
        會員資料
      </Link>
      <Link className={styles.memberActionItem} href="">
      <FaStar size={20} className={styles.memberActionIcon}/>
        積分明細
      </Link>
      <Link className={styles.memberActionItem} href="">
        <FaShieldAlt size={18} className={styles.memberActionIcon} />
        帳戶安全
      </Link>
      <Link className={styles.memberActionItem} href="">
        <VscSignOut size={22} className={styles.memberActionIcon} />
        帳戶登出
      </Link>
    </div>
  )
}
