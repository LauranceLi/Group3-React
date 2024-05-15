import React from 'react'
import Link from 'next/link'
import LoginForm from '../components/members/login-form'

const HomePage = () => {
  return (
    <React.StrictMode>
      <h1>首頁</h1>
      <Link href="/members/login" style={{ fontSize: '20px' }}>
        登入頁面
      </Link>
      <br />
      <Link href="/members/register" style={{ fontSize: '20px' }}>
        註冊頁面
      </Link>
    </React.StrictMode>
  )
}

export default HomePage
