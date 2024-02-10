import {
  Drawer,
  Button,
  Typography,
  IconButton,
  Badge
} from '@material-tailwind/react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectOpenCart,
  setCloseCart,
  setOpenCart
} from '../../features/nav/navSlice'
import { ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline'

const Cart = () => {
  const openCart = useSelector(selectOpenCart)
  const dispatch = useDispatch()
  const openDrawer = () => dispatch(setOpenCart())
  const closeDrawer = () => dispatch(setCloseCart())

  return (
    <>
      <Badge color='amber' content='3'>
        <IconButton variant='text' color='white' onClick={openDrawer}>
          <ShoppingCartIcon width={35} />
        </IconButton>
      </Badge>
      <Drawer
        placement='right'
        open={openCart}
        onClose={closeDrawer}
        className='p-4'
      >
        <div className='mb-6 flex items-center justify-between'>
          <Typography variant='h5' color='blue-gray'>
            Material Tailwind
          </Typography>
          <IconButton variant='text' color='blue-gray' onClick={closeDrawer}>
            <XMarkIcon width={25} />
          </IconButton>
        </div>
        <Typography color='gray' className='mb-8 pr-4 font-normal'>
          Material Tailwind features multiple React and HTML components, all
          written with Tailwind CSS classes and Material Design guidelines.
        </Typography>
        <div className='flex gap-2'>
          <Button size='sm' variant='outlined'>
            Documentation
          </Button>
          <Button size='sm'>Get Started</Button>
        </div>
      </Drawer>
    </>
  )
}
export default Cart
