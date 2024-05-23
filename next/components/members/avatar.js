import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '@/styles/members/login.module.css'

function Avatar({ width, height }) {
  const [avatar, setAvatar] = useState('/images/flowers.jpg')

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const res = await fetch('http://localhost:3005/api/members/get_info', {
          credentials: 'include',
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })

        const data = await res.json()

        if (data.status === 'success') {
          setAvatar(data.data.avatar)
        }
      } catch (error) {
        console.error('Failed to fetch avatar:', error)
      }
    }

    fetchAvatar()
    console.log(avatar)
  }, [])
  if (!avatar){
setAvatar('/images/flowers.jpg')
  }

  return (
    <div className={styles.avatarContainer}>
      <div className={styles.avatar} style={{ width: width, height: height }}>
        {/* <h1>{avatar}</h1> */}
        <Image
          src={avatar}
          alt="Avatar"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

export default Avatar
