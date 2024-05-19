import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import styles from '@/styles/members/login.module.css'
import LoginForm from '@/components/members/login-form'
import Navbar from '@/components/layout/navbar'

// const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(
//   <BrowserRouter>
//     <Navbar
//       navItemName={styles.navItemControl}
//       navbarControl={styles.navbarControl}
//     />
//     <LoginForm />
//   </BrowserRouter>
// )

export default function Login() {
  return (
    <>
      <Navbar
        navItemName={styles.navItemControl}
        navbarControl={styles.navbarControl}
      />
      <LoginForm />
    </>
  )
}
