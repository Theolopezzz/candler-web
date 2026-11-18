import { useState } from 'react'
import {
  ArrowLeft,
  MessageCircle,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from 'lucide-react'
import { Link } from 'react-router'

import useCart from '../../hooks/useCart'
import { saveCustomerContact } from '../../services/customerContact'
import { getCartWhatsAppUrl } from '../../services/whatsapp'
import formatPrice from '../../utils/formatPrice'

function Cart() {
  const {
    cartItems,
    totalItems,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart()

  const [customerEmail, setCustomerEmail] = useState('')
  const [acceptsMarketing, setAcceptsMarketing] = useState(true)
  const [checkoutError, setCheckoutError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const cartTotal = cartItems.reduce(
    (total, item) =>
      total + item.product.price * item.quantity,
    0,
  )

  async function handleCheckout(event) {
    event.preventDefault()

    setCheckoutError('')
    setIsSubmitting(true)

    try {
      await saveCustomerContact({
        email: customerEmail,
        acceptsMarketing,
      })

      const whatsappUrl = getCartWhatsAppUrl(cartItems)

      window.open(
        whatsappUrl,
        '_blank',
        'noopener,noreferrer',
      )
    } catch (error) {
      console.error('Error al registrar el correo:', {
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint,
      })

      setCheckoutError(
        'No pudimos registrar el correo. Revisá los datos e intentá nuevamente.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (cartItems.length === 0) {
    return (
      <main className="cart-page cart-page--empty">
        <div className="cart-empty">
          <ShoppingBag aria-hidden="true" />

          <h1>Tu carrito está vacío.</h1>

          <p>
            Explorá los aromas de Candler y agregá tus favoritos.
          </p>

          <Link
            className="button button--primary"
            to="/productos"
          >
            Ver productos
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="cart-page">

      <header className="cart-page__header">
        <h1>Carrito</h1>

        <p>
          {totalItems}{' '}
          {totalItems === 1
            ? 'producto seleccionado'
            : 'productos seleccionados'}
        </p>
      </header>

      <div className="cart-layout">
        <section
          className="cart-items"
          aria-label="Productos en el carrito"
        >
          {cartItems.map(({ product, quantity }) => (
            <article className="cart-item" key={product.id}>
              <Link
                className="cart-item__image"
                to={`/productos/${product.slug}`}
              >
                <img
                  src={product.image}
                  alt={`Vela ${product.name}`}
                />
              </Link>

              <div className="cart-item__information">
                <p className="cart-item__family">
                  Familia {product.olfactoryFamily}
                </p>

                <h2>
                  <Link to={`/productos/${product.slug}`}>
                    {product.name}
                  </Link>
                </h2>

                <p className="cart-item__price">
                  {formatPrice(product.price * quantity)}
                </p>

                <div
                  className="cart-item__quantity"
                  aria-label={`Cantidad de ${product.name}`}
                >
                  <button
                    type="button"
                    aria-label={`Quitar una unidad de ${product.name}`}
                    onClick={() =>
                      decreaseQuantity(product.id)
                    }
                  >
                    <Minus aria-hidden="true" />
                  </button>

                  <span aria-live="polite">
                    {quantity}
                  </span>

                  <button
                    type="button"
                    aria-label={`Agregar una unidad de ${product.name}`}
                    disabled={quantity >= product.stock}
                    onClick={() =>
                      increaseQuantity(product.id)
                    }
                  >
                    <Plus aria-hidden="true" />
                  </button>
                </div>
              </div>

              <button
                className="cart-item__remove"
                type="button"
                aria-label={`Eliminar ${product.name} del carrito`}
                onClick={() => removeItem(product.id)}
              >
                <Trash2 aria-hidden="true" />
              </button>
            </article>
          ))}

          <button
            className="cart-items__clear"
            type="button"
            onClick={clearCart}
          >
            Vaciar carrito
          </button>
        </section>

        <aside className="cart-summary">
          <h2>Tu pedido</h2>

          <dl>
            <div>
              <dt>Productos</dt>
              <dd>{totalItems}</dd>
            </div>

            <div>
              <dt>Total estimado</dt>
              <dd>{formatPrice(cartTotal)}</dd>
            </div>

            <div>
              <dt>Entrega</dt>
              <dd>A coordinar</dd>
            </div>

            <div>
              <dt>Pago</dt>
              <dd>Transferencia o efectivo</dd>
            </div>
          </dl>

          <p className="cart-summary__notice">
            Ingresá tu correo para registrar el pedido y
            continuar la compra por WhatsApp.
          </p>

          <form
            className="cart-summary__form"
            onSubmit={handleCheckout}
          >
            <label htmlFor="customer-email">
              Correo para registrar el pedido
            </label>

            <input
              id="customer-email"
              type="email"
              required
              autoComplete="email"
              placeholder="nombre@correo.com"
              value={customerEmail}
              onChange={(event) =>
                setCustomerEmail(event.target.value)
              }
            />

            <label className="cart-summary__checkbox">
              <input
                type="checkbox"
                checked={acceptsMarketing}
                onChange={(event) =>
                  setAcceptsMarketing(event.target.checked)
                }
              />

              <span>
                Quiero recibir novedades y promociones por
                email (opcional).
              </span>
            </label>

            {checkoutError && (
              <p
                className="cart-summary__error"
                role="alert"
              >
                {checkoutError}
              </p>
            )}

            <button
              className="button button--primary"
              type="submit"
              disabled={isSubmitting}
            >
              <MessageCircle aria-hidden="true" />

              {isSubmitting
                ? 'Guardando...'
                : 'Continuar por WhatsApp'}
            </button>
            
            <Link
              className="button button--secondary cart-summary__continue"
              to="/productos"
            >
              <Plus aria-hidden="true" />
              Agregar más productos
            </Link>

          </form>
        </aside>
      </div>
    </main>
  )
}

export default Cart