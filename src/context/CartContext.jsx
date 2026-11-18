import {
  createContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

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
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [notification, setNotification] = useState(null)

  const notificationTimer = useRef(null)

  useEffect(() => {
    localStorage.setItem(
      'candler-cart',
      JSON.stringify(cartItems),
    )
  }, [cartItems])

  useEffect(() => {
    return () => {
      if (notificationTimer.current) {
        clearTimeout(notificationTimer.current)
      }
    }
  }, [])

  function addItem(product, quantity = 1) {
    if (product.stock <= 0 || quantity <= 0) {
      showNotification({
        type: 'stock',
        product,
        message: 'Este producto no tiene stock disponible.',
      })

      return
    }

    const existingItem = cartItems.find(
      (item) => item.product.id === product.id,
    )

    const currentQuantity = existingItem
      ? existingItem.quantity
      : 0

    const availableQuantity =
      product.stock - currentQuantity

    if (availableQuantity <= 0) {
      showNotification({
        type: 'stock',
        product,
        message:
          'Alcanzaste el stock máximo disponible para este producto.',
      })

      return
    }

    const quantityToAdd = Math.min(
      quantity,
      availableQuantity,
    )

    setCartItems((currentItems) => {
      const currentItem = currentItems.find(
        (item) => item.product.id === product.id,
      )

      if (currentItem) {
        return currentItems.map((item) =>
          item.product.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + quantityToAdd,
              }
            : item,
        )
      }

      return [
        ...currentItems,
        {
          product,
          quantity: quantityToAdd,
        },
      ]
    })

    if (quantityToAdd < quantity) {
      showNotification({
        type: 'stock',
        product,
        message: `Solo se agregaron ${quantityToAdd} unidades por disponibilidad de stock.`,
      })

      return
    }

    showNotification({
      type: 'success',
      product,
      quantity: quantityToAdd,
      message: 'Producto agregado al carrito.',
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

  function openCart() {
    setIsCartOpen(true)
  }

  function closeCart() {
    setIsCartOpen(false)
  }

  function showNotification(notificationData) {
    if (notificationTimer.current) {
      clearTimeout(notificationTimer.current)
    }

    setNotification(notificationData)

    notificationTimer.current = setTimeout(() => {
      setNotification(null)
    }, 3500)
  }

  function closeNotification() {
    if (notificationTimer.current) {
      clearTimeout(notificationTimer.current)
    }

    setNotification(null)
  }

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  )

  const cartTotal = cartItems.reduce(
    (total, item) =>
      total + item.product.price * item.quantity,
    0,
  )

  const contextValue = useMemo(
    () => ({
      cartItems,
      totalItems,
      cartTotal,
      isCartOpen,
      notification,
      addItem,
      removeItem,
      increaseQuantity,
      decreaseQuantity,
      clearCart,
      openCart,
      closeCart,
      closeNotification,
    }),
    [
      cartItems,
      totalItems,
      cartTotal,
      isCartOpen,
      notification,
    ],
  )

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartProvider }