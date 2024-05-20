import React from 'react'
import Image from 'next/image'
import styles from '@/styles/members/login.module.css'

function Avatar({ width, height }) {
  return (
    <div className={styles.avatarContainer}>
      <div className={styles.avatar} style={{ width: width, height: height }}>
        <Image
          src='/images/cedarAvatar.jpg'
          alt="Avatar"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

export default Avatar
