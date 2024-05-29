import React from 'react'
import {
  GoogleOAuthProvider,
  useGoogleLogin,
  useGoogleOneTapLogin,
} from '@react-oauth/google'
import { useRouter } from 'next/router'
import axios from 'axios'
import { ImGoogle2 } from 'react-icons/im'
import styles from '@/styles/members/login.module.css'

function GoogleLoginButton() {
  const router = useRouter()
  const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async (codeResponse) => {
      // console.log(codeResponse)
      const info = await axios.post('http://localhost:3005/api/members/auth/google', {
        code: codeResponse.code,
      })
      console.log(info.data)
      // router.push('/members')
    },
    onError: (errorResponse) => console.log(errorResponse),
  })

  return (
    <button className={styles.thirdPartyLoginBtn} onClick={() => googleLogin()}>
      <ImGoogle2 size={22} />
      Google
    </button>
  )
}

function MainContent() {
  useGoogleOneTapLogin({
    onSuccess: (credentialResponse) => {
      console.log(credentialResponse)
    },
    onError: () => {
      console.log('Login Failed')
    },
  })

  return <GoogleLoginButton />
}

function Main() {
  return (
    <GoogleOAuthProvider clientId="800909597978-ros4m9t6dfugt5im5df6ulfud19henpo.apps.googleusercontent.com">
      <MainContent />
    </GoogleOAuthProvider>
  )
}

export default Main
