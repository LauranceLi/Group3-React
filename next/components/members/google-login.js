import React from 'react'
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google'
import { PlayFabClient } from 'playfab-sdk'
import styles from '@/styles/members/login.module.css'
import { ImGoogle2 } from 'react-icons/im'

function GoogleLoginButton() {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      const access_token = tokenResponse.access_token
      // 调用 PlayFab API 建立帐号
      PlayFabClient.LoginWithGoogleAccount(
        {
          AccessToken: access_token,
          CreateAccount: true,
          TitleId: 'YOUR_PLAYFAB_TITLE', // 替换成你的 PlayFab Title ID
        },
        onPlayFabResponse
      )
    },
    onError: (err) => {
      console.log('Login Failed', err)
      alert('登入失敗請再試一次')
    },
  })

  return (
    <button className={styles.thirdPartyLoginBtn} onClick={() => login()}>
      <ImGoogle2 size={22} />
      Google
    </button>
  )
}

function Main() {
  // 初始化 PlayFabClient
  PlayFabClient.settings.titleId = 'your title id'
  PlayFabClient.settings.developerSecretKey = 'your key'

  return (
    <>
      <GoogleOAuthProvider clientId="800909597978-ros4m9t6dfugt5im5df6ulfud19henpo.apps.googleusercontent.com">
        <GoogleLoginButton />
      </GoogleOAuthProvider>
    </>
  )
}

export default Main


