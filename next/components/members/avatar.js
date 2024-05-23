import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '@/styles/members/login.module.css'

function Avatar({ width, height }) {
  const [avatar, setAvatar] = useState('/images/flowers.jpg')
  const [name, setName] = useState()
  const [birthday, setBirthday] = useState()
  const [address, setAddress] = useState()
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [mobile, setMobile] = useState()
  const [idNum, setIdNum] = useState()
  const [points, setPoints] = useState()
  const [email, setEmail] = useState()

  useEffect(() => {
    const infoUrl = 'http://localhost:3005/api/members/get_info'
    const fetchInfo = async () => {
      try {
        const res = await fetch(infoUrl, {
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
          setName(data.data.name)
          setBirthday(data.data.birthday)
          setAddress(data.data.address)
          setFirstName(data.data.firstName)
          setLastName(data.data.lastName)
          setMobile(data.data.mobile)
          setIdNum(data.data.idNum)
          setPoints(data.data.points)
          setEmail(data.data.email)
          SUPPORTED_NATIVE_MODULES
        }
      } catch (error) {
        console.error('Failed to fetch avatar:', error)
      }
    }

    fetchInfo()
  }, [])

  
  if (!avatar) {
    setAvatar('/images/flowers.jpg')
  }

  return (
    <div className={styles.avatarContainer}>
      <div className={styles.avatar} style={{ width: width, height: height }}>
        {/* <h1>{avatar}</h1> */}
        <Image src={avatar} alt="Avatar" layout="fill" objectFit="cover" />
      </div>
    </div>
  )
}

export default Avatar
