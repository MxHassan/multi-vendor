import { HeartIcon } from '@heroicons/react/24/outline'
import { Badge, Button } from '@material-tailwind/react'
import styles from '../../styles/styles'
import { useDispatch } from 'react-redux'
import { setOpenWishlist } from '../../features/nav/navSlice'

const WishlistIcon = ({ sidebar }) => {
  const dispatch = useDispatch()

  const handleOpenWishlist = () => dispatch(setOpenWishlist())
  return (
    <Badge color='green' content='5'>
      <Button
        disabled={sidebar}
        variant='text'
        className={`${styles.iconButton}  ${sidebar ? 'text-inherit' : 'text-white'} disabled:opacity-100 `}
        onClick={handleOpenWishlist}
      >
        <HeartIcon width={sidebar ? 30 : 35} />
      </Button>
    </Badge>
  )
}

export default WishlistIcon
