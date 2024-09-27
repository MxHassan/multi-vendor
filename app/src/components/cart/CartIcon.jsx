import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { Badge, Button } from '@material-tailwind/react'
import styles from '../../styles/styles'
import { useDispatch } from 'react-redux'
import { setOpenCart } from '../../features/nav/navSlice'

const CartIcon = ({ sidebar }) => {
  const dispatch = useDispatch()

  const handleOpenCart = () => dispatch(setOpenCart())
  return (
    <Badge color='green' content='3'>
      <Button
        disabled={sidebar}
        variant='text'
        className={`${styles.iconButton} ${sidebar ? 'text-inherit': 'text-white'}  disabled:opacity-100 `}
        onClick={handleOpenCart}
      >
        <ShoppingCartIcon width={sidebar ? 30 : 35} />
      </Button>
    </Badge>
  )
}

export default CartIcon
