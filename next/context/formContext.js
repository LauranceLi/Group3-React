import React, { createContext, useState, useContext } from 'react'

const FormContext = createContext()

export const useFormContext = () => useContext(FormContext)

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    recipientName: '',
    recipientMobile: '',
    paymentMethod: '', // 新增的付費方式欄位
    invoiceType: '', // 新增的發票類型欄位
    invoiceValue: '', //發票的值類型欄位
    shippingMethod: '', // 新增的送貨類型欄位
    shippingAddress: '', // 新增的送貨地址類型欄位
  })

  const updateFormData = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value })
  }

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  )
}
