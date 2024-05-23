import React, { useState, useEffect } from 'react'

const useTime = () => {
  const [orderTime, setOrderTime] = useState('')

  useEffect(() => {
    // 在客戶端渲染時計算時間
    const currentTime = new Date()
    const year = currentTime.getFullYear()
    const month = ('0' + (currentTime.getMonth() + 1)).slice(-2)
    const day = ('0' + currentTime.getDate()).slice(-2)
    const hours = ('0' + currentTime.getHours()).slice(-2)
    const minutes = ('0' + currentTime.getMinutes()).slice(-2)
    const seconds = ('0' + currentTime.getSeconds()).slice(-2)
    const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`

    // 設置狀態以更新畫面
    setOrderTime(formattedTime)
  }, []) // 空的依賴項目確保只在組件渲染時執行一次

  return orderTime
}

export default useTime
