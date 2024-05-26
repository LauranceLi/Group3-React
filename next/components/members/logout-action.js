import React from 'react'
import { useRouter } from 'next/router'

const logoutUrl = 'http://localhost:3005/api/members/logout'

const LogoutAction = () => {
  const router = useRouter()
  const handleLogout = async () => {
    const res = await fetch(logoutUrl, {
      credentials: 'include',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })

    const data = await res.json()

    if (data.status === 'success') {
      // 清除登入狀態
      // 重新導向到登入頁面
      router.push('/members/login')
    } else {
      // 處理登出失敗的情況
      alert('登出失敗')
    }
  }
  handleLogout()
  return <>
    
  </>
}

export default LogoutAction
