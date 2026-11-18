import { Heart, Leaf, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router'

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero__content">
          <h1>It’s not a candle. It’s a Candler.</h1>

          <p>
            Creamos velas para transformar espacios, acompañar momentos
            cotidianos y hacer del aroma una parte de tu estilo.
          </p>

          <Link className="button button--primary" to="/productos">
            Conocer los aromas
          </Link>
        </div>

        <div className="about-hero__visual">
          <img
            src="/images/banners/banner-2.PNG"
            alt="Vela Candler como parte de la decoración de un espacio"
          />
        </div>
      </section>

      <section className="about-story">
        <div>
          <h2>Una marca para quienes eligen los detalles.</h2>
        </div>

        <div className="about-story__text">
          <p>
            Candler nace con la idea de ofrecer una vela que no solamente
            perfume una habitación. Cada aroma busca sumar personalidad,
            presencia y diseño, incluso cuando la vela está apagada.
          </p>

          <p>
            La propuesta combina fragancias intensas, una estética
            reconocible y una selección más consciente de sus componentes,
            sin perder el carácter moderno y magnético de la marca.
          </p>
        </div>
      </section>

      <section className="about-values">
        <article>
          <Sparkles aria-hidden="true" />
          <h2>Estética con identidad</h2>
          <p>
            Colores, aromas y objetos pensados para formar parte del
            espacio, no para quedar escondidos.
          </p>
        </article>

        <article>
          <ShieldCheck aria-hidden="true" />
          <h2>Fragancias seleccionadas</h2>
          <p>
            Fragancias libres de ftalatos para disfrutar el aroma desde
            una propuesta más consciente.
          </p>
        </article>

        <article>
          <Leaf aria-hidden="true" />
          <h2>Cera vegetal</h2>
          <p>
            Velas elaboradas con cera vegetal de soja y pabilo de algodón.
          </p>
        </article>

        <article>
          <Heart aria-hidden="true" />
          <h2>Producción cercana</h2>
          <p>
            Una marca nacida en Paraná, con atención directa y pedidos
            preparados de forma cercana.
          </p>
        </article>
      </section>

    </main>
  )
}

export default About