import React from 'react'
import RegisterForm from '@/components/members/register-form'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

export default function Register() {
  return (
    <>
      <Navbar />
      <RegisterForm />
      <Footer/>
    </>
  )
}
