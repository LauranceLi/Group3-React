// hooks/useCheckLoginStatus.js
import { useState, useEffect } from 'react'

const checkUrl = 'http://localhost:3005/api/members/check'

const useCheckLoginStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkLoginStatus = async () => {
      const res = await fetch(checkUrl, {
        credentials: 'include',
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })

      const data = await res.json()

      if (data.status === 'success') {
        setIsLoggedIn(true)
      }
      setIsLoading(false)
    }

    checkLoginStatus()
  }, [])

  return { isLoggedIn, isLoading }
}

export default useCheckLoginStatus
