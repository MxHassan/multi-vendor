import { Link } from 'react-router-dom'
import styles from '../../../styles/styles'
import SearchBox from './searchbox/SearchBox'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { Button } from '@material-tailwind/react'

const SearchBar = () => {
  return (
    <div className='hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between'>
      {/* logo */}
      <Link to='/'>
        <img
          className='h-[40px] max-w-[150px] object-contain'
          src='https://shopo.quomodothemes.website/assets/images/logo.svg'
          alt='shop o logo'
        />
      </Link>
      <SearchBox />
      {/* <div className={`${styles.button}`}> */}
      <Link to='/seller'>
        <Button className='text-white flex items-center text-base px-4 capitalize font-Poppins font-normal '>
          Become Seller <ChevronRightIcon className='ml-1 w-5' />
        </Button>
      </Link>
      {/* </div> */}
    </div>
  )
}

export default SearchBar
