import { ArrowRight, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router'

import useCart from '../../../hooks/useCart'
import formatPrice from '../../../utils/formatPrice'

function ProductCard({
  product,
  showDescription = true,
}) {
  const { addItem } = useCart()

  const isOutOfStock = product.stock === 0

  const imageClassName = [
    'product-card__image',
    `product-card__image--${product.color}`,
    isOutOfStock
      ? 'product-card__image--unavailable'
      : '',
  ]
    .filter(Boolean)
    .join(' ')

  function handleAddToCart() {
    addItem(product, 1)
  }

  return (
    <article className="product-card">
      <Link
        className={imageClassName}
        to={`/productos/${product.slug}`}
        aria-label={`Ver ${product.name}`}
      >
        <img
          src={product.image}
          alt={`Vela aromática ${product.name} de Candler`}
          loading="lazy"
        />

        {isOutOfStock && (
          <span className="product-card__stock-overlay">
            Sin stock
          </span>
        )}
      </Link>

      <div className="product-card__content">
        <p className="product-card__family">
          Familia olfativa: {product.olfactoryFamily}
        </p>

        <h3>{product.name}</h3>

        {showDescription && (
          <p className="product-card__description">
            {product.shortDescription}
          </p>
        )}

        <div className="product-card__pricing">
          {product.originalPrice && (
            <span className="product-card__original-price">
              {formatPrice(product.originalPrice)}
            </span>
          )}

          <span className="product-card__price">
            {formatPrice(product.price)}
          </span>
        </div>

        {product.stock === 1 && (
          <p className="product-card__last-unit">
            ¡Última unidad disponible!
          </p>
        )}

        <div className="product-card__actions">
          <button
            className="product-card__add"
            type="button"
            disabled={isOutOfStock}
            onClick={handleAddToCart}
          >
            <ShoppingBag aria-hidden="true" />

            {isOutOfStock
              ? 'Sin stock'
              : 'Agregar'}
          </button>

          <Link
            className="product-card__link"
            to={`/productos/${product.slug}`}
          >
            Ver producto
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProductCard