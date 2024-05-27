// /utils/validation.js

import styles from '/styles/members/register.module.css'

// 信箱驗證
export const validateEmail = (email) => {
  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const emailResult = emailPattern.test(email)
  if (emailResult) {
    return { message: '請驗證信箱', className: styles.warning }
  } else {
    return { message: '信箱格式錯誤', className: styles.error }
  }
}

// 密碼驗證
export const validatePassword = (password) => {
  const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/
  if (password.length < 8) {
    return { message: '密碼需8位以上', className: styles.error }
  } else if (passwordPattern.test(password)) {
    return { message: '密碼可使用', className: styles.success }
  } else {
    return {
      message: '須使用英文及數字',
      className: styles.error,
    }
  }
}

// 確認密碼驗證
export const validatePasswordCheck = (password, passwordCheck) => {
  if (password !== passwordCheck) {
    return { message: '密碼不一致請重新確認', className: styles.error }
  } else {
    return { message: '密碼一致', className: styles.success }
  }
}

// 姓名驗證
export const validateName = (name) => {
  const chineseNamePattern = /^[\u4E00-\u9FA5]{2,}$/
  const englishNamePattern = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/
  const isChinese = /^[\u4E00-\u9FA5]+$/.test(name)
  const isEnglish = /^[A-Za-z\s]+$/.test(name)

  if (!isChinese && !isEnglish) {
    return { message: '請使用中文或英文姓名', className: styles.error }
  } else if (isChinese) {
    if (chineseNamePattern.test(name)) {
      return { message: '可用的中文姓名', className: styles.success }
    } else {
      return { message: '中文姓名至少二字以上', className: styles.error }
    }
  } else if (isEnglish) {
    if (englishNamePattern.test(name)) {
      return { message: '可用的英文姓名', className: styles.success }
    } else {
      return { message: '英文姓名需且僅首字母大寫', className: styles.error }
    }
  } else {
    return { message: '姓名格式錯誤', className: styles.error }
  }
}

// 手機驗證
export const validateMobile = (mobile) => {
  const mobilePattern = /^09\d{8}$/
  if (mobilePattern.test(mobile)) {
    return { message: '可使用手機號碼', className: styles.success }
  } else {
    return { message: '手機號碼格式錯誤', className: styles.error }
  }
}

// 台灣身份證字號
export const validateIdNum = (idNum) => {
  const idNumPattern = /^[A-Z][12]\d{8}$/
  const idNumResult = idNumPattern.test(idNum)
  if (idNumResult) {
    return { message: '可使用的身分證', className: styles.success }
  } else {
    return { message: '身份證字號格式錯誤', className: styles.error }
  }
}

// 台灣護照姓名
export const validatePassportName = (name) => {
  const passportNamePattern = /^[A-Z][a-z]+$/
  const nameResult = passportNamePattern.test(name)
  return nameResult 
}


