import { Button, Typography, IconButton } from '@material-tailwind/react'
import { Drawer as CartDrawer } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { selectOpenCart, setCloseCart } from '../../features/nav/navSlice'
import { XMarkIcon } from '@heroicons/react/24/outline'

const Cart = () => {
  const openCart = useSelector(selectOpenCart)
  const dispatch = useDispatch()
  const handleCloseCart = () => dispatch(setCloseCart())

  return (
    <>
      <CartDrawer anchor='right' open={openCart} onClose={handleCloseCart}>
        <div className='p-4 w-[300px] '>
          <div className='mb-6 flex items-center justify-between'>
            <Typography variant='h5' color='blue-gray'>
              Material Tailwind
            </Typography>
            <IconButton variant='text' color='blue-gray' onClick={handleCloseCart}>
              <XMarkIcon width={25} />
            </IconButton>
          </div>
          <Typography color='gray' className='mb-8 pr-4 font-normal'>
            Material Tailwind features multiple React and HTML components, all written with Tailwind CSS classes and
            Material Design guidelines.
          </Typography>
          <div className='flex gap-2'>
            <Button size='sm' variant='outlined'>
              Documentation
            </Button>
            <Button size='sm'>Get Started</Button>
          </div>
        </div>
      </CartDrawer>
    </>
  )
}
export default Cart
