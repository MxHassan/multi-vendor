import { useEffect, useState } from 'react'
import { Bars3BottomLeftIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { categoriesData } from '../../../../static/data'
import { Link } from 'react-router-dom'

const Categories = () => {
  const [dropDown, setDropDown] = useState(false)
  useEffect(() => {})
  const handleDropMenu = () => {
    setDropDown(!dropDown)
  }
  return (
    <>
      <div className='h-[60px] mt-[10px] w-[270px] relative flex flex-col items-center bg-light-background-paper dark:bg-dark-background-main text-light-text-primary dark:text-dark-text-primary rounded-t-lg   '>
        <button
          onClick={handleDropMenu}
          className=' w-full h-full flex items-center justify-around font-Poppins text-lg font-[500] capitalize '
        >
          <Bars3BottomLeftIcon className='h-7 w-7 -mr-5' />
          All Categories{' '}
          <ChevronDownIcon className={` w-5 transition-transform duration-300 ${dropDown ? 'rotate-180' : ''}`} />
        </button>
        {categoriesData && dropDown && (
          <div className='p-2 focus:outline-none max-h-[40vh] overflow-scroll bg-light-background-secondary dark:bg-dark-background-secondary overflow-x-hidden small-scrollbar z-10 w-full absolute left-0 top-14 mt-1 animate-fade-in '>
            {categoriesData.map((categorie, index) => {
              const d = categorie.title.toLowerCase()
              const categorieUrl = d.replace(/\s+/g, '-')
              return (
                <Link key={index} to={`/categories/${categorieUrl}`}>
                  <div
                    className='p-0 flex items-center gap-3 mt-1 bg-light-background-third dark:bg-dark-background-third hover:scale-[1.05] duration-300'
                    key={index}
                    id={categorie.id}
                  >
                    <img src={categorie.image_Url} alt='' className='w-16 h-full  shrink-0 object-cover rounded-lg' />
                    <p className='font-Poppins dark:text-neutral-100 text-balance'>{categorie.title}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}

export default Categories
