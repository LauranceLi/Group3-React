// Lectures.js

import React, { useState } from 'react'
import Preloader from '@/components/layout/preloader'
import Banner from '@/components/layout/banner'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import LectureList from '@/components/lecture/lecture-list'
import styles from '@/styles/lectures/lectures.module.css'

export default function Lectures() {
  const [category, setCategory] = useState('')

  const handleSelect = (states) => {
    setCategory(states)
  }

  return (
    <>
      <Preloader />
      <Navbar />
      <Banner imgUrl={'./images/tes.jpg'} />
      <LectureList category={category} />
      <Footer />
    </>
  )
}
