import { Outlet } from 'react-router'

import CartDrawer from '../../cart/CartDrawer/CartDrawer'
import CartNotification from '../../cart/CartNotification/CartNotification'
import ScrollToTop from '../../common/ScrollToTop/ScrollToTop'
import AnnouncementBar from '../AnnouncementBar/AnnouncementBar'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

function MainLayout() {
  return (
    <div className="site-layout">
      <ScrollToTop />

      <AnnouncementBar />
      <Header />

      <div className="site-content">
        <Outlet />
      </div>

      <Footer />

      <CartDrawer />
      <CartNotification />
    </div>
  )
}

export default MainLayout