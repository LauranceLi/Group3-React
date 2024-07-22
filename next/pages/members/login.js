import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/members/login.module.css'
import Preloader from '@/components/layout/preloader'
import LoginForm from '@/components/members/login-form'
import Navbar from '@/components/layout/navbar'
import useCheckLoginStatus from '@/hooks/use-check-login-status'


const Login = () => {
  const router = useRouter()
  const { isLoggedIn, isLoading } = useCheckLoginStatus()
  if (isLoggedIn) {
    router.push('/members')
    return null // 防止在redirect之前顯示任何內容
  }
  return (
    <>
      <Preloader />
      <Navbar
      />
      <LoginForm />
    </>
  )
}

export default Login
