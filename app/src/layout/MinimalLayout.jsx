import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer.jsx'
import Cart from '../components/cart/Cart.jsx'
import WishList from '../components/wishlist/Wishlist.jsx'
import MobileNavbar from '../components/header/navbar/mobilenavbar/MobileNavbar.jsx'

const MinimalLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
      <Cart />
      <WishList />
      <MobileNavbar />
    </>
  )
}

export default MinimalLayout
