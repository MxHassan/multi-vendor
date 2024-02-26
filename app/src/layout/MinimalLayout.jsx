import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer.jsx'
import Cart from '../components/cart/Cart.jsx'
import WishList from '../components/wishlist/Wishlist.jsx'
import MobileNavbar from '../components/navbar/mobilenavbar/MobileNavbar.jsx'
import SearchBar from '../components/searchbar/SearchBar.jsx'

const MinimalLayout = () => {
  return (
    <div className='h-screen'>
      <SearchBar />
      <Outlet />
      <Footer />
      <Cart />
      <WishList />
      <MobileNavbar />
    </div>
  )
}

export default MinimalLayout
