import { Link } from 'react-router-dom'
import styles from '../../../styles/styles'
import SearchBox from './searchbox/SearchBox'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import ThemeToggler from '../../theme-toggler/ThemeToggler'
// import { Button } from '@material-tailwind/react'

const SearchBar = () => {
  return (
    <div className={'bg-light-background-default dark:bg-dark-background-default duration-200 py-5'}>
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
          <ThemeToggler />
          <Link to='/seller'>
            <button
              className={`${styles.button} bg-light-primary-main dark:bg-dark-primary-dark hover:bg-light-primary-light text-light-text-primary dark:text-dark-text-primary dark:hover:bg-opacity-80 duration-200 ml-2  } `}
            >
              Become Seller <ChevronRightIcon width={20} className='ml-1' />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
