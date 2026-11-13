import { Outlet } from 'react-router'
import AnnouncementBar from '../AnnouncementBar/AnnouncementBar'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function MainLayout() {
  return (
    <div className="site-layout">
      <AnnouncementBar />
      <Header />

      <div className="site-content">
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}

export default MainLayout
