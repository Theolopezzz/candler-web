import {
  Check,
  ShoppingBag,
  TriangleAlert,
  X,
} from 'lucide-react'

import useCart from '../../../hooks/useCart'

function CartNotification() {
  const {
    notification,
    closeNotification,
    openCart,
  } = useCart()

  if (!notification) {
    return null
  }

  const isStockWarning =
    notification.type === 'stock'

  function handleViewCart() {
    closeNotification()
    openCart()
  }

  return (
    <div
      className={`cart-notification ${
        isStockWarning
          ? 'cart-notification--warning'
          : ''
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="cart-notification__icon">
        {isStockWarning ? (
          <TriangleAlert aria-hidden="true" />
        ) : (
          <Check aria-hidden="true" />
        )}
      </div>

      <div className="cart-notification__content">
        <strong>
          {isStockWarning
            ? 'Stock máximo alcanzado'
            : 'Agregado al carrito'}
        </strong>

        <span>{notification.message}</span>
      </div>

      {!isStockWarning && (
        <button
          className="cart-notification__view"
          type="button"
          onClick={handleViewCart}
        >
          <ShoppingBag aria-hidden="true" />
          Ver carrito
        </button>
      )}

      <button
        className="cart-notification__close"
        type="button"
        aria-label="Cerrar notificación"
        onClick={closeNotification}
      >
        <X aria-hidden="true" />
      </button>
    </div>
  )
}

export default CartNotification