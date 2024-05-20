import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/members/login.module.css'
import Preloader from '@/components/layout/preloader'
import LoginForm from '@/components/members/login-form'
import Navbar from '@/components/layout/navbar'

const checkUrl = 'http://localhost:3005/api/members/check'

const Login = () => {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkLoginStatus = async () => {
      const res = await fetch(checkUrl, {
        credentials: 'include',
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })

      const data = await res.json()

      if (data.status === 'success') {
        setIsLoggedIn(true)
      }
      setIsLoading(false)
    }

    checkLoginStatus()
  }, [])

  if (isLoading) {
    return <Preloader />
  }

  if (isLoggedIn) {
    router.push('/members')
    return null // 防止在redirect之前顯示任何內容
  }
  return (
    <>
      <Preloader />
      <Navbar
        navItemName={styles.navItemControl}
        navbarControl={styles.navbarControl}
      />
      <LoginForm />
    </>
  )
}

export default Login
