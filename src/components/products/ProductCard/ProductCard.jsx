import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import formatPrice from '../../../utils/formatPrice'

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link
        className={`product-card__image product-card__image--${product.color}`}
        to={`/productos/${product.slug}`}
        aria-label={`Ver ${product.name}`}
      >
        <img
          src={product.image}
          alt={`Vela aromática ${product.name} de Candler`}
          loading="lazy"
        />
      </Link>

      <div className="product-card__content">
        <p className="product-card__family">
          Familia olfativa: {product.olfactoryFamily}
        </p>

        <h3>{product.name}</h3>

        <p className="product-card__description">
          {product.shortDescription}
        </p>
        
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

          {product.stock === 0 && (
            <p className="product-card__out-of-stock">
              Sin stock
            </p>
          )}

        <Link
          className="product-card__link"
          to={`/productos/${product.slug}`}
        >
          Ver producto
          <ArrowRight aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}

export default ProductCard