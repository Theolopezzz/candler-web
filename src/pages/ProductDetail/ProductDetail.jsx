import { useState } from 'react'
import {
  ArrowLeft,
  MessageCircle,
  Minus,
  Plus,
  ShoppingBag,
} from 'lucide-react'
import { Link, useParams } from 'react-router'

import products from '../../data/products'
import useCart from '../../hooks/useCart'
import formatPrice from '../../utils/formatPrice'
import { getGeneralWhatsAppUrl } from '../../services/whatsapp'

function ProductDetail() {
  const { productSlug } = useParams()
  const {addItem} = useCart()
  const [quantity, setQuantity] = useState(1)
  const product = products.find(
    (currentProduct) => currentProduct.slug === productSlug,
  )
  

  if (!product) {
    return (
      <main className="product-not-found">
        <h1>Producto no encontrado</h1>

        <p>El aroma que estás buscando no está disponible.</p>

        <Link to="/productos">
          <ArrowLeft aria-hidden="true" />
          Volver a productos
        </Link>
      </main>
    )
  }

  return (
    <main className="product-detail">
      <Link className="product-detail__back" to="/productos">
        <ArrowLeft aria-hidden="true" />
        Volver a productos
      </Link>

      <section className="product-detail__main">
        <div
          className={`product-detail__image ${
            product.stock === 0
              ? 'product-detail__image--unavailable'
              : ''
          }`}
        >
          <img
            src={product.image}
            alt={`Vela aromática ${product.name} de Candler`}
          />

          {product.stock === 0 && (
            <span className="product-detail__stock-overlay">
              Sin stock
            </span>
          )}
        </div>

        <div className="product-detail__information">
          <p className="product-card__family">
            Familia olfativa: {product.olfactoryFamily}
          </p>

          <h1>{product.name}</h1>

          <p className="product-detail__description">
            {product.description}
          </p>

          <div className="product-detail__notes">
            <h2>Notas principales</h2>

            <ul>
              {product.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>

          <div className="product-detail__purchase">
            <div className="product-detail__price-row">
              <div className="product-detail__pricing">
                {product.originalPrice && (
                  <span className="product-detail__original-price">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}

                <span className="product-detail__price">
                  {formatPrice(product.price)}
                </span>
              </div>

              {product.stock === 1 && (
                <span className="product-detail__stock product-detail__stock--last">
                  ¡Última unidad disponible!
                </span>
              )}

              {product.stock === 0 && (
                <span className="product-detail__stock">
                  Producto sin stock
                </span>
              )}
            </div>

            <div className="product-detail__add-row">
              {product.stock > 0 && (
                <div
                  className="quantity-selector"
                  aria-label={`Cantidad de ${product.name}`}
                >
                  <button
                    type="button"
                    disabled={quantity <= 1}
                    aria-label="Reducir cantidad"
                    onClick={() =>
                      setQuantity((current) =>
                        Math.max(1, current - 1),
                      )
                    }
                  >
                    <Minus aria-hidden="true" />
                  </button>

                  <span aria-live="polite">{quantity}</span>

                  <button
                    type="button"
                    disabled={quantity >= product.stock}
                    aria-label="Aumentar cantidad"
                    onClick={() =>
                      setQuantity((current) =>
                        Math.min(product.stock, current + 1),
                      )
                    }
                  >
                    <Plus aria-hidden="true" />
                  </button>
                </div>
              )}

              <button
                className="button button--primary"
                type="button"
                disabled={product.stock === 0}
                onClick={() => addItem(product, quantity)}
              >
                <ShoppingBag aria-hidden="true" />

                {product.stock === 0
                  ? 'Sin stock'
                  : 'Agregar al carrito'}
              </button>
            </div>

            <a
              className="button button--secondary product-detail__whatsapp"
              href={getGeneralWhatsAppUrl(
                `Hola, quiero consultar por ${product.name}.`,
              )}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle aria-hidden="true" />
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="product-detail__care">
        <div>
          <p className="section-eyebrow">Candler care</p>
          <h2>Disfrutala mejor.</h2>
        </div>

        <ul>
          <li>
            Mantené la vela encendida hasta que la cera derretida
            alcance los bordes.
          </li>

          <li>
            Cortá el pabilo a aproximadamente 1 cm antes de cada uso.
          </li>

          <li>
            Disfrutala siempre a la vista y lejos de elementos
            inflamables.
          </li>

          <li>
            No la mantengas encendida durante más de cuatro horas
            continuas.
          </li>
        </ul>
      </section>
    </main>
  )
}

export default ProductDetail