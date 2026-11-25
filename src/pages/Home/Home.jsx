import {
  ArrowRight,
  HeartHandshake,
  Leaf,
  MessageCircle,
  ShieldCheck,
  RefreshCcw,
} from 'lucide-react'
import { Link } from 'react-router'
import { getGeneralWhatsAppUrl } from '../../services/whatsapp'
import ProductCard from '../../components/products/ProductCard/ProductCard'
import products from '../../data/products.js'
import HomeCarousel from '../../components/common/HomeCarousel/HomeCarousel'

function Home() {
  const featuredProducts = products.filter(
    (product) => product.featured,
  )

  return (
    <main className="home">
      <HomeCarousel />

      <section className="home-intro">


        <h2>It’s not a candle. It’s a Candler.</h2>

        <p>
           Transformá tu espacio, 
           llená la habitación con el aroma que más te guste 
           y convertí un momento cotidiano en algo que querés repetir.
        </p>
      </section>

      <section className="featured-products">
        <div className="section-heading">
          <div>
            <h2>Encontrá tu aroma</h2>
          </div>

          <Link className="section-heading__link" to="/productos">
            Ver todos
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} showDescription={false} />
          ))}
        </div>
      </section>

      <section className="brand-values">
        <div className="brand-values__heading">
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
            <h3>Phtalate Free</h3>
            <p>
              Fragancias seleccionadas, libres de ftalatos
            </p>
          </article>

          <article className="brand-value">
            <HeartHandshake aria-hidden="true" />
            <h3>Handmade</h3>
            <p>
              Velas artesanales, hechas a mano
            </p>
          </article>

          <Link
            className="brand-value brand-value--refill"
            to="/refill"
          >
            <RefreshCcw aria-hidden="true" />

            <h3>Refill</h3>

            <p>
              Recargamos tu Candler, con el aroma que prefieras, cada vez que la termines
            </p>

            <span>Conocer el servicio</span>
          </Link>
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
          href={getGeneralWhatsAppUrl(
                `Hola, tengo una consulta sobre Candler`,
              )}
              target="_blank"
              rel="noreferrer"
        >
          <MessageCircle aria-hidden="true" />
          Consultar
        </a>
        
      </section>
    </main>
  )
}

export default Home