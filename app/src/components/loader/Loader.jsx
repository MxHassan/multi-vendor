import { Spinner } from "@material-tailwind/react"


const Loader = () => {
  return (
    // <Dialog open={isLoading} className='bg-transparent  flex justify-center shadow-none'>
    //   <Spinner
    //     color='blue'
    //     className='h-14 w-14 animate-fade-in text-light-grey-900/50 dark:text-light-grey-400/50'
    //   />
    // </Dialog>
    
      <Spinner
        color='blue'
        className='h-20 w-20 animate-fade-in text-light-grey-900/50 dark:text-light-grey-400/50'
      />
  )
}
export default Loader