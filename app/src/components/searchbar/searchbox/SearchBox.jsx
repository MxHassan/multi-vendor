import { useState } from 'react'
import { productData } from '../../../static/data'
import { Link, useNavigate } from 'react-router-dom'
// import { Card, CardBody, CardHeader, Input, List, ListItem, Typography } from '@material-tailwind/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Button } from '@material-tailwind/react'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchData, setSearchData] = useState([])
  const [searchActive, setSearchActive] = useState(null)
  const navigate = useNavigate()

  const handleSearchChange = (e) => {
    const term = e.target.value
    setSearchTerm(term)
    const filteredProducts =
      productData && productData.filter((product) => product.name.toLowerCase().includes(term.toLowerCase()))
    setSearchData(filteredProducts)
  }
  return (
    <div className={` w-1/2 relative `}>
      <div className='flex relative '>
        <div className='absolute top-2 left-2'>
          {searchActive && (
            <MagnifyingGlassIcon width={25} className='animate-fade-in text-gray-700 dark:text-white ' />
          )}
        </div>
        <input
          // color='blue'
          onFocus={() => {
            if (!searchActive) setSearchActive(true)
          }}
          onBlur={() => {
            setTimeout(() => {
              if (searchActive) setSearchActive(false)
              if (searchTerm.length !== 0) setSearchTerm('')
            }, 200)
          }}
          type='search'
          className={`h-10  pl-10 pr-2 bg-light-background-secondary  dark:bg-dark-background-secondary  dark:text-dark-text-primary placeholder:opacity-0  dark:placeholder:text-white rounded-lg hover:w-[80%] hover:placeholder:opacity-50 focus:placeholder:opacity-100 focus:w-full duration-500 mx-auto placeholder:text-gray-600 focus:bg-light-background-paper dark:focus:bg-dark-background-third
            1300px:w-[300px] 1100px:w-[200px] 800px:w-32
            `}
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder='Search for a product...'
          // labelProps={{
          //   className: 'before:content-none after:content-none'
          // }}
        />
      </div>
      
      {searchData && searchActive && searchTerm !== '' && searchData.length !== 0 && (
        <div className='absolute mt-1 w-full h-fit z-50 '>
          <div
            className={` mx-auto w-11/12 small-scrollbar bg-light-background-secondary dark:bg-dark-background-secondary dark:text-dark-text-primary   rounded-[4px] px-2 py-1 1000px:px-4  max-h-[40vh] overflow-scroll overflow-x-hidden animate-fade-in duration-300 `}
          >
            {searchData.map((i, index) => {
              const d = i.name
              const Product_name = d.replace(/\s+/g, '-')
              return (
                <Button
                  className='capitalize text-base text-inherit'
                  variant='text'
                  size='sm'
                  onClick={() => {
                    setSearchActive(false)
                    setSearchTerm('')
                    navigate(`/product/${Product_name}`)
                  }}
                  fullWidth
                  key={index}
                  to={`/product/${Product_name}`}
                >
                  <div className='my-1 p-0 hover:scale-[1.05] duration-300 '>
                    <div className='w-full rounded-md h-[80px] flex gap-4 items-center'>
                      <div className='m-0 1000px:w-20 w-16 shrink-0  '>
                        <img src={i.image_Url[0].url} alt='' className='w-full h-full object-cover rounded-lg ' />
                      </div>
                      <div>
                        <p className='font-normal'>{i.name}</p>
                      </div>
                    </div>
                  </div>
                </Button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default Search
