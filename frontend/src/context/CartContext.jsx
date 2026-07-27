import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (course) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === course.id)
      if (exists) return prev
      return [...prev, course]
    })
  }

  const removeFromCart = (courseId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== courseId))
  }

  const clearCart = () => setCartItems([])

  const isInCart = (courseId) => cartItems.some((item) => item.id === courseId)

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, isInCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  )
}