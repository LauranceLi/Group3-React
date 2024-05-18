import React from 'react'
import styles from '@/styles/members/login.module.css'
import LoginForm from '@/components/members/login-form'
import Navbar from '@/components/layout/navbar'

export default function Login() {
  return (
    <>
      <Navbar  navItemName={styles.navItemControl} navbarControl ={styles.navbarControl} />
      <LoginForm />
    </>
  )
}
