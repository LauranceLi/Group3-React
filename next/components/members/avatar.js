import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '/styles/login.module.css'

function Avatar() {
  const [avatarPath, setAvatarPath] = useState('/images/cedarAvatar.jpg')

  return (
    <div className={styles.avatarContainer}>
      <div className={styles.avatar}>
        <Image
          src={avatarPath}
          alt="Avatar"
          layout="fill" // 使用 fill 模式
          objectFit="cover" // 确保图像填满容器并保持比例
        />
      </div>
    </div>
  )
}

export default Avatar
