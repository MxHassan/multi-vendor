import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { footerProductLinks, footerSupportLinks, footercompanyLinks } from '../../../static/data'

const InfoAndLinksArea = () => {
  return (
    <div className='grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center'>
      <ul className='px-5 text-center sm:text-start flex sm:block flex-col items-center'>
        <img
          src='https://shopo.quomodothemes.website/assets/images/logo.svg'
          alt=''
          className='dark:invert-[1] brightness-0  opacity-80 dark:opacity-90'
        />
        <br />
        <p>The home and elements needeed to create beatiful products.</p>
        <div className='flex items-center gap-3 mt-[15px]'>
          <Link to='/'>
            <Facebook fontSize='large' />
          </Link>
          <Link to='/'>
            <Twitter fontSize='large' />
          </Link>
          <Link to='/'>
            <Instagram fontSize='large' />
          </Link>
          <Link to='/'>
            <YouTube fontSize='large' />
          </Link>
        </div>
      </ul>

      <ul className='text-center sm:text-start'>
        <h1 className='mb-1 font-semibold'>Company</h1>
        {footerProductLinks.map((link, index) => (
          <li key={index}>
            <Link
              className=' hover:text-blue-700 dark:hover:text-blue-300 duration-300 text-sm cursor-pointer leading-6'
              to={link.link}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <ul className='text-center sm:text-start'>
        <h1 className='mb-1 font-semibold'>Shop</h1>
        {footercompanyLinks.map((link, index) => (
          <li key={index}>
            <Link
              className='hover:text-blue-700 dark:hover:text-blue-300 duration-300 text-sm cursor-pointer leading-6'
              to={link.link}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <ul className='text-center sm:text-start'>
        <h1 className='mb-1 font-semibold'>Support</h1>
        {footerSupportLinks.map((link, index) => (
          <li key={index}>
            <Link
              className='hover:text-blue-700 dark:hover:text-blue-300 duration-300 text-sm cursor-pointer leading-6'
              to={link.link}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default InfoAndLinksArea
