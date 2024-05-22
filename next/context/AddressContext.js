// 處理下拉地址選單的狀態 讓其他頁面可以訪問內容
import React, { createContext, useState, useContext } from 'react'

const AddressContext = createContext()

export const AddressProvider = ({ children }) => {
  const [address, setAddress] = useState({
    country: '',
    township: '',
    postcode: '',
  })

  const updateAddress = (newAddress) => {
    setAddress(newAddress)
  }

  return (
    <AddressContext.Provider value={{ address, updateAddress }}>
      {children}
    </AddressContext.Provider>
  )
}

export const useAddress = () => useContext(AddressContext)
