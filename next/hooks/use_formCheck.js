import React, { useState } from 'react'

const useFormCheck = () => {
  const [errors, setErrors] = useState({})
  const validate = (values) => {
    let tempErrors = {}

    // 驗證訂購人姓名
    if (!values.name) {
      tempErrors.name = '訂購人姓名是必填項'
    }

    // 驗證訂購人Email
    if (!values.email) {
      tempErrors.email = '訂購人Email是必填項'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      tempErrors.email = 'Email格式不正確'
    }

    // 驗證訂購人手機號碼
    if (!values.mobile) {
      tempErrors.mobile = '訂購人手機號碼是必填項'
    } else if (!/^\d{10}$/.test(values.mobile)) {
      tempErrors.mobile = '手機號碼格式不正確'
    }

    // 驗證收件人姓名
    if (!values.recipientName) {
      tempErrors.recipientName = '收件人姓名是必填項'
    }

    // 驗證收件人手機號碼
    if (!values.recipientMobile) {
      tempErrors.recipientMobile = '收件人手機號碼是必填項'
    } else if (!/^\d{10}$/.test(values.recipientMobile)) {
      tempErrors.recipientMobile = '手機號碼格式不正確'
    }

    // 驗證付費方式
    if (!values.paymentMethod) {
      tempErrors.paymentMethod = '付費方式是必選項'
    }

    // 驗證發票類型
    if (!values.invoiceType) {
      tempErrors.invoiceType = '發票類型是必選項'
    }
    // 驗證載具格式
    if (
      values.invoiceType === '電子載具' &&
      !/^\/[0-9A-Z.+-]{7}$/.test(values.invoiceValue)
    ) {
      tempErrors.invoiceValue = '載具格式錯誤'
    }
    // 驗證統編
    if (
      values.invoiceType === '三聯發票' &&
      !/^[0-9]{8}$/.test(values.invoiceValue)
    ) {
      tempErrors.invoiceValue = '統編格式錯誤'
    }
    // 驗證送貨方式
    if (!values.shippingMethod) {
      tempErrors.shippingMethod = '送貨方式及地址是必選項'
    }

    // 驗證宅配地址（如果選擇宅配）
    if (values.shippingMethod === '賣家宅配' && !values.shippingAddress) {
      tempErrors.shippingAddress = '宅配地址是必填項'
    }

    // 驗證是否同意訂購須知及隱私權政策
    if (!values.agreement) {
      tempErrors.agreement = '請閱讀並同意「訂購須知」及「隱私權政策」'
    }

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  return { errors, validate }
}

export default useFormCheck
