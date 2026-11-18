import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import {
  Menu,
  ShoppingBag,
  X,
} from 'lucide-react'
import useCart from '../../../hooks/useCart'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const {totalItems, openCart} = useCart()
  

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header__container">
        <button
          className="header__menu-button"
          type="button"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        <Link
          className="header__logo"
          to="/"
          aria-label="Ir al inicio de Candler"
          onClick={closeMenu}
        >
          <img
            src="/images/brand/candler-logo-bordo.svg"
            alt="Candler"
          />
        </Link>

        <nav
          className={`header__navigation ${
            isMenuOpen ? 'header__navigation--open' : ''
          }`}
          aria-label="Navegación principal"
        >
          <NavLink to="/" onClick={closeMenu}>
            Inicio
          </NavLink>

          <NavLink to="/productos" onClick={closeMenu}>
            Productos
          </NavLink>

          <NavLink to="/nosotros" onClick={closeMenu}>
            Sobre nosotros
          </NavLink>

          <NavLink to="/contacto" onClick={closeMenu}>
            Contacto
          </NavLink>
        </nav>

        <div className="header__actions">
          <button
            className="header__action header__cart"
            type="button"
            aria-label={`Abrir carrito, ${totalItems} productos`}
            onClick={openCart}
          >
            <ShoppingBag aria-hidden="true" />

            {totalItems > 0 && (
              <span
                className="header__cart-count"
                aria-hidden="true"
              >
                {totalItems > 99 ? '99+' : totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header