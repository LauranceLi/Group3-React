import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '/styles/members/register.module.css'
import { 
  validateEmail, 
  validatePassword, 
  validatePasswordCheck, 
  validateName, 
  validateMobile 
} from '@/utils/validation'

import { ImGoogle2, ImFacebook2 } from 'react-icons/im'
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri'


const RegisterForm = () => {
  // 密碼可視 / 不可視
  const router = useRouter()
  const [IsVisible, setIsVisible] = useState(false)
  const [IsVisibleCheck, setIsVisibleCheck] = useState(false)
  const toggleVisibility = () => {
    setIsVisible(!IsVisible)
  }
  const toggleVisibilityCheck = () => {
    setIsVisibleCheck(!IsVisibleCheck)
  }
  // 記錄欄位輸入資料，狀態為物件，物件的屬性名稱要對應到欄位的名稱
  const [user, setUser] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    name: '',
    mobile: '',
    interest: '',
  })
  // 記錄欄位錯誤訊息的狀態
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    name: '',
    mobile: '',
    interest: '',
  })

  // 表單資料檢查 - 信箱（OK）、密碼（OK）、姓名（OK）、手機（OK）

  // 信箱檢查（完成）
  const [emailAvailableClass, setEmailAvailableClass] = useState('')
  const [emailAvailableMessage, setEmailAvailableMessage] = useState('')
  const handleEmailChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
    if (name === 'email') {
      const result = validateEmail(value)
      setEmailAvailableMessage(result.message)
      setEmailAvailableClass(result.className)
    }
  }



  // 密碼檢查（完成）
  const [pwAvailableClass, setPwAvailableClass] = useState('')
  const [pwAvailableMessage, setPwAvailableMessage] = useState('')
  const [pwSameClass, setPwSameClass] = useState('')
  const [pwSameMessage, setPwSameMessage] = useState('')
  const handlePasswordChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
    if (name === 'password' || name === 'passwordCheck') {
      const newPassword = name === 'password' ? value : user.password
      const confirmPassword = name === 'passwordCheck' ? value : user.passwordCheck
      const pwResult = validatePassword(newPassword)
      setPwAvailableMessage(pwResult.message)
      setPwAvailableClass(pwResult.className)
      const pwCheckResult = validatePasswordCheck(newPassword, confirmPassword)
      setPwSameMessage(pwCheckResult.message)
      setPwSameClass(pwCheckResult.className)
    }
  }

  // 姓名檢查（完成）
  const [nameAvailableClass, setNameAvailableClass] = useState('')
  const [nameAvailableMessage, setNameAvailableMessage] = useState('')
  const handleNameChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
    if (name === 'name') {
      const result = validateName(value)
      setNameAvailableMessage(result.message)
      setNameAvailableClass(result.className)
    }
  }

  // 手機檢查（完成）
  const [mobileAvailableClass, setMobileAvailableClass] = useState('')
  const [mobileAvailableMessage, setMobileAvailableMessage] = useState('')
  const handleMobileChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
    if (name === 'mobile') {
      const result = validateMobile(value)
      setMobileAvailableMessage(result.message)
      setMobileAvailableClass(result.className)
    }
  }

  // 阻擋表單（完成）
  const handleSubmit = async (e) => {
    // 阻擋表單預設送出行為
    e.preventDefault()

    // 表單檢查---START---
    // 建立一個新的錯誤訊息物件
    const newErrors = {
      email: '',
      password: '',
      name: '',
      mobile: '',
      passwordCheck: '',
    }

    if (!user.email) {
      newErrors.email = '帳號為必填欄位'
      setEmailAvailableMessage(newErrors.email)
      setEmailAvailableClass(styles.error)
    }
    if (!user.password) {
      newErrors.password = '密碼為必填欄位'
      setPwAvailableMessage(newErrors.password)
      setPwAvailableClass(styles.error)
    }
    if (!user.name) {
      newErrors.name = '姓名為必填欄位'
      setNameAvailableMessage(newErrors.name)
      setNameAvailableClass(styles.error)
    }
    if (!user.mobile) {
      newErrors.mobile = '手機號碼為必填欄位'
      setMobileAvailableMessage(newErrors.mobile)
      setMobileAvailableClass(styles.error)
    }
    if (user.passwordCheck !== user.password) {
      newErrors.passwordCheck = '兩次密碼不一致，請重新確認。'
      setPwSameMessage(newErrors.passwordCheck)
      setPwSameClass(styles.error)
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

    // 檢查沒問題後再送到伺服器
    const res = await fetch('http://localhost:3005/api/members/register', {
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
      router.push('/members')
    } else {
      alert(data.message)
    }
  }

  return (
    <main>
      <div className={`${styles.registerFormContainer} bg-img`}>
        <div className={styles.registerBox}>
          <div className={styles.registerTitle}>
            <h2>歡迎加入締杉旅遊</h2>
          </div>

          <div className={styles.thirdPartyLogin}>
            <h5>其他方式</h5>
            <div
              className={`${styles.registerItem} ${styles.thirdPartyLoginBtns}  border-0 justify-content-start`}
            >
              <a
                href=""
                className={`${styles.thirdPartyLoginBtn} ${styles.facebookIcon}`}
              >
                <ImFacebook2 size={22} />
                Facebook
              </a>
              <a
                href=""
                className={`${styles.thirdPartyLoginBtn} ${styles.googleIcon}`}
              >
                <ImGoogle2 size={22} />
                Google
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={styles.registerForm}>
            <h5>註冊</h5>
            <div className={styles.middleBox}>
              <div className={styles.leftBox}>
                <div
                  className={`${styles.registerItem} ${emailAvailableClass}`}
                >
                  <label htmlFor="email">
                    帳號<span className={styles.star}>*</span>
                  </label>

                  <input
                    className={styles.registerInput}
                    name="email"
                    type="email"
                    id="email"
                    placeholder="請填入信箱"
                    onChange={handleEmailChange}
                  />
                  <p>{emailAvailableMessage}</p>
                </div>
                <div
                  className={`${styles.registerItem}  ${styles.error} border-0 `}
                >
                  <button type="submit" className={`btn ${styles.checkMail}`}>
                    驗證信箱
                  </button>
                </div>
                <div className={`${styles.registerItem} ${pwAvailableClass}`}>
                  <label htmlFor="password">
                    密碼<span className={styles.star}>*</span>
                  </label>
                  <input
                    className={styles.registerInput}
                    name="password"
                    type={IsVisible ? 'text' : 'password'}
                    id="password"
                    placeholder="請輸入密碼"
                    onChange={handlePasswordChange}
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
                  <p>{pwAvailableMessage}</p>
                </div>

                <div className={`${styles.registerItem} ${pwSameClass}`}>
                  <label htmlFor="passwordAgain">確認密碼</label>
                  <input
                    className={styles.registerInput}
                    name="passwordCheck"
                    type={IsVisibleCheck ? 'text' : 'password'}
                    id="passwordAgain"
                    placeholder="請再次確認密碼"
                    onChange={handlePasswordChange}
                  />
                  <button
                    className={styles.eyeIcon}
                    type="button"
                    onClick={toggleVisibilityCheck}
                  >
                    {IsVisibleCheck ? (
                      <RiEyeFill size={18} />
                    ) : (
                      <RiEyeOffFill size={18} />
                    )}
                  </button>
                  <p className="checkError">{pwSameMessage}</p>
                </div>
              </div>
              <div className={styles.rightBox}>
                <div className={`${styles.registerItem} ${nameAvailableClass}`}>
                  <label htmlFor="name">
                    姓名<span className={styles.star}>*</span>
                  </label>
                  <input
                    className={styles.registerInput}
                    name="name"
                    type="text"
                    id="name"
                    placeholder="請輸入英文或中文姓名"
                    onChange={handleNameChange}
                  />
                  <p>{nameAvailableMessage}</p>
                </div>
                <div
                  className={`${styles.registerItem} ${mobileAvailableClass}`}
                >
                  <label htmlFor="mobile">
                    手機<span className={styles.star}>*</span>
                  </label>
                  <input
                    className={styles.registerInput}
                    name="mobile"
                    type="mobile"
                    id="mobile"
                    placeholder="ex: 0988123456"
                    onChange={handleMobileChange}
                  />
                  <p>{mobileAvailableMessage}</p>
                </div>
                <div className={styles.registerItem}>
                  <label htmlFor="interest">興趣主題</label>
                  <select name="interest" className={styles.interestSelect}>
                    <option
                      className={styles.interestOption}
                      value="south-america"
                    >
                      中南美洲
                    </option>
                    <option className={styles.interestOption} value="japan">
                      日本
                    </option>
                    <option className={styles.interestOption} value="europe">
                      歐洲
                    </option>
                  </select>
                </div>

                <div
                  className={`${styles.registerItem} border-0 d-flex align-items-end`}
                >
                  <button
                    type="submit"
                    className={`btn sonar-btn  ${styles.registerBtn}`}
                  >
                    註冊
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default RegisterForm
