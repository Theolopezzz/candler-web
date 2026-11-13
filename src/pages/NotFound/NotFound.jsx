import { Link } from 'react-router'

function NotFound() {
  return (
    <main>
      <h1>Página no encontrada</h1>
      <p>La dirección ingresada no existe.</p>

      <Link to="/">Volver al inicio</Link>
    </main>
  )
}

export default NotFound