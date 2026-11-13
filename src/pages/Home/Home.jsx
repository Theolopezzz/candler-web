import {
  ArrowRight,
  HeartHandshake,
  Leaf,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react'
import { Link } from 'react-router'

import ProductCard from '../../components/products/ProductCard/ProductCard'
import products from '../../data/products.js'

function Home() {
  const featuredProducts = products.filter(
    (product) => product.featured,
  )

  return (
    <main className="home">
      <section className="home-banner">
        <img
          src="/images/banners/banner-3.PNG"
          alt="Caja abierta con tarjeta y stickers de resivimiento a club candler"
        />
      </section>
      <section className="brand-hero">
        <div className="brand-hero__content">
          <p className="section-eyebrow">Welcome to the Candler Club</p>

          <h1>It’s not a candle. It’s a Candler.</h1>

          <p className="brand-hero__description">
            Aromas intensos, estética que transforma tus espacios y una
            forma más consciente de disfrutar lo cotidiano.
          </p>
        </div>

        <div className="brand-hero__visual" aria-hidden="true">
          <div className="brand-hero__card brand-hero__card--pink">
            <span>sweet</span>
            <span>vanilla</span>
          </div>

          <div className="brand-hero__card brand-hero__card--yellow">
            <span>lemon</span>
            <span>glaze</span>
          </div>

          <div className="brand-hero__card brand-hero__card--blue">
            <span>wild</span>
            <span>pitanga</span>
          </div>

          <div className="brand-hero__card brand-hero__card--burgundy">
            <span>morning</span>
            <span>brew</span>
          </div>
        </div>
      </section>

      <section className="home-intro">
        <p className="section-eyebrow">Candler Club</p>

        <h2>Romantizar tu vida también es cuidarte.</h2>

        <p>
          Una Candler transforma el espacio, llena la habitación con el
          aroma que elegiste y convierte un momento cotidiano en algo que
          querés repetir.
        </p>
      </section>

      <section className="featured-products">
        <div className="section-heading">
          <div>
            <p className="section-eyebrow">Nuestros aromas</p>
            <h2>Encontrá tu favorita.</h2>
          </div>

          <Link className="section-heading__link" to="/productos">
            Ver todos
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="brand-values">
        <div className="brand-values__heading">
          <p className="section-eyebrow">Lo esencial</p>
          <h2>Cuidamos lo que forma parte de tu rutina.</h2>
        </div>

        <div className="brand-values__grid">
          <article className="brand-value">
            <Leaf aria-hidden="true" />
            <h3>Velas veganas</h3>
            <p>
              Elaboradas sin ingredientes de origen animal.
            </p>
          </article>

          <article className="brand-value">
            <ShieldCheck aria-hidden="true" />
            <h3>Sin ftalatos</h3>
            <p>
              Fragancias seleccionadas para disminuir componentes
              innecesariamente nocivos.
            </p>
          </article>

          <article className="brand-value">
            <HeartHandshake aria-hidden="true" />
            <h3>Producción cercana</h3>
            <p>
              Hechas en Paraná, con atención directa y entregas a
              coordinar.
            </p>
          </article>
        </div>
      </section>

      <section className="home-contact">
        <div>
          <p className="section-eyebrow">¿Tenés alguna duda?</p>
          <h2>Hablemos por WhatsApp.</h2>

          <p>
            Consultá por aromas, disponibilidad, medios de pago y
            entregas dentro de Paraná.
          </p>
        </div>

        <a
          className="button button--light"
          href="#"
          aria-label="Consultar a Candler por WhatsApp"
        >
          <MessageCircle aria-hidden="true" />
          Consultar
        </a>
      </section>
    </main>
  )
}

export default Home