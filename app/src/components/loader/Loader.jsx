import { Spinner } from "@material-tailwind/react"
import { Backdrop } from "@mui/material"

const Loader = ({isLoading}) => {
  return (
    // <Dialog open={isLoading} className='bg-transparent  flex justify-center shadow-none'>
    //   <Spinner
    //     color='blue'
    //     className='h-14 w-14 animate-fade-in text-light-grey-900/50 dark:text-light-grey-400/50'
    //   />
    // </Dialog>
    <Backdrop open={isLoading}>
      <Spinner
        color='blue'
        className='h-14 w-14 animate-fade-in text-light-grey-900/50 dark:text-light-grey-400/50'
      />
    </Backdrop>
  )
}
export default Loader