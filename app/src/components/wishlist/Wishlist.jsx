import { Button, Typography, IconButton } from '@material-tailwind/react'
import { Drawer as WishListDrawer } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { selectOpenWishlist, setCloseWishlist } from '../../features/nav/navSlice'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useRef } from 'react'

const WishList = () => {
  const ref = useRef()
  const openWishList = useSelector(selectOpenWishlist)
  const dispatch = useDispatch()
  const handleCloseWishlist = () => dispatch(setCloseWishlist())
  return (
    <>
      <WishListDrawer anchor='right' open={openWishList} onClose={handleCloseWishlist}>
        <div className='p-4 w-[300px] h-full bg-light-background-main dark:bg-dark-background-main text-light-text-primary dark:text-dark-text-primary'>
          <div className='mb-6 flex items-center justify-between'>
            <Typography variant='h5'>Material Tailwind</Typography>
            <IconButton ref={ref} variant='gradient' onClick={handleCloseWishlist}>
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
      </WishListDrawer>
    </>
  )
}
export default WishList
