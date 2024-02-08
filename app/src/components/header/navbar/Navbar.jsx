import { useState } from 'react'
import styles from '../../../styles/styles'
import Categories from './categories/Categories'
import { Navbar, IconButton } from '@material-tailwind/react'
import MobileNavbar from './mobilenavbar/MobileNavbar'
import { useDispatch, useSelector } from 'react-redux'
import { selectNavState, setOpenNav } from '../../../features/nav/navSlice'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const NavbarTop = () => {
  const [active, setActive] = useState(false)
  const dispatch = useDispatch()
  // const [openNav, setOpenNav] = useState(false)
  const openNav = useSelector(selectNavState)
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 960) {
      if (openNav === true) dispatch(setOpenNav(false))
    }
  })
  window.addEventListener('scroll', () => {
    window.scrollY > 70 ? setActive(true) : setActive(false)
  })

  return (
    <Navbar
      blurred={false}
      fullWidth
      className={`${
        active && 'fixed top-0 left-0 z-10 '
      } transition p-0 flex items-center justify-center bg-[#342ac8] h-[70px] `}
    >
      <div
        className={` ${styles.section} ${styles.noramlFlex} justify-between text-white`}
      >
        <div className='hidden 1000px:block '>
          <Categories />
        </div>

        {/* mobile menu button */}
        <div className={`${styles.noramlFlex}`}>
          <IconButton
            variant='text'
            className=' h-6 w-6 justify-self-end text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent 1000px:hidden'
            ripple={false}
            onClick={() => dispatch(setOpenNav(!openNav))}
          >
            {openNav ? <XMarkIcon width={30} /> : <Bars3Icon width={30} />}
          </IconButton>
          <MobileNavbar />
        </div>
      </div>
    </Navbar>
  )
}
export default NavbarTop
