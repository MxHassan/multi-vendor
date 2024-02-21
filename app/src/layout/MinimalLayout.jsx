import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer.jsx'
import Cart from '../components/cart/Cart.jsx'
import WishList from '../components/wishlist/Wishlist.jsx'
import MobileNavbar from '../components/header/navbar/mobilenavbar/MobileNavbar.jsx'
import SearchBar from '../components/header/searchbar/SearchBar.jsx'

const MinimalLayout = () => {
  return (
    <>
      <SearchBar />
      <Outlet />
      <Footer />
      <Cart />
      <WishList />
      <MobileNavbar />
    </>
  )
}

export default MinimalLayout
