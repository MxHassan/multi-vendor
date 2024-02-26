import { Link } from 'react-router-dom'
import SearchBox from './searchbox/SearchBox'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { Button } from '@material-tailwind/react'
import Switcher from '../theme-toggler/Switcher'

const SearchBar = () => {
  return (
    <div className={' dark:bg-dark-background-default w-full duration-200 py-5'}>
      <div className=' hidden w-11/12 mx-auto 800px:h-[50px] 800px:flex items-center justify-between'>
        {/* logo */}
        <Link to='/'>
          <img
            className='h-[40px] max-w-[150px] object-contain'
            src='https://shopo.quomodothemes.website/assets/images/logo.svg'
            alt='shop o logo'
          />
        </Link>
        <SearchBox />
        <div className='flex items-center'>
          <Switcher />
          <Link to='/seller'>
            <Button
              color='blue'
              className={`capitalize flex items-center text-md text-base font-Poppins font-normal px-4 ml-2  } `}
            >
              Become Seller <ChevronRightIcon width={20} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
