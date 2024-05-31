import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/members/member.module.css'

import useMemberInfo from '@/hooks/use-member-info'
import Avatar from '@/components/members/avatar'
import MemberAction from '@/components/members/action-list'

import {
  validateName,
  validateMobile,
  validatePassportName,
  validateIdNum,
} from '@/utils/validation'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { BsPersonFillGear } from 'react-icons/bs'


// 開發用
import TestBtn from '@/components/test/testBtn'

export default function ProfileEdit() {
  const {
    name,
    email,
    firstName,
    lastName,
    birthday,
    address,
    mobile,
    tag,
    idNum,
    points,
  } = useMemberInfo()

  // 記錄欄位輸入資料，狀態為物件，物件的屬性名稱要對應到欄位的名稱
  const [user, setUser] = useState({
    name: '',
    email: '',
    firstName: '',
    lastName: '',
    birthday: '',
    address: '',
    mobile: '',
    idNum: '',
    points: 0,
    tag: '',
  })

  // 記錄欄位錯誤訊息的狀態
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    firstName: '',
    lastName: '',
    birthday: '',
    address: '',
    mobile: '',
    idNum: '',
    points: 0,
    tag: '',
  })

  useEffect(() => {
    setUser({
      ...user,
      name: name,
      email: email,
      firstName: firstName,
      lastName: lastName,
      address: address,
      mobile: mobile,
      idNum: idNum,
      points: points,
      birthday: birthday,
      tag: tag,
    })
  }, [name])

  const router = useRouter()
  const [startDate, setStartDate] = useState()

  // 表單資料檢查 - 姓名（OK）、手機（OK）、護照姓名（OK）、身分證字號（OK）

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

  // 護照姓名（完成）
  const [passportAvailableClass, setPassportAvailableClass] = useState('')
  const [passportAvailableMessage, setPassportAvailableMessage] = useState('')
  const [firstNameResult, setFirstNameResult] = useState('')
  const [lastNameResult, setLastNameResult] = useState('')

  const handlePassportChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
    if (name === 'firstName') {
      setFirstNameResult(validatePassportName(value))
    }
    if (name === 'lastName') {
      setLastNameResult(validatePassportName(value))
    }
    if (firstNameResult && lastNameResult) {
      setPassportAvailableMessage('可用的護照姓名')
      setPassportAvailableClass(styles.success)
    } else {
      setPassportAvailableMessage('護照姓名需且僅首字母大寫')
      setPassportAvailableClass(styles.error)
    }
  }

  //身分證字號（完成）
  const [idNumAvailableClass, setIdNumAvailableClass] = useState('')
  const [idNumAvailableMessage, setIdNumAvailableMessage] = useState('')
  const handleIdNumChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
    if (name === 'idNum') {
      const result = validateIdNum(value)
      setIdNumAvailableMessage(result.message)
      setIdNumAvailableClass(result.className)
    }
  }
  //生日（完成）
  const handleBirthdayChange = (date) => {
    setUser({ ...user, birthday: date })
    setStartDate(date)
  }

  // tag
  const handleTagChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  //  地址

  const handleAddressChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  // 阻擋表單（）
  const handleSubmit = async (e) => {
    // 阻擋表單預設送出行為
    e.preventDefault()

    // 表單檢查---START---
    // 建立一個新的錯誤訊息物件
    const newErrors = {
      name: '',
      email: '',
      firstName: '',
      lastName: '',
      birthday: '',
      address: '',
      mobile: '',
      idNum: '',
      points: 0,
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
    if (!user.idNum) {
      newErrors.idNum = '身分證字號為必填欄位'
      setIdNumAvailableMessage(newErrors.idNum)
      setIdNumAvailableClass(styles.error)
    }

    if (!user.firstName || !user.lastName) {
      newErrors.firstName = '護照姓名為必填欄位'
      setPassportAvailableMessage(newErrors.firstName)
      setPassportAvailableClass(styles.error)
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
    console.log(user)
    // 檢查沒問題後再送到伺服器
    const res = await fetch('http://localhost:3005/api/members/profile_edit', {
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
      console.log(data)
      router.push('/members/profile')
    } else {
      alert(data.message)
    }
  }

  const newUserInfoInput = () => {
    setUser({ 
      name:'新使用者',
      email:'newUser@gmail.com',
      firstName: 'User',
      lastName: 'New',
      birthday: '2024-06-07',
      address: '苗栗縣苑裡鎮興華街25號',
      mobile: '0964521456',
      idNum: 'A123456789',
      tag:'歐洲',
      points: 0,})
  }


  return (
    <>
    <TestBtn testInput_6={newUserInfoInput}/>
      <main className={styles.memberMain}>
        <div className={styles.memberContainer}>
          <div className={styles.memberBox}>
            <div className={styles.leftBox}>
              <div className="member">
                <Avatar width={'10rem'} height={'10rem'} />

                <h2>{name}</h2>
              </div>
              <MemberAction className={styles.actionColumn} />
            </div>
            <div className={styles.rightBox}>
              <MemberAction className={styles.actionRow} />
              <div className={styles.title}>
                <BsPersonFillGear
                  size={40}
                  className={styles.memberActionIcon}
                />
                <h4>會員資料編輯</h4>
              </div>
              <div className={styles.editList}>
                <div className={styles.editLeft}>
                  <div className={`${styles.editItem} ${nameAvailableClass}`}>
                    <label htmlFor="name">
                      姓名<span className={styles.star}>*</span>
                    </label>
                    <input
                      className={styles.editInput}
                      name="name"
                      type="text"
                      id="name"
                      value={user.name}
                      onChange={handleNameChange}
                    />
                    <p>{nameAvailableMessage}</p>
                  </div>
                  <div
                    className={`${styles.editItem} ${passportAvailableClass}`}
                  >
                    <label htmlFor="passportName">
                      護照姓名<span className={styles.star}>*</span>
                    </label>
                    <div className={styles.editPassportName}>
                      <input
                        className={styles.editInput}
                        name="firstName"
                        type="text"
                        id="firstName"
                        placeholder="名字"
                        value={user.firstName}
                        onChange={handlePassportChange}
                      />
                      <input
                        className={styles.editInput}
                        name="lastName"
                        type="text"
                        id="lastName"
                        placeholder="姓氏"
                        value={user.lastName}
                        onChange={handlePassportChange}
                      />
                    </div>
                    <p>{passportAvailableMessage}</p>
                  </div>
                  <div className={`${styles.editItem} `}>
                    <label htmlFor="email">
                      信箱<span className={styles.star}>*</span>
                    </label>
                    <input
                      className={styles.editInput}
                      name="email"
                      type="text"
                      id="email"
                      value={email}
                      readOnly
                    />
                    {/* <p>{emailAvailableMessage}</p> */}
                  </div>
                  <div className={`${styles.editItem} ${idNumAvailableClass}`}>
                    <label htmlFor="email">
                      身分證號<span className={styles.star}>*</span>
                    </label>
                    <input
                      className={styles.editInput}
                      name="idNum"
                      type="text"
                      id="idNum"
                      placeholder="請輸入身分證字號"
                      value={user.idNum}
                      onChange={handleIdNumChange}
                    />
                    <p>{idNumAvailableMessage}</p>
                  </div>
                </div>
                <div className={styles.editRight}>
                  <div className={`${styles.editItem} ${mobileAvailableClass}`}>
                    <label htmlFor="mobile">
                      手機號碼<span className={styles.star}>*</span>
                    </label>
                    <input
                      className={styles.editInput}
                      name="mobile"
                      type="mobile"
                      id="mobile"
                      placeholder="請輸入手機號碼"
                      value={user.mobile}
                      onChange={handleMobileChange}
                    />
                    <p>{mobileAvailableMessage}</p>
                  </div>
                  <div className={`${styles.editItem} `}>
                    <label htmlFor="address">地址</label>
                    <input
                      className={styles.editInput}
                      name="address"
                      type="text"
                      id="address"
                      value={user.address}
                      placeholder="請輸入通訊地址"
                      onChange={handleAddressChange}
                    />
                    {/* <p>{mobileAvailableMessage}</p> */}
                  </div>
                  <div className={`${styles.editItem} `}>
                    <label htmlFor="birthday">生日</label>
                    <DatePicker
                      selected={startDate}
                      onChange={handleBirthdayChange}
                      showYearDropdown
                      dateFormat="yyyy-MM-dd"
                      dateFormatCalendar="MMMM"
                      yearDropdownItemNumber={50}
                      scrollableYearDropdown
                    />
                  </div>
                  <div className={styles.editItem}>
                    <label htmlFor="tag">興趣主題</label>
                    <select
                      name="tag"
                      className={styles.interestSelect}
                      value={user.tag}
                      onChange={handleTagChange}
                    >
                      <option
                        className={styles.interestOption}
                        value="中南美洲"
                      >
                        中南美洲
                      </option>
                      <option className={styles.interestOption} value="日本">
                        日本
                      </option>
                      <option className={styles.interestOption} value="歐洲">
                        歐洲
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <buttom
                type="buttom"
                className={styles.editBtn}
                onClick={handleSubmit}
              >
                編輯完成
              </buttom>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
