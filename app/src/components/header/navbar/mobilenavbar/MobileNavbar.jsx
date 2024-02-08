import { Collapse } from '@material-tailwind/react'
import Categories from '../categories/Categories'
import { useSelector } from 'react-redux'
import { selectNavState } from '../../../../features/nav/navSlice'

const MobileNavbar = () => {
  const openNav = useSelector(selectNavState)
  return (
    <Collapse className='mx-4' open={openNav}>
      <div className='mx-auto'>
        <Categories />
      </div>
    </Collapse>
  )
}

export default MobileNavbar
