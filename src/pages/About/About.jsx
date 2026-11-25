import { Heart, Leaf, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router'

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero__content">
          <h1>No hacemos velas nada más.</h1>

          <p>
            Hacemos del aroma parte de tu estilo. Porque lo artesanal también puede tener onda.
          </p>

          <Link className="button button--primary" to="/productos">
            Conocer los aromas
          </Link>
        </div>

        <div className="about-hero__visual">
          <img
            src="/images/banners/banner-5.PNG"
            alt="Vela Candler como parte de la decoración de un espacio"
          />
        </div>
      </section>

      <section className="about-story">
        <div>
          <h2>Para quienes eligen los detalles.</h2>
        </div>

        <div className="about-story__text">
          <p>
            Candler nace con la idea de crear una vela que no solo perfume una habitación, 
            sino que le de personalidad a tu espacio a partir de un diseño diferente y un aroma único.
          </p>

          <p>
            Nuestra prioridad es que puedas disfrutar de los pequeños placeres de la vida, 
            sin que para ello debas exponerte a sustancias que pueden dañar tu salud. Por eso, 
            elegimos ingredientes de origen vegetal, y fragancias libres de ftalatos. 
            <br /><br />En Candler creemos que lo artesanal también puede tener estilo, 
            y que el placer no debe poner en riesgo tu salud. 
          </p>
        </div>
      </section>

      <section className="about-values">
        <article>
          <Sparkles aria-hidden="true" />
          <h2>Identidad y estilo</h2>
          <p>
             Aromas y objetos pensados para darle onda a tu espacio
          </p>
        </article>

        <article>
          <ShieldCheck aria-hidden="true" />
          <h2>Envase Reutilizable</h2>
          <p>
            Cada vez que termines tu Candler, te recargamos el envase con el aroma que vos quieras
          </p>
        </article>

        <article>
          <Leaf aria-hidden="true" />
          <h2>De origen vegetal y fragancias seleccionadas</h2>
          <p>
            Velas hechas con cera de soja y pabilo de algodón, componentes más amigables con el medio ambiente;
             y con fragancias libres de ftalatos, más amigables con vos
          </p>
        </article>

        <article>
          <Heart aria-hidden="true" />
          <h2>Producción Artesanal</h2>
          <p>
            Cada vela está hecha por las mismas manos,
           y hasta que llega a las tuyas, la atención es cercana y personalizada
          </p>
        </article>
      </section>

    </main>
  )
}

export default About