// useMemberInfo.js
import { useState, useEffect } from 'react'

const useMemberInfo = () => {
  const [avatar, setAvatar] = useState('/images/flowers.jpg')
  const [name, setName] = useState()
  const [birthday, setBirthday] = useState()
  const [address, setAddress] = useState()
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [mobile, setMobile] = useState()
  const [idNum, setIdNum] = useState()
  const [points, setPoints] = useState(0)
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
          setFirstName(data.data.first_name)
          setLastName(data.data.last_name)
          setMobile(data.data.mobile)
          setIdNum(data.data.idNum)
          setEmail(data.data.email)
        }
        if (!data.data.points) {
          setPoints(0)
        }
      } catch (error) {
        console.error('Failed to fetch avatar:', error)
      }
    }

    fetchInfo()
  }, [])

  return {
    avatar,
    name,
    birthday,
    address,
    firstName,
    lastName,
    mobile,
    idNum,
    points,
    email,
  }
}

export default useMemberInfo
