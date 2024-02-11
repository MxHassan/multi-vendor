import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer.jsx'

const MinimalLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

export default MinimalLayout
