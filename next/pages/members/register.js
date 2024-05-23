import React, { useState } from 'react'
import RegisterForm from '@/components/members/register-form'


import Preloader from '@/components/layout/preloader'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

const baseUrl = 'http://localhost:3005/api/members/register'

export default function Register() {

  return (
    <>
      <Preloader />
      <Navbar />
      <RegisterForm />
      <Footer />
    </>
  )
}
