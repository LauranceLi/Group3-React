import React, { useEffect, useState } from 'react'
import Member from '@/components/members/member'
import Preloader from '@/components/layout/preloader'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

const baseUrl = 'http://localhost:3005/api/members'

export default function Register() {
  useEffect(() => {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])
  return (
    <>
      <Navbar />

      <Member />

      <Footer />
    </>
  )
}
