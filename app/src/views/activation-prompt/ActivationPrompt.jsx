import { Typography } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/outline'
import { Button } from '@material-tailwind/react'
const ActivationPrompt = () => {
  return (
    <div className='w-11/12 mx-auto '>
      <div className='sm:w-11/12 mx-auto flex-col flex items-center justify-center  1000px:min-h-[calc(100vh-160px)] md:w-full shadow-lg p-6 rounded-lg my-9 bg-light-background-secondary dark:bg-dark-background-default '>
        <Typography variant='h3'>Check your email for verification url</Typography>
        <Link to='/login'>
          <Button
            color='blue'
            className={` flex items-center my-4 capitalize text-base font-Poppins bg-light-primary-main dark:bg-dark-primary-dark ml-2  } `}
          >
            <ArrowRightEndOnRectangleIcon width={25} className='mr-2 -ml-1' />
            Login
          </Button>
        </Link>
      </div>
    </div>
  )
}
export default ActivationPrompt
