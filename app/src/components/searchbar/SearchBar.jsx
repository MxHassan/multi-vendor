import { Link } from 'react-router-dom'
import SearchBox from './searchbox/SearchBox'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { Button, IconButton } from '@material-tailwind/react'
import Switcher from '../theme-toggler/Switcher'
import { selectCurrentTheme, toggleThemeMode } from '../../features/theme/themeSlice'
import { useDispatch, useSelector } from 'react-redux'

const SearchBar = () => {
  const dispatch = useDispatch()
  const theme = useSelector(selectCurrentTheme)
  const toggleDarkTheme = () => {
    dispatch(toggleThemeMode())
  }
  return (
    <div className='hidden 800px:flex dark:bg-dark-background-default w-full duration-200 py-5'>
      <div className=' w-11/12 mx-auto h-[50px] flex items-center justify-between'>
        {/* logo */}
        <Link to='/'>
          <img
            className={`h-[40px] max-w-[150px] object-contain ${theme && 'invert-[1] brightness-0'}`}
            // src='https://shopo.quomodothemes.website/assets/images/logo.svg'
            src='https://cdn.pixabay.com/photo/2021/08/10/16/02/amazon-6536326_1280.png'
            alt='shop logo'
          />
        </Link>
        <SearchBox />
        <div className='flex items-center'>
          <IconButton
            onClick={toggleDarkTheme}
            variant='text'
            className='bg-light-background-secondary dark:bg-dark-background-secondary'
          >
            <Switcher />
          </IconButton>
          <Link to='/shop'>
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
