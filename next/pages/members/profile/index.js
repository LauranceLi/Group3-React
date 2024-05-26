import React from 'react'
import ProfileInfo from '@/components/members/profile-info'
import Preloader from '@/components/layout/preloader'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

export default function Register() {
  return (
    <>
      <Preloader />
      <Navbar />
      <ProfileInfo />
      <Footer />
    </>
  )
}
