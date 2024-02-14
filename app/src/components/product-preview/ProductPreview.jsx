import { XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog, DialogBody, DialogHeader, IconButton } from '@material-tailwind/react'
import ProductDetailsCard from '../product-details-card/ProductDetailsCard'
import { useRef } from 'react'

const ProductPreview = ({ open, handleOpen, product }) => {
  const ref = useRef()
  return (
    <Dialog
      size='xl'
      // className=''
      open={open}
      handler={handleOpen}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 }
      }}
    >
      <DialogHeader className='relative p-0 m-0'>
        <div className='absolute top-2 right-3 z-10'>
          <IconButton ref={ref} variant='text' onClick={handleOpen}>
            <XMarkIcon
              onClick={() => {
                ref.current.classList.add('animate-spin-out')
              }}
              color='gray'
              width={35}
            />
          </IconButton>
        </div>
      </DialogHeader>
      <DialogBody className=' 800px:flex overflow-scroll  p-2 small-scrollbar preview-scrollbar h-[90vh] 800px:h-[70vh]  overflow-x-hidden '>
        <ProductDetailsCard product={product} />
      </DialogBody>
    </Dialog>
  )
}
export default ProductPreview
