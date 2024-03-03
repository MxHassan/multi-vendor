import { Link } from 'react-router-dom'

const CopyRightsArea = () => {
  return (
    <div className='grid font-Poppins grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-light-text-primary dark:text-dark-text-secondary text-sm pb-8'>
      <span>
        © {new Date().getFullYear()}{' '}
        <Link to='/' className='underline hover:text-blue-700 dark:hover:text-blue-300 duration-150'>
          Becodemy
        </Link>
        . All rights reserved.
      </span>

      <span>Terms · Privacy Policy</span>
      <div className='sm:block flex items-center justify-center w-full'>
        <img
          src='https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75'
          alt=''
        />
      </div>
    </div>
  )
}

export default CopyRightsArea
