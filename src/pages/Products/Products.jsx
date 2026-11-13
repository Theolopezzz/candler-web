import { useMemo, useState } from 'react'

import ProductCard from '../../components/products/ProductCard/ProductCard'
import products from '../../data/products'

const families = ['Todos', 'Ámbar', 'Cítrica', 'Frutal']

function Products() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFamily, setSelectedFamily] = useState('Todos')

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()

    return products.filter((product) => {
      const matchesFamily =
        selectedFamily === 'Todos' ||
        product.olfactoryFamily === selectedFamily

      const searchableText = [
        product.name,
        product.shortDescription,
        product.olfactoryFamily,
        ...product.notes,
      ]
        .join(' ')
        .toLowerCase()

      const matchesSearch =
        normalizedSearch === '' ||
        searchableText.includes(normalizedSearch)

      return matchesFamily && matchesSearch
    })
  }, [searchTerm, selectedFamily])

  return (
    <main className="products-page">
      <header className="products-page__header">
        <p className="section-eyebrow">Candler Club</p>

        <h1>Encontrá tu aroma.</h1>

        <p>
          Explorá nuestra colección de velas veganas y elegí el aroma
          que mejor acompaña tus espacios.
        </p>
      </header>

      <section
        className="product-toolbar"
        aria-label="Buscar y filtrar productos"
      >
        <div className="product-search">
          <label htmlFor="product-search">Buscar productos</label>

          <input
            id="product-search"
            type="search"
            placeholder="Probá con vainilla, café o cítrico"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

        <div className="product-filters">
          <p>Familia olfativa</p>

          <div className="product-filters__options">
            {families.map((family) => (
              <button
                key={family}
                className={
                  selectedFamily === family
                    ? 'product-filter product-filter--active'
                    : 'product-filter'
                }
                type="button"
                onClick={() => setSelectedFamily(family)}
              >
                {family}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section
        className="products-results"
        aria-labelledby="products-results-title"
      >
        <div className="products-results__heading">
          <h2 id="products-results-title">Productos</h2>

          <p>
            {filteredProducts.length}{' '}
            {filteredProducts.length === 1
              ? 'producto encontrado'
              : 'productos encontrados'}
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="products-empty">
            <h2>No encontramos ese aroma.</h2>

            <p>
              Probá con otro nombre, una nota aromática o una familia
              olfativa diferente.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchTerm('')
                setSelectedFamily('Todos')
              }}
            >
              Limpiar búsqueda
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

export default Products