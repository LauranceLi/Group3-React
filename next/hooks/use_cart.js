import { createContext, useState, useContext, useEffect } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  
  const [items, setItems] = useState([])
  // 从 localStorage 恢复购物车状态
  useEffect(() => {
    const storedItems = localStorage.getItem('cartItems')
    if (storedItems) {
      setItems(JSON.parse(storedItems))
    }
  }, [])

  // 每当购物车状态改变时，将其保存到 localStorage
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(items))
  }, [items])

  const increaseItem = (id) => {
    const nextItems = items.map((v, i) => {
      if (v.id === id) return { ...v, qty: v.qty + 1 }
      else return v
    })
    setItems(nextItems)
  }
  const decreaseItem = (id) => {
    let nextItems = items.map((v, i) => {
      if (v.id === id) return { ...v, qty: v.qty - 1 }
      else return v
    })

    nextItems = nextItems.filter((v) => v.qty > 0)

    setItems(nextItems)
  }
  const removeItem = (id) => {
    const nextItems = items.filter((v, i) => {
      return v.id !== id
    })
    setItems(nextItems)
  }
  //原本的版本
  // const addItem = (product) => {
  //   const foundIndex = items.findIndex((v) => v.id === product.id)
  //   if (foundIndex > -1) {
  //     increaseItem(product.id)
  //   } else {
  //     const newItem = { ...product, qty: 1 }
  //     const nextItems = [newItem, ...items]
  //     setItems(nextItems)
  //   }
  // }

  //測試修改過後的版本(經測試可以使用)
  const addItem = (product, quantity = 1) => {
    const foundIndex = items.findIndex((v) => v.id === product.id)
    if (foundIndex > -1) {
      // 如果商品已存在於購物車，增加其數量
      const nextItems = items.map((v) => {
        if (v.id === product.id) return { ...v, qty: v.qty + quantity }
        else return v
      })
      setItems(nextItems)
    } else {
      // 如果商品不存在於購物車，新增商品並設置其數量
      const newItem = { ...product, qty: quantity }
      const nextItems = [newItem, ...items]
      setItems(nextItems)
    }
  }
  const totalQty = items.reduce((acc, v) => acc + v.qty, 0)
  const totalPrice = items.reduce((acc, v) => acc + v.qty * v.price, 0)


  //積分的部分
  const [points, setPoints] = useState(0)
  const [discountAmount, setDiscountAmount] = useState(0)
  const [finalAmount, setFinalAmount] = useState(0)
  const [memberId, setMemberId] = useState(null);
  useEffect(() => {
    // 檢查是否在瀏覽器端
      // 從 localStorage 中獲取資料
      const userString = localStorage.getItem('user');
      if (userString) {
        // 解析成 JSON 格式
        const user = JSON.parse(userString);
        // 獲取 member_id 的值
        const memberId = user.member_id;
        console.log(memberId);
        setMemberId(memberId);
      } }, [memberId]); 

      useEffect(() => {
        if (memberId) {
          // 從後端獲取會員積分信息
          fetch(`http://localhost:3005/api/points?member_id=${memberId}`)
            .then((response) => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then((data) => {
              // 獲取積分並將其存儲在狀態中
              if (Array.isArray(data) && data.length > 0) {
                // 確保返回的數據不是空數組
                const totalPoints = data.reduce(
                  (accumulator, current) => accumulator + current.points,
                  0
                )
                setPoints(totalPoints) // 將所有積分相加並存儲在狀態中
      
                // 計算可以折扣的金額
                const discount = Math.min(Math.floor(totalPoints / 300), 100); // 滿300點換成1元，最多折扣100元
                setDiscountAmount(discount); // 存儲折扣金額
                console.log(totalPoints)
              }
            })
            .catch((error) => {
              console.error('Error fetching member points:', error);
              // 可以顯示錯誤消息給用戶
            });
        }
      }, [memberId]);  //注意 如果有切換帳號的動作 在購物車頁面要先重整才會顯示切換帳號之後的積分狀態

  // 處理用戶輸入想要折扣的金額
  const handleDiscountChange = (event) => {
    let inputAmount = parseInt(event.target.value)
    // 限制金額不大於顯示的金額
    inputAmount = Math.min(inputAmount, discountAmount)
    // 限制金額不小於0
    inputAmount = Math.max(inputAmount, 0)
    setDiscountAmount(inputAmount)
  }

  // 增加按鈕事件處理函式
  const handleIncrease = () => {
    // 限制增加的金額不大於顯示的金額且不超過100元折扣
    const increasedAmount = Math.min(
      discountAmount + 10,
      Math.min(points / 300, 100)
    )
    setDiscountAmount(increasedAmount)
  }

  // 減少按鈕事件處理函式
  const handleDecrease = () => {
    // 限制減少的金額不小於0
    const decreasedAmount = Math.max(discountAmount - 10, 0)
    setDiscountAmount(decreasedAmount)
  }

  useEffect(() => {
    const finalAmount = totalPrice - discountAmount
    setFinalAmount(finalAmount)
  }, [totalPrice, discountAmount])


  const setItemQuantity = (id, quantity) => {
    const foundIndex = items.findIndex((v) => v.id === id);
    if (foundIndex > -1) {
      const nextItems = items.map((v) => {
        if (v.id === id) return { ...v, qty: quantity };
        else return v;
      });
      setItems(nextItems);
    } else {
      const product = items.find((v) => v.id === id);
      const newItem = { ...product, qty: quantity };
      const nextItems = [newItem, ...items];
      setItems(nextItems);
    }
  };

  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        addItem, //cart 商品放入購物車
        increaseItem, //cart 增加數量
        decreaseItem, //cart 減少數量
        removeItem, //cart 移除商品
        totalQty,
        totalPrice,
        points, //積分
        discountAmount, //折扣的金額
        handleDiscountChange, //積分改變
        handleIncrease, //增加使用的積分
        handleDecrease, //減少使用的積分
        finalAmount, //扣除積分後的金額
        setItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
