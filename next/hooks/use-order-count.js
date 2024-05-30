// 計算購買數量的鉤子
import { useState } from 'react'

export function useOrderCount() {
  const [adultQuantity, setAdultQuantity] = useState(0)
  const [childQuantity, setChildQuantity] = useState(0)

  const decreaseAdultQuantity = () => {
    if (adultQuantity > 0) {
      setAdultQuantity(adultQuantity - 1)
    }
  }

  const increaseAdultQuantity = () => {
    setAdultQuantity(adultQuantity + 1)
  }

  const decreaseChildQuantity = () => {
    if (childQuantity > 0) {
      setChildQuantity(childQuantity - 1)
    }
  }

  const increaseChildQuantity = () => {
    setChildQuantity(childQuantity + 1)
  }

  return {
    adultQuantity,
    childQuantity,
    decreaseAdultQuantity,
    increaseAdultQuantity,
    decreaseChildQuantity,
    increaseChildQuantity,
  }
}
