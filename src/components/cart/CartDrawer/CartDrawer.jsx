import { useEffect } from 'react'
import {
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  X,
} from 'lucide-react'
import { Link } from 'react-router'

import useCart from '../../../hooks/useCart'
import formatPrice from '../../../utils/formatPrice'

function CartDrawer() {
  const {
    cartItems,
    totalItems,
    cartTotal,
    isCartOpen,
    closeCart,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
  } = useCart()

  useEffect(() => {
    if (!isCartOpen) {
      return undefined
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        closeCart()
      }
    }

    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener(
        'keydown',
        handleKeyDown,
      )
    }
  }, [isCartOpen, closeCart])

  return (
    <div
      className={`cart-drawer ${
        isCartOpen ? 'cart-drawer--open' : ''
      }`}
      aria-hidden={!isCartOpen}
    >
      <button
        className="cart-drawer__backdrop"
        type="button"
        aria-label="Cerrar resumen del carrito"
        tabIndex={isCartOpen ? 0 : -1}
        onClick={closeCart}
      />

      <aside
        className="cart-drawer__panel"
        aria-label="Resumen del carrito"
      >
        <header className="cart-drawer__header">
          <div>
            <h2>Tu carrito</h2>
            <p>
              {totalItems}{' '}
              {totalItems === 1
                ? 'producto'
                : 'productos'}
            </p>
          </div>

          <button
            className="cart-drawer__close"
            type="button"
            aria-label="Cerrar carrito"
            onClick={closeCart}
          >
            <X aria-hidden="true" />
          </button>
        </header>

        {cartItems.length === 0 ? (
          <div className="cart-drawer__empty">
            <ShoppingBag aria-hidden="true" />
            <p>Tu carrito está vacío.</p>

            <Link
              className="button button--primary"
              to="/productos"
              onClick={closeCart}
            >
              Ver productos
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-drawer__items">
              {cartItems.map(({ product, quantity }) => (
                <article
                  className="cart-drawer-item"
                  key={product.id}
                >
                  <Link
                    className="cart-drawer-item__image"
                    to={`/productos/${product.slug}`}
                    onClick={closeCart}
                  >
                    <img
                      src={product.image}
                      alt={`Vela ${product.name}`}
                    />
                  </Link>

                  <div className="cart-drawer-item__info">
                    <h3>{product.name}</h3>

                    <p>
                      {formatPrice(
                        product.price * quantity,
                      )}
                    </p>

                    <div className="cart-drawer-item__quantity">
                      <button
                        type="button"
                        aria-label={`Quitar una unidad de ${product.name}`}
                        onClick={() =>
                          decreaseQuantity(product.id)
                        }
                      >
                        <Minus aria-hidden="true" />
                      </button>

                      <span>{quantity}</span>

                      <button
                        type="button"
                        disabled={
                          quantity >= product.stock
                        }
                        aria-label={`Agregar una unidad de ${product.name}`}
                        onClick={() =>
                          increaseQuantity(product.id)
                        }
                      >
                        <Plus aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <button
                    className="cart-drawer-item__remove"
                    type="button"
                    aria-label={`Eliminar ${product.name}`}
                    onClick={() =>
                      removeItem(product.id)
                    }
                  >
                    <Trash2 aria-hidden="true" />
                  </button>
                </article>
              ))}
            </div>

            <footer className="cart-drawer__footer">
              <div className="cart-drawer__total">
                <span>Total estimado</span>
                <strong>
                  {formatPrice(cartTotal)}
                </strong>
              </div>

              <Link
                className="button button--primary"
                to="/carrito"
                onClick={closeCart}
              >
                Confirmar compra
              </Link>

              <button
                className="cart-drawer__continue"
                type="button"
                onClick={closeCart}
              >
                Seguir comprando
              </button>
            </footer>
          </>
        )}
      </aside>
    </div>
  )
}

export default CartDrawer