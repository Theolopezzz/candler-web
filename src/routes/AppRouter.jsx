import { Route, Routes } from 'react-router'

import MainLayout from '../components/layout/MainLayout/MainLayout'

import Home from '../pages/Home/Home'
import Products from '../pages/Products/Products'
import ProductDetail from '../pages/ProductDetail/ProductDetail'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Account from '../pages/Account/Account'
import Cart from '../pages/Cart/Cart'
import NotFound from '../pages/NotFound/NotFound'
import Refill from '../pages/Refill/Refill'

function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/refill" element={<Refill />} />
        <Route path="/productos/:productSlug" element={<ProductDetail />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/cuenta" element={<Account />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
export default AppRouter