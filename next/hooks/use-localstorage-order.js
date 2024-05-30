import { useState, useEffect } from 'react'

function useLocalStorageOrder(key, initialValue) {
  // 使用 useState 定義狀態
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // 從 localStorage 中獲取存儲的值，如果不存在返回初始值
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // 如果出現錯誤，返回初始值
      console.error(error)
      return initialValue
    }
  })

  // 使用 useEffect 監聽狀態變化，並更新 localStorage 中的值
  useEffect(() => {
    try {
      // 將值轉換成 JSON 字符串並存儲到 localStorage 中
      window.localStorage.setItem(key, JSON.stringify(storedValue))
    } catch (error) {
      console.error(error)
    }
  }, [key, storedValue])

  // 返回狀態和更新狀態的函數
  return [storedValue, setStoredValue]
}

export default useLocalStorageOrder
