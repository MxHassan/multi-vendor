import styles from '../../../styles/styles'
import Categories from './categories/Categories'
import { Navbar, IconButton } from '@material-tailwind/react'
import MobileNavbar from './mobilenavbar/MobileNavbar'
import { useDispatch, useSelector } from 'react-redux'
import { selectMobileNav, selectNavActive, setMobileNav, setNavActive } from '../../../features/nav/navSlice'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import NavLinks from './navlinks/NavLinks'
import ProfileMenu from './profilemenu/ProfileMenu'
import Cart from '../../cart/Cart'
import WishList from '../../wishlist/Wishlist'
const NavbarTop = () => {
  // const [active, setActive] = useState(false)
  const navActive = useSelector(selectNavActive)
  const mobileNav = useSelector(selectMobileNav)
  const dispatch = useDispatch()
  const openDrawer = () => dispatch(setMobileNav(true))
  window.addEventListener('scroll', () => {
    window.scrollY > 90 ? dispatch(setNavActive(true)) : dispatch(setNavActive(false))
  })

  return (
    <Navbar
      fullWidth
      color='indigo'
      className={`${navActive && 'fixed top-0 left-0 z-10  '} duration-300 p-0 flex h-[70px] `}
    >
      <div className={` ${styles.section} flex items-center justify-between`}>
        {/* mobile menu & button */}
        <div className='flex items-center 1000px:hidden'>
          <IconButton
            variant='text'
            className=' h-6 w-6 justify-self-end text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent 1000px:hidden'
            ripple={false}
            onClick={openDrawer}
          >
            {mobileNav ? <XMarkIcon width={32} /> : <Bars3Icon width={32} />}
          </IconButton>
          <MobileNavbar />
        </div>
        <div className='hidden 1000px:flex '>
          <Categories />
        </div>
        <NavLinks />
        <div className='gap-2 flex 800px:hidden'>
          <Cart />
          <WishList />
        </div>
        <div className='hidden 800px:flex items-center gap-4'>
          <Cart />
          <WishList />
          <ProfileMenu />
        </div>
      </div>
    </Navbar>
  )
}
export default NavbarTop
