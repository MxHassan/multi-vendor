import styles from '../../styles/styles'
import Categories from './categories/Categories'
import { IconButton, Badge, Button } from '@material-tailwind/react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectMobileNav,
  selectNavActive,
  setMobileNav,
  setNavActive,
  setOpenCart,
  setOpenWishlist
} from '../../features/nav/navSlice'
import { Bars3Icon, HeartIcon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline'
import NavLinks from './navlinks/NavLinks'
// import NavLinksCopy from './navlinks/NavLinksCopy'
import ProfileMenu from './profilemenu/ProfileMenu'
import CategoriesButton from './categories/CategoriesButton'
const NavbarTop = () => {
  const navActive = useSelector(selectNavActive)
  const mobileNav = useSelector(selectMobileNav)
  const dispatch = useDispatch()
  const handleOpenCart = () => dispatch(setOpenCart())
  const handleOpenWishlist = () => dispatch(setOpenWishlist())
  window.addEventListener('scroll', () => {
    window.scrollY > 90 ? dispatch(setNavActive(true)) : dispatch(setNavActive(false))
  })

  return (
    // implemnt profile side bar with navside bar
    <div
      className={`${
        navActive && 'fixed 800px:fixed top-0 left-0   '
      } duration-300 p-0 fixed 800px:static flex z-10 h-[70px] w-full dark:bg-blue-900 bg-amber-500`}
    >
      <div className={` w-full px-4 flex items-center justify-between`}>
        <IconButton
          className={`1000px:hidden  bg-light-background-secondary dark:bg-dark-background-secondary text-light-common-black dark:text-dark-common-white duration-200 `}
          onClick={() => {
            dispatch(setMobileNav(!mobileNav))
          }}
        >
          {mobileNav ? <XMarkIcon width={30} /> : <Bars3Icon width={30} />}
        </IconButton>
        <div className='hidden 1000px:flex '>
          <CategoriesButton />
        </div>
        <div className='hidden sm:flex mx-auto  '>
          <NavLinks />
          {/* <NavLinksCopy /> */}
        </div>
        <div className='flex items-center gap-4'>
          <div className='hidden 800px:flex items-center gap-4'>
            <Badge color='green' content='3'>
              <Button variant='text' className={`${styles.iconButton}  text-white `} onClick={handleOpenCart}>
                <ShoppingCartIcon width={35} />
              </Button>
            </Badge>
            <Badge color='green' content='5'>
              <Button variant='text' className={`${styles.iconButton} text-white `} onClick={handleOpenWishlist}>
                <HeartIcon width={35} />
              </Button>
            </Badge>
          </div>
          <ProfileMenu />
        </div>
      </div>
    </div>
  )
}
export default NavbarTop
