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
        <div className='p-4 w-[300px] h-full bg-light-background-main dark:bg-dark-background-main text-light-text-primary dark:text-dark-text-primary '>
          <div className='mb-6 flex items-center justify-between'>
            <Typography variant='h5'>Material Tailwind</Typography>
            <IconButton variant='gradient' onClick={handleCloseCart}>
              <XMarkIcon width={35} />
            </IconButton>
          </div>
          <Typography className='mb-8 pr-4 font-normal'>
            Material Tailwind features multiple React and HTML components, all written with Tailwind CSS classes and
            Material Design guidelines.
          </Typography>
          <div className='flex gap-2'>
            <Button color='blue' variant='filled' size='sm'>
              Documentation
            </Button>
            <Button variant='gradient' size='sm'>
              Get Started
            </Button>
          </div>
        </div>
      </CartDrawer>
    </>
  )
}
export default Cart
