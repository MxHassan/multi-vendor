import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer.jsx'
import Cart from '../components/cart/Cart.jsx'
import WishList from '../components/wishlist/Wishlist.jsx'
import MobileNavbar from '../components/navbar/mobilenavbar/MobileNavbar.jsx'
import SearchBar from '../components/searchbar/SearchBar.jsx'
import { useGetUserMutation } from '../features/user/userApiSlice.js'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { Backdrop } from '@mui/material'
import Loader from '../components/loader/Loader.jsx'
import { fetchHomePage, fetchLoginPage } from '../utils/lazyFuncs.js'

const MinimalLayout = () => {
  const [getUser, { isError, error }] = useGetUserMutation()
  const { isAuthenticated } = useSelector((state) => state.auth)

  // prefetch user
  useEffect(() => {
    const prefetchUser = async () => {
      try {
        await getUser()
      } catch (err) {
        console.log(err)
      }
    }
    if (isAuthenticated) {
      prefetchUser()
    }
  }, [getUser, isAuthenticated])
  useEffect(() => {
    if (isError) toast.error(error?.data?.message)
  }, [isError, error])
  // useEffect(() => {
  //   if (isLoading) {
  //     return (
  //       <Backdrop open={true}>
  //         <Loader />
  //       </Backdrop>
  //     )
  //   }
  // }, [isLoading])
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
