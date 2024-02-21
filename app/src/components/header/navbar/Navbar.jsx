import styles from '../../../styles/styles'
import Categories from './categories/Categories'
import { Navbar, IconButton, Badge } from '@material-tailwind/react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectMobileNav,
  selectNavActive,
  setMobileNav,
  setNavActive,
  setOpenCart,
  setOpenWishlist
} from '../../../features/nav/navSlice'
import { Bars3Icon, HeartIcon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline'
import NavLinks from './navlinks/NavLinks'
import ProfileMenu from './profilemenu/ProfileMenu'
import { useRef } from 'react'
const NavbarTop = () => {
  const buttonRef = useRef()
  const navActive = useSelector(selectNavActive)
  const mobileNav = useSelector(selectMobileNav)
  const dispatch = useDispatch()
  // const openDrawer = () =>
  const handleOpenCart = () => dispatch(setOpenCart())
  const handleOpenWishlist = () => dispatch(setOpenWishlist())

  window.addEventListener('scroll', () => {
    window.scrollY > 90 ? dispatch(setNavActive(true)) : dispatch(setNavActive(false))
  })

  return (
    <div
      className={`${
        navActive && 'fixed top-0 left-0 z-10  '
      } duration-300 p-0 flex h-[70px] w-full dark:bg-blue-800 bg-amber-500`}
    >
      <div className={` ${styles.section} flex items-center justify-between`}>
        <button
          className={`${styles.iconButton} p-1 1000px:hidden duration-300 `}
          ref={buttonRef}
          onClick={() => {
            dispatch(setMobileNav(!mobileNav))
          }}
        >
          {mobileNav ? (
            <XMarkIcon
              className='animate-fade-in'
              onClick={() => buttonRef.current.classList.add('animate-spin-out')}
              width={30}
            />
          ) : (
            <Bars3Icon
              className='animate-fade-in'
              onClick={() => buttonRef.current.classList.remove('animate-spin-out')}
              width={30}
            />
          )}
        </button>
        <div className='hidden 1000px:flex '>
          <Categories />
        </div>
        <div className='hidden sm:flex '>
          <NavLinks />
        </div>
        <div className='hidden 800px:flex items-center gap-4'>
          <Badge color='amber' content='3'>
            <IconButton variant='text' color='white' onClick={handleOpenCart}>
              <ShoppingCartIcon width={35} />
            </IconButton>
          </Badge>
          <Badge color='amber' content='4'>
            <IconButton variant='text' color='white' onClick={handleOpenWishlist}>
              <HeartIcon width={35} />
            </IconButton>
          </Badge>
          <ProfileMenu />
        </div>
      </div>
    </div>
  )
}
export default NavbarTop
