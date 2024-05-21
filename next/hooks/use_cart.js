import { createContext, useState, useContext } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

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
  const addItem = (product) => {
    const foundIndex = items.findIndex((v) => v.id === product.id)
    if (foundIndex > -1) {
      increaseItem(product.id)
    } else {
      const newItem = { ...product, qty: 1 }
      const nextItems = [newItem, ...items]
      setItems(nextItems)
    }
  }
  const totalQty = items.reduce((acc, v) => acc + v.qty, 0)
  const totalPrice = items.reduce((acc, v) => acc + v.qty * v.price, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        increaseItem,
        decreaseItem,
        removeItem,
        totalQty,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
