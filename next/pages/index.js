import React, { useState } from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/members/login.module.css'
import Slider from '@/components/slider'
import Preloader from '@/components/layout/preloader'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import Search from '@/components/search/search'
import ItineraryCard from '@/components/itinerary/itinerary-card'
import LectureList from '@/components/lecture/lecture-list'
import SelectBar from '@/components/lecture/select-bar'

import Drawer from '@/components/layout/drawer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [category, setCategory] = useState('')
  const handleSelect = (states) => {
    setCategory(states)
  }
  return (
    <>
      <Preloader />

      <Navbar />
      <Slider />
      <LectureList category={category} limit={6} />
      <ItineraryCard />
      <Footer />
    </>
  )
}
