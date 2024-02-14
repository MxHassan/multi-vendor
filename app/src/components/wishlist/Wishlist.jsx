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
        <div className='p-4 w-[300px] '>
          <div className='mb-6 flex items-center justify-between'>
            <Typography variant='h5' color='blue-gray'>
              Material Tailwind
            </Typography>
            <IconButton ref={ref} variant='text' color='blue-gray' onClick={handleCloseWishlist}>
              <XMarkIcon width={35} />
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
      </WishListDrawer>
    </>
  )
}
export default WishList
