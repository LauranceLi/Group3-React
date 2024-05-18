import React, { useState } from 'react'
import { RiEyeFill } from 'react-icons/ri'
import { RiEyeOffFill } from 'react-icons/ri'
import styles from '/styles/members/login.module.css'

export default function IsVisible() {
  const [IsVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible(!IsVisible)
  }

  return (
    <div className={styles.loginItem}>
      <label htmlFor="loginPassword">密碼</label>
      <input
        className={styles.loginInput}
        name="loginPassword"
        type={IsVisible ? 'text' : 'password'}
        id="loginPassword"
        placeholder="請輸入密碼"
      />
      <button
        className={styles.eyeIcon}
        type="button"
        onClick={toggleVisibility}
      >
        {IsVisible ? <RiEyeFill size={18} /> : <RiEyeOffFill size={18} />}
      </button>
    </div>
  )
}
