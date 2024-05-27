
import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/members/login.module.css'
import Preloader from '@/components/layout/preloader'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Preloader />
    <Navbar />
      <h1>假裝有的首頁</h1>
    <Footer />
    </>
  )
}
