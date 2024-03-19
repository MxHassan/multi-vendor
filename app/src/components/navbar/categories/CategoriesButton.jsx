import { Bars3BottomLeftIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import Categories from './Categories'

const CategoriesButton = () => {
  const [dropDown, setDropDown] = useState(false)

  const handleDropMenu = () => {
    setDropDown(!dropDown)
  }
  return (
    <div className='h-[60px] mt-[10px] w-[270px] relative flex flex-col items-center bg-light-background-paper dark:bg-dark-background-main text-light-text-primary dark:text-dark-text-primary rounded-t-lg   '>
      <button
        onClick={handleDropMenu}
        className=' w-full h-full flex items-center justify-around font-Poppins text-lg font-[500] capitalize '
      >
        <Bars3BottomLeftIcon className='h-7 w-7 -mr-5' />
        All Categories{' '}
        <ChevronDownIcon className={` w-5 transition-transform duration-300 ${dropDown ? 'rotate-180' : ''}`} />
      </button>
      {dropDown && <Categories handleDropMenu={handleDropMenu} />}
    </div>
  )
}
export default CategoriesButton
