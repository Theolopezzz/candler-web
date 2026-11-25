import {
  Check,
  MessageCircle,
  PackageCheck,
  RefreshCcw,
} from 'lucide-react'
import { useState } from 'react'

import refillFragrances from '../../data/refillFragrances'
import { getRefillWhatsAppUrl } from '../../services/whatsapp'
import formatPrice from '../../utils/formatPrice'

const REFILL_PRICE = 15000

function Refill() {
  const [selectedFragrance, setSelectedFragrance] =
    useState('')

  const selectedOption = refillFragrances.find(
    (fragrance) =>
      fragrance.slug === selectedFragrance,
  )

  const whatsappUrl = getRefillWhatsAppUrl(
    selectedOption?.name,
  )

  return (
    <main className="refill-page">
      <section className="refill-hero">
        <div className="refill-hero__intro">

          <h1>Refill Candler</h1>

          <p className="refill-hero__description">
            Con tu envase Candler vacío podés solicitar el
            servicio de refill con cualquiera de nuestros
            aromas disponibles.
          </p>
        </div>

        <div className="refill-hero__image">
          <img
            src="/images/banners/refill-banner.jpg"
            alt="Servicio de refill para envases Candler"
          />
        </div>

        <div className="refill-hero__details">
          <div className="refill-price">
            <span>Precio del servicio</span>

            <strong>{formatPrice(REFILL_PRICE)}</strong>
          </div>

          <div className="refill-condition">
            <PackageCheck aria-hidden="true" />

            <p>
              Para acceder al servicio debés conservar el
              envase con sus etiquetas originales y su tapa.
            </p>
          </div>
        </div>
      </section>

      <section className="refill-selection">
        <div className="refill-selection__heading">
          <h2>Elegí tu fragancia</h2>

          <p>
            Seleccioná uno de los aromas disponibles para
            consultar y coordinar el refill por WhatsApp.
          </p>
        </div>

        <div
          className="refill-fragrances"
          role="radiogroup"
          aria-label="Fragancias disponibles para refill"
        >
          {refillFragrances.map((fragrance) => {
            const isSelected =
              selectedFragrance === fragrance.slug

            return (
              <label
                className={`refill-fragrance ${
                  isSelected
                    ? 'refill-fragrance--selected'
                    : ''
                } ${
                  !fragrance.available
                    ? 'refill-fragrance--unavailable'
                    : ''
                }`}
                key={fragrance.id}
              >
                <input
                  type="radio"
                  name="refill-fragrance"
                  value={fragrance.slug}
                  checked={isSelected}
                  disabled={!fragrance.available}
                  onChange={(event) =>
                    setSelectedFragrance(
                      event.target.value,
                    )
                  }
                />

                <span className="refill-fragrance__check">
                  {isSelected && (
                    <Check aria-hidden="true" />
                  )}
                </span>

                <span className="refill-fragrance__name">
                  {fragrance.name}
                </span>

                {!fragrance.available && (
                  <span className="refill-fragrance__status">
                    No disponible
                  </span>
                )}
              </label>
            )
          })}
        </div>

        <div className="refill-selection__actions">
          <a
            className="button button--primary"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle aria-hidden="true" />

            {selectedOption
              ? `Consultar por ${selectedOption.name}`
              : 'Consultar sobre el refill'}
          </a>

          {!selectedOption && (
            <p>
              Podés consultar sin elegir una fragancia o
              seleccionar una para incluirla en el mensaje.
            </p>
          )}
        </div>
      </section>

      <section className="refill-steps">
        <h2>¿Cómo funciona?</h2>

        <ol>
          <li>
            <span>1</span>

            <div>
              <h3>Conservá tu Candler</h3>

              <p>
                Guardá el envase vacío con sus etiquetas
                originales y la tapa.
              </p>
            </div>
          </li>

          <li>
            <span>2</span>

            <div>
              <h3>Elegí un aroma</h3>

              <p>
                Seleccioná una de las fragancias disponibles
                para el servicio.
              </p>
            </div>
          </li>

          <li>
            <span>3</span>

            <div>
              <h3>Coordiná por WhatsApp</h3>

              <p>
                Escribinos para confirmar disponibilidad y
                coordinar la entrega del envase.
              </p>
            </div>
          </li>
        </ol>
      </section>
    </main>
  )
}

export default Refill