import { AtSign, Mail, MapPin, MessageCircle } from 'lucide-react'
import { Link } from 'react-router'
import { getGeneralWhatsAppUrl } from '../../../services/whatsapp'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container">
        <section className="footer__brand" aria-labelledby="footer-brand">
          <h2 id="footer-brand">Candler</h2>

          <p>
            Velas veganas con fragancias libres de ftalatos, creadas para
            acompañar tus espacios.
          </p>
        </section>

        <section aria-labelledby="footer-navigation">
          <h2 id="footer-navigation">Navegación</h2>

          <ul className="footer__links">
            <li>
              <Link to="/productos">Productos</Link>
            </li>

            <li>
              <Link to="/refill">Recargá tu vela</Link>
            </li>

            <li>
              <Link to="/nosotros">Sobre nosotros</Link>
            </li>

            <li>
              <Link to="/contacto">Contacto</Link>
            </li>

            <li>
              <Link to="/carrito">Carrito</Link>
            </li>
          </ul>
        </section>

        <section aria-labelledby="footer-contact">
          <h2 id="footer-contact">Contacto</h2>

          <ul className="footer__contact">
            <li>
              <MapPin aria-hidden="true" />
              <span>Paraná, Entre Ríos</span>
            </li>

            <li>
              <MessageCircle aria-hidden="true" />

              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </li>

            <li>
              <Mail aria-hidden="true" />

              <a href="mailto:thecandlerclub@gmail.com">
                Email
              </a>
            </li>

            <li>
              <AtSign aria-hidden="true" />

              <a
                href="https://www.instagram.com/candlerclub/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </section>

        <section aria-labelledby="footer-orders">
          <h2 id="footer-orders">Pedidos</h2>

          <p>
            Pago mediante transferencia o efectivo. Entrega a coordinar con
            la vendedora.
          </p>
        </section>
      </div>

      <div className="footer__bottom">
        <p>© {currentYear} Candler. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer