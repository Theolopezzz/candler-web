import { createContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)

function getInitialCart() {
  try {
    const storedCart = localStorage.getItem('candler-cart')

    return storedCart ? JSON.parse(storedCart) : []
  } catch {
    return []
  }
}

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(getInitialCart)

  useEffect(() => {
    localStorage.setItem('candler-cart', JSON.stringify(cartItems))
  }, [cartItems])

  function addItem(product, quantity = 1) {
    if (product.stock <= 0) {
      return
    }

    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.product.id === product.id,
      )

      if (existingItem) {
        return currentItems.map((item) =>
          item.product.id === product.id
            ? {
                ...item,
                quantity: Math.min(
                  item.quantity + quantity,
                  product.stock,
                ),
              }
            : item,
        )
      }

      return [
        ...currentItems,
        {
          product,
          quantity: Math.min(quantity, product.stock),
        },
      ]
    })
  }

  function removeItem(productId) {
    setCartItems((currentItems) =>
      currentItems.filter(
        (item) => item.product.id !== productId,
      ),
    )
  }

  function increaseQuantity(productId) {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.product.id === productId
          ? {
              ...item,
              quantity: Math.min(
                item.quantity + 1,
                item.product.stock,
              ),
            }
          : item,
      ),
    )
  }

  function decreaseQuantity(productId) {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.product.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  function clearCart() {
    setCartItems([])
  }

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  )

  const contextValue = useMemo(
    () => ({
      cartItems,
      totalItems,
      addItem,
      removeItem,
      increaseQuantity,
      decreaseQuantity,
      clearCart,
    }),
    [cartItems, totalItems],
  )

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }