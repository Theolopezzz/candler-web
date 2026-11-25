import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { useEffect, useState } from 'react'

const slides = [
  {
    id: 1,
    image: '/images/banners/banner-1.PNG',
    alt: 'Presentación de Candler Club',
    objectPosition: 'center center',
  },
  {
    id: 2,
    image: '/images/banners/banner-2.PNG',
    alt: 'Colección de velas aromáticas Candler',
    objectPosition: 'center center',
  },
]

function HomeCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const totalSlides = slides.length

  function showPreviousSlide() {
    setCurrentSlide((current) =>
      current === 0
        ? totalSlides - 1
        : current - 1,
    )
  }

  function showNextSlide() {
    setCurrentSlide((current) =>
      current === totalSlides - 1
        ? 0
        : current + 1,
    )
  }

  function selectSlide(index) {
    setCurrentSlide(index)
  }

  useEffect(() => {
    if (isPaused || totalSlides <= 1) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setCurrentSlide((current) =>
        current === totalSlides - 1
          ? 0
          : current + 1,
      )
    }, 5000)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [isPaused, totalSlides])

  return (
    <section
      className="home-carousel"
      aria-label="Presentación de Candler"
      aria-roledescription="carrusel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (
          !event.currentTarget.contains(
            event.relatedTarget,
          )
        ) {
          setIsPaused(false)
        }
      }}
    >
      <div className="home-carousel__slides">
        {slides.map((slide, index) => {
          const isActive = currentSlide === index

          return (
            <div
              className={`home-carousel__slide ${
                isActive
                  ? 'home-carousel__slide--active'
                  : ''
              }`}
              key={slide.id}
              aria-hidden={!isActive}
            >
              <img
                src={slide.image}
                alt={isActive ? slide.alt : ''}
                loading={
                  index === 0 ? 'eager' : 'lazy'
                }
                fetchPriority={
                  index === 0 ? 'high' : 'auto'
                }
                style={{
                  objectPosition:
                    slide.objectPosition,
                }}
              />
            </div>
          )
        })}
      </div>

      {totalSlides > 1 && (
        <>
          <button
            className="
              home-carousel__arrow
              home-carousel__arrow--previous
            "
            type="button"
            aria-label="Mostrar imagen anterior"
            onClick={showPreviousSlide}
          >
            <ChevronLeft aria-hidden="true" />
          </button>

          <button
            className="
              home-carousel__arrow
              home-carousel__arrow--next
            "
            type="button"
            aria-label="Mostrar imagen siguiente"
            onClick={showNextSlide}
          >
            <ChevronRight aria-hidden="true" />
          </button>

          <div
            className="home-carousel__indicators"
            aria-label="Elegir imagen"
          >
            {slides.map((slide, index) => (
              <button
                className={`home-carousel__indicator ${
                  currentSlide === index
                    ? 'home-carousel__indicator--active'
                    : ''
                }`}
                key={slide.id}
                type="button"
                aria-label={`Mostrar imagen ${
                  index + 1
                } de ${totalSlides}`}
                aria-current={
                  currentSlide === index
                    ? 'true'
                    : undefined
                }
                onClick={() =>
                  selectSlide(index)
                }
              />
            ))}
          </div>
        </>
      )}
    </section>
  )
}

export default HomeCarousel