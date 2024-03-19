import { Backdrop } from '@mui/material'
import Loader from '../loader/Loader'
import { Dialog } from '@material-tailwind/react'

const LoaderPage = () => {
  return (
    <Backdrop open={true}>
      <Loader />
    </Backdrop>
    // <Dialog size='xxl' open={true} className='bg-deep-orange-800 outline-none flex items-center justify-center'>
    //   <Loader />
    // </Dialog>
  )
}
export default LoaderPage
