import React from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/members/member.module.css'
import useMemberInfo from '@/hooks/use-member-info'
import Avatar from '@/components/members/avatar'
import MemberAction from '@/components/members/action-list'

import { FaShieldAlt } from 'react-icons/fa'
import { VscSignOut } from 'react-icons/vsc'
import { FaStar } from 'react-icons/fa'
import { BsFillPersonVcardFill } from 'react-icons/bs'
import { BsPersonFillGear } from 'react-icons/bs'
import { stripLow } from 'validator'

export default function ProfileInfo() {
  const {
    name,
    email,
    firstName,
    lastName,
    birthday,
    address,
    mobile,
    tag,
    idNum,
    points,
  } = useMemberInfo()
  const router = useRouter()
  const toEdit = () => {
    router.push('/members/profile/edit')
  }

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
              <div className={styles.title}>
                <BsPersonFillGear
                  size={40}
                  className={styles.memberActionIcon}
                />
                <h4>會員資料</h4>
              </div>
              <div className={styles.infoList}>
                <div className={styles.infoLeft}>
                  <div className={styles.infoItem}>
                    <h5>姓名</h5>
                    <p>{name}</p>
                  </div>
                  <div className={styles.infoItem}>
                    <h5>護照姓名</h5>
                    <div className={styles.passportName}>
                      <p className="me-3">{firstName}</p>
                      <p>{lastName}</p>
                    </div>
                  </div>
                  <div className={styles.infoItem}>
                    <h5>信箱</h5>
                    <p>{email}</p>
                  </div>
                  <div className={styles.infoItem}>
                    <h5>身分證字號</h5>
                    <p>{idNum}</p>
                  </div>
                </div>
                <div className={styles.infoRight}>
                  <div className={styles.infoItem}>
                    <h5>手機號碼</h5>
                    <p>{mobile}</p>
                  </div>
                  <div className={styles.infoItem}>
                    <h5>地址</h5>
                    <p>{address}</p>
                  </div>
                  <div className={styles.infoItem}>
                    <h5>興趣</h5>
                    <p>{tag}</p>
                  </div>
                  <div className={styles.infoItem}>
                    <h5>生日</h5>
                    <p>{birthday}</p>
                  </div>
                </div>
              </div>
              <buttom type="buttom" className={styles.editBtn} onClick={toEdit}>
                編輯
              </buttom>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
