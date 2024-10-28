import { Button, IconButton, Typography } from '@material-tailwind/react'
import Loader from '../loader/Loader'
import { TrashIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'

const UserAddress = () => {
  const isLoading = false
  const isError = false
  const isSuccess = true
  const navigate = useNavigate()

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
          <div className='flex flex-col w-full relative duration-200 bg-light-background-main dark:bg-dark-background-secondary py-3 sm:py-6 px-4 sm:px-8 rounded-lg'>
            <div className='flex w-full items-center flex-col sm:flex-row gap-2 sm:gap-0 '>
              <Typography variant='h2' className='mt-2 sm:mt-0 text-nowrap sm:text-wrap text-3xl  sm:text-4xl'>
                My Addresses
              </Typography>
              <Button variant='filled' color='blue' className='sm:ml-auto text-nowrap h-12'>
                Add New
              </Button>
            </div>

            <div className=' mt-6   flex w-full items-center gap-2 '>
              <Button
                className='capitalize text-base text-inherit duration-150   p-0 hover:brightness-90 dark:hover:brightness-125 '
                variant='text'
                fullWidth
                onClick={() => {
                  navigate(`/profile/user-address/1`)
                }}
              >
                <div className='rounded-lg  flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between p-4 dark:bg-dark-background-third bg-light-background-secondary'>
                  <Typography variant='lead' className='font-medium'>
                    Home
                  </Typography>

                  <Typography variant='paragraph' className=' font-normal'>
                    494 Erdman Pasaage, New Zoietown, Paraguay
                  </Typography>
                  <Typography variant='paragraph' className=' font-medium'>
                    (213) 840-9416
                  </Typography>
                </div>
              </Button>
              <IconButton
                variant='outlined'
                className='text-light-text-secondary dark:text-dark-text-secondary border-light-text-secondary focus:ring-1 dark:border-dark-text-secondary  hover:opacity-50  '
              >
                <TrashIcon width={25} />
              </IconButton>
            </div>
            <div className=' mt-6   flex w-full items-center gap-2 '>
              <Button
                className='capitalize text-base text-inherit  duration-150 p-0 hover:brightness-90 dark:hover:brightness-125 '
                variant='text'
                fullWidth
                onClick={() => {
                  navigate(`/profile/user-address/1`)
                }}
              >
                <div className='rounded-lg  flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between p-4 dark:bg-dark-background-third bg-light-background-secondary'>
                  <Typography variant='lead' className='font-medium'>
                    Work
                  </Typography>

                  <Typography variant='paragraph' className=' font-normal'>
                    494 Erdman Pasaage, New Zoietown, Paraguay
                  </Typography>
                  <Typography variant='paragraph' className=' font-medium'>
                    (213) 840-9416
                  </Typography>
                </div>
              </Button>
              <IconButton
                variant='outlined'
                className='text-light-text-secondary dark:text-dark-text-secondary border-light-text-secondary focus:ring-1 dark:border-dark-text-secondary  hover:opacity-50  '
              >
                <TrashIcon width={25} />
              </IconButton>
            </div>
            <div className=' mt-6   flex w-full items-center gap-2 '>
              <Button
                className='capitalize text-base text-inherit duration-150  p-0 hover:brightness-90 dark:hover:brightness-125 '
                variant='text'
                fullWidth
                onClick={() => {
                  navigate(`/profile/user-address/1`)
                }}
              >
                <div className='rounded-lg  flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between p-4 dark:bg-dark-background-third bg-light-background-secondary'>
                  <Typography variant='lead' className='font-medium'>
                    Village
                  </Typography>

                  <Typography variant='paragraph' className=' font-normal'>
                    494 Erdman Pasaage, New Zoietown, Paraguay
                  </Typography>
                  <Typography variant='paragraph' className=' font-medium'>
                    (213) 840-9416
                  </Typography>
                </div>
              </Button>
              <IconButton
                variant='outlined'
                className='text-light-text-secondary dark:text-dark-text-secondary border-light-text-secondary focus:ring-1 dark:border-dark-text-secondary  hover:opacity-50  '
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
export default UserAddress
