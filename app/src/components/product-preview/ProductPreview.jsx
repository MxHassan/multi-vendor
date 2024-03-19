import { XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog, DialogBody, DialogHeader, IconButton } from '@material-tailwind/react'
import ProductDetailsCard from '../product-details-card/ProductDetailsCard'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { selectProductById } from '../../features/products/productsApiSlice'

const ProductPreview = ({ open, handleOpen, productId }) => {
  const product = useSelector((state) => selectProductById(state, productId))
  const ref = useRef()
  return (
    <Dialog
      size='lg'
      className='bg-light-background-secondary dark:bg-dark-background-secondary'
      open={open}
      handler={handleOpen}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 }
      }}
    >
      <DialogHeader className='relative p-0 m-0 '>
        <div className='absolute top-2 right-3 z-10 '>
          <IconButton
            ref={ref}
            variant='gradient'
            onClick={() => {
              handleOpen()
              ref.current.classList.add('animate-spin-out')
            }}
          >
            <XMarkIcon width={35} />
          </IconButton>
        </div>
      </DialogHeader>
      <DialogBody className=' 800px:flex overflow-scroll text-light-text-primary dark:text-dark-text-primary p-2 small-scrollbar preview-scrollbar h-[90vh] 800px:h-[70vh]  overflow-x-hidden '>
        <ProductDetailsCard productId={product.id} />
      </DialogBody>
    </Dialog>
  )
}
export default ProductPreview
