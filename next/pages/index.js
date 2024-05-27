import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/home.module.css'
import Search from '@/components/search/search'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1>假裝有的首頁</h1>
      <Search />
    </>
  )
}
