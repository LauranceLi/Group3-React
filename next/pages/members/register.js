import React, { useState } from 'react'
import RegisterForm from '@/components/members/register-form'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

const baseUrl = 'http://localhost:3005/api/members/register'

export default function Register() {
  const [registerAccount, setRegisterAccount] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [registerName, setRegisterName] = useState('')
  const [registerMobile, setRegisterMobile] = useState('')
  const [interest, setInterest] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          registerAccount,
          registerPassword,
          registerName,
          registerMobile,
          interest,
        }),
      })
      const data = await response.json()
      setMessage(data.message)
    } catch (error) {
      console.error('Error:', error)
      setMessage('Registration failed. Please try again.')
    }
  }

  return (
    <>
      <Navbar />
      <RegisterForm />
      <Footer />
    </>
  )
}
