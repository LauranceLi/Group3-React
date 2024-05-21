import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '@/styles/members/login.module.css'
import Avatar from './avatar'
import { ImGoogle2 } from 'react-icons/im'
import { ImFacebook2 } from 'react-icons/im'
import { RiEyeFill } from 'react-icons/ri'
import { RiEyeOffFill } from 'react-icons/ri'
import { GiCommercialAirplane } from 'react-icons/gi'

// 解析accessToken用的函式
const parseJwt = (token) => {
  const base64Payload = token.split('.')[1]
  const payload = Buffer.from(base64Payload, 'base64')
  return JSON.parse(payload.toString())
}

const LoginForm = () => {
  const router = useRouter()
  const [IsVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const toggleVisibility = () => {
    setIsVisible(!IsVisible)
  }

  // 記錄欄位輸入資料，狀態為物件，物件的屬性名稱要對應到欄位的名稱
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  // 記錄欄位錯誤訊息的狀態
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })

  const handleFieldChange = (e) => {
    // 可以利用e.target觀察目前是在輸入或操作哪個欄位上
    setUser({ ...user, [e.target.name]: e.target.value })
    console.log(e.target.name, e.target.type, e.target.value)
    console.log(user)
  }

  // 表單送出事件處理函式

  const handleSubmit = async (e) => {
    // 阻擋表單預設送出行為
    e.preventDefault()

    // 表單檢查---START---
    // 建立一個新的錯誤訊息物件
    const newErrors = { email: '', password: '' }

    if (!user.email) {
      newErrors.email = '帳號為必填'
    }

    if (user.password && user.password.length < 6) {
      newErrors.password = '密碼至少6個字元'
    }

    if (user.password === '') {
      newErrors.password = '密碼為必填'
    }

    // 檢查完設定到狀態中
    setErrors(newErrors)

    // 物件屬性值中有非空白字串時，代表有錯誤發生
    const hasErrors = Object.values(newErrors).some((v) => v)

    // 有錯誤發生，不送到伺服器去
    if (hasErrors) {
      return
    }
    // 表單檢查--- END ---
    setIsLoading(true)
    // 檢查沒問題後再送到伺服器
    const res = await fetch('http://localhost:3005/api/members/login', {
      credentials: 'include', // 設定cookie或是要存取隱私資料時帶cookie到伺服器一定要加
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })

    const data = await res.json()

    if (data.status === 'success') {
      const returnUser = parseJwt(data.data.accessToken)
      console.log(returnUser)
      router.push('/members')
    } else {
      alert(data.message)
    }
  }

  // const handleCheck = async () => {
  //   // 檢查沒問題後再送到伺服器
  //   const res = await fetch('http://localhost:3005/api/members/check', {
  //     credentials: 'include', // 設定cookie或是要存取隱私資料時帶cookie到伺服器一定要加
  //     method: 'GET',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //   })

  //   const data = await res.json()

  //   if (data.status === 'success') {
  //     console.log(data.data)
  //   } else {
  //     alert(data.message)
  //   }
  // }

  return (
    <>
   
      <main>
        <div className={`${styles.loginFormContainer} bgImg`}>
          <div className={styles.leftBox}>
            <Avatar width={'12rem'} height={'12rem'} />
            <form onSubmit={handleSubmit} className={styles.loginForm}>
              <h5>會員登入</h5>
              <div className={styles.loginItem}>
                <label htmlFor="email">帳號</label>
                <input
                  className={styles.loginInput}
                  value={user.email}
                  name="email"
                  type="text"
                  placeholder="請填入信箱"
                  onChange={handleFieldChange}
                />
              </div>
              <div className={styles.loginItem}>
                <label htmlFor="password">密碼</label>
                <input
                  className={styles.loginInput}
                  name="password"
                  value={user.password}
                  type={IsVisible ? 'text' : 'password'}
                  id="password"
                  placeholder="請輸入密碼"
                  onChange={handleFieldChange}
                />
                <button
                  className={styles.eyeIcon}
                  type="button"
                  onClick={toggleVisibility}
                >
                  {IsVisible ? (
                    <RiEyeFill size={18} />
                  ) : (
                    <RiEyeOffFill size={18} />
                  )}
                </button>
              </div>

              <div className={styles.loginItem}>
                <button
                  type="submit"
                  className={`btn sonarBtn whiteBtn ${styles.loginBtn}`}
                >
                  登入
                </button>
              </div>
              <div className={styles.loginItem}>
                <Link
                  href="/members/register"
                  title='註冊'
                  className={`${styles.registerBtn}`}
                >
                  立即加入
                </Link>
              </div>
              <a href="#" className={styles.forgetPW}>
                忘記密碼
              </a>
            </form>
            <div className={styles.thirdPartyLogin}>
              <h5>其他登入方式</h5>
              <div className={`${styles.loginItem} border-0`}>
                <a href="" className={`${styles.thirdPartyLoginBtn} `}>
                  <ImFacebook2 size={22} className={styles.facebookIcon} />
                  Facebook
                </a>
                <a href="" className={styles.thirdPartyLoginBtn}>
                  <ImGoogle2 size={22} />
                  Google
                </a>
              </div>
            </div>
          </div>
          <div className={styles.rightBox}>
            <div className={styles.introduction}>
              <h1>締杉旅遊</h1>
              <h5>
                杉之質樸蒼翠，春迎萬物復甦，夏傍蔚藍湖畔，秋見金黃樹影，冬又敖然而立，如君子而締之以心。
                <br />
                <br />
                沐浴在溫潤儒雅間，徜徉於天地褒廣中，靈魂的祥和與寧靜，妙不可言。
              </h5>
              <h2>締杉旅遊 邀您領略，四季遞嬗。</h2>
            </div>
            <div className={styles.contact}>
              <button className={`${styles.contactBtn}`}>
                <div>
                  <span>
                    探索更多精彩 <GiCommercialAirplane size={35} />
                  </span>
                  <span>聯絡我們</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default LoginForm
