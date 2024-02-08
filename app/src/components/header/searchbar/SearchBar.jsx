import { Link } from 'react-router-dom'
import styles from '../../../styles/styles'
import SearchBox from './searchbox/SearchBox'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

const SearchBar = () => {
  return (
    <div className='hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between'>
      {/* logo */}
      <div>
        <Link to='/'>
          <img
            className='h-[40px] max-w-[150px] object-contain'
            src='https://shopo.quomodothemes.website/assets/images/logo.svg'
            alt='shop o logo'
          />
        </Link>
      </div>
      <SearchBox />
      <div className={`${styles.button}`}>
        <Link to='/seller'>
          <h1 className={`text-white ${styles.noramlFlex} `}>
            Become Seller <ChevronRightIcon className='ml-1 w-5' />
          </h1>
        </Link>
      </div>
    </div>
  )
}

export default SearchBar
