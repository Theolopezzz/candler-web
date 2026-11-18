import { AtSign, Mail, MapPin, MessageCircle } from 'lucide-react'
import { useState } from 'react'
import { getGeneralWhatsAppUrl } from '../../services/whatsapp'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  })

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const message = [
      'Hola, quiero hacer una consulta a Candler.',
      '',
      `Nombre: ${formData.name}`,
      `Consulta: ${formData.message}`,
    ].join('\n')

    const whatsappUrl = getGeneralWhatsAppUrl(message)

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <main className="contact-page">
      <header className="contact-page__header">
        <h1>Contactanos</h1>

        <p>
          Consultá por aromas, disponibilidad, pedidos y entregas dentro
          de Paraná.
        </p>
      </header>

      <div className="contact-layout">
        <section className="contact-options">
          <article>
            <MessageCircle aria-hidden="true" />

            <div>
              <h2>WhatsApp</h2>
              <p>Consultas y pedidos personalizados.</p>

              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </article>

          <article>
            <AtSign aria-hidden="true" />
            <div>
              <h2>Instagram</h2>
              <p>Novedades, aromas y contenido de Candler.</p>

              <a
                href="https://www.instagram.com/candlerclub/"
                target="_blank"
                rel="noreferrer"
              >
                @candlerclub
              </a>
            </div>
          </article>

          <article>
            <MapPin aria-hidden="true" />
            <div>
              <h2>Entregas</h2>
              <p>Disponibles dentro de Paraná, Entre Ríos.</p>
              <span>Modalidad a coordinar</span>
            </div>
          </article>

          <article>
            <Mail aria-hidden="true" />

            <div>
              <h2>Correo</h2>
              <p>Consultas generales y comerciales.</p>

              <a href="mailto:thecandlerclub@gmail.com">
                thecandlerclub@gmail.com
              </a>
            </div>
          </article>
        </section>

        <section className="contact-form-section">
          <div>
            <p className="section-eyebrow">Escribinos</p>
            <h2>¿En qué podemos ayudarte?</h2>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="contact-name">Nombre</label>

              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-message">Consulta</label>

              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Contanos qué aroma o producto estás buscando"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button className="button button--primary" type="submit">
              <MessageCircle aria-hidden="true" />
              Enviar por WhatsApp
            </button>
          </form>
        </section>
      </div>
    </main>
  )
}

export default Contact