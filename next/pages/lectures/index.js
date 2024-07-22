// Lectures.js

import React, { useState, useEffect } from 'react'
import Preloader from '@/components/layout/preloader'
import Banner from '@/components/layout/banner'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import LectureList from '@/components/lecture/lecture-list'
import styles from '@/styles/lectures/lectures.module.css'

export default function Lectures() {
  const [category, setCategory] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  useEffect(() => {
    setImgUrl('./images/tes.jpg')
    setTitle('近期講座')
    setText(
      '在這廣袤的世界，心懷探索之志，欲遨遊四方！旅程的起點何在？終點又在何方？旅行的真諦是什麼？讓我們邀請智者、導師、探險家，解開這旅途之謎，揭開史詩般的旅程奧秘！'
    )
  }, [])

  const handleSelect = (states) => {
    setCategory(states)
  }

  return (
    <>
      <Preloader />
      <Navbar />
      <Banner imgUrl={imgUrl} title={title} text={text} />
      <LectureList category={category} />
      <Footer />
    </>
  )
}
