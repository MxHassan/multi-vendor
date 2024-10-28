import { Button, IconButton, Typography } from '@material-tailwind/react'
import Loader from '../loader/Loader'
import { TrashIcon } from '@heroicons/react/24/outline'

const PaymentMethodes = () => {
  const isLoading = false
  const isError = false
  const isSuccess = true
  let content

  if (isLoading) {
    content = (
      <div className='flex justify-center items-center h-full '>
        <Loader />
      </div>
    )
  }

  if (isError) {
    content = (
      <div className='flex justify-center items-center h-full'>
        <Typography variant='h2' color='red'>
          Something went wrong {error?.data?.message}
        </Typography>
      </div>
    )
  }
  if (isSuccess) {
    content = (
      <div className={`flex justify-center w-full `}>
        <div className='items-center w-full flex flex-col gap-2 justify-center'>
          <div className='flex flex-col w-full relative bg-light-background-main dark:bg-dark-background-secondary py-3 sm:py-6 px-4 sm:px-8 rounded-lg'>
            <div className='flex w-full items-center flex-col sm:flex-row gap-2 sm:gap-0 '>
              <Typography
                variant='h2'
                className='mt-2 sm:mt-0 text-nowrap sm:text-wrap text-2xl 400px:text-3xl sm:text-4xl'
              >
                Payment Methodes
              </Typography>
              <Button variant='filled' color='blue' className='sm:ml-auto text-nowrap h-12'>
                Add New
              </Button>
            </div>
            {/* <br /> */}

            <div className='flex flex-col md:flex-row w-full mt-6 my-1 items-center p-4 gap-4 bg-light-background-secondary dark:bg-dark-background-third rounded-xl'>
              <img
                className='h-10 w-20 object-contain  '
                src='https://www.pngplay.com/wp-content/uploads/12/Visa-Card-Logo-Transparent-File.png'
              />
              <Typography variant='lead' className='text-sm 400px:text-xl text-nowrap sm:text-wrap'>
                Payment Methodes
              </Typography>
              <Typography variant='paragraph' className='ml-0 md:ml-auto mr-2 font-medium '>
                1234 **** **** ****
              </Typography>
              <Typography variant='paragraph' className=' mr-2 font-medium'>
                09/2025
              </Typography>
              <IconButton
                variant='outlined'
                className='text-light-text-secondary dark:text-dark-text-secondary border-light-text-secondary dark:border-dark-text-secondary'
              >
                <TrashIcon width={25} />
              </IconButton>
            </div>
            <div className='flex flex-col md:flex-row w-full my-1 items-center p-4 gap-4 bg-light-background-secondary dark:bg-dark-background-third rounded-xl'>
              <img className='h-10 w-20 object-contain' src='https://pngimg.com/d/mastercard_PNG16.png' />
              <Typography variant='lead' className='text-sm 400px:text-xl text-nowrap sm:text-wrap'>
                Payment Methodes
              </Typography>
              <Typography variant='paragraph' className='ml-0 md:ml-auto mr-2 font-medium'>
                1234 **** **** ****
              </Typography>
              <Typography variant='paragraph' className=' mr-2 font-medium'>
                09/2025
              </Typography>
              <IconButton
                variant='outlined'
                className='text-light-text-secondary dark:text-dark-text-secondary border-light-text-secondary dark:border-dark-text-secondary'
              >
                <TrashIcon width={25} />
              </IconButton>
            </div>
            <div className='flex flex-col md:flex-row w-full my-1 items-center p-4 gap-4 bg-light-background-secondary dark:bg-dark-background-third rounded-xl'>
              <img className='h-10 w-20 object-contain' src='/paypal-logo-png-transparent.png' />
              <Typography variant='lead' className='text-sm 400px:text-xl text-nowrap sm:text-wrap'>
                Payment Methodes
              </Typography>
              <Typography variant='paragraph' className='ml-0 md:ml-auto mr-2 font-medium'>
                moh***************
              </Typography>
              <IconButton
                variant='outlined'
                className='text-light-text-secondary dark:text-dark-text-secondary border-light-text-secondary dark:border-dark-text-secondary'
              >
                <TrashIcon width={25} />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return content
}
export default PaymentMethodes
