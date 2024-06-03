import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import useMemberInfo from '@/hooks/use-member-info'
import styles from '@/styles/members/login.module.css'

function Avatar({ width, height, avatarUrl }) {
  const { avatar } = useMemberInfo()
  const [showAvatar, setShowAvatar] = useState('')

  useEffect(() => {
    if (!avatar) {
      setShowAvatar('/images/forest.jpg')
      // setShowAvatar(avatarUrl)
    } else {
      setShowAvatar(avatar)
    }
  })

  return (
    <div className={styles.avatarContainer}>
      <div className={styles.avatar} style={{ width: width, height: height }}>
        <Image src={showAvatar} alt="Avatar" layout="fill" objectFit="cover" />
      </div>
    </div>
  )
}

export default Avatar
