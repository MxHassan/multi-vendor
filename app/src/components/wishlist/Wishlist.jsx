import {
  Drawer as WishListDrawer,
  Button,
  Typography,
  IconButton,
  Badge
} from '@material-tailwind/react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectOpenWishlist,
  setCloseWishlist,
  setOpenWishlist
} from '../../features/nav/navSlice'
import { HeartIcon, XMarkIcon } from '@heroicons/react/24/outline'

const WishList = () => {
  const openWishList = useSelector(selectOpenWishlist)
  const dispatch = useDispatch()

  const openDrawer = () => dispatch(setOpenWishlist())

  const closeDrawer = () => dispatch(setCloseWishlist())

  return (
    <>
      <Badge color='amber' content='4'>
        <IconButton variant='text' color='white' onClick={openDrawer}>
          <HeartIcon width={35} />
        </IconButton>
      </Badge>
      <WishListDrawer
        placement='right'
        open={openWishList}
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
      </WishListDrawer>
    </>
  )
}
export default WishList
