import React from 'react'
import { useRouter } from 'next/router'
import useCheckLoginStatus from '@/hooks/use-check-login-status'

import ProfileInfo from '@/components/members/profile-info'
import Preloader from '@/components/layout/preloader'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

export default function Register() {
  const router = useRouter()
  const { isLoggedIn, isLoading } = useCheckLoginStatus()
  if (isLoading) {
    return <Preloader />;
  }

  if (!isLoggedIn) {
    router.push('/members/login');
    return null; // 防止在redirect之前顯示任何內容
  }
  return (
    <>
      <Preloader />
      <Navbar />
      <ProfileInfo />
      <Footer />
    </>
  )
}
