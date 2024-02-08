import { useState } from 'react'
import { productData } from '../../../../static/data'
import { Link } from 'react-router-dom'
import { Card, Input } from '@material-tailwind/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchData, setSearchData] = useState(null)
  const handleSearchChange = (e) => {
    const term = e.target.value
    setSearchTerm(term)
    const filteredProducts =
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      )
    setSearchData(filteredProducts)
  }
  return (
    <div className='w-1/2 relative'>
      <div>
        <Input
          // color='blue'
          type='search'
          className='h-10 w-full  pl-9 placeholder:text-blue-gray-300 focus:!border-blue-300'
          icon={<MagnifyingGlassIcon width={25} />}
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder='Search for a product...'
          labelProps={{
            className: 'before:content-none after:content-none'
          }}
        />
      </div>
      {searchData && searchTerm !== '' && searchData.length !== 0 && (
        <div className='absolute mt-2 rounded-md min-h-[30vh] bg-gray-200 shadow-sm z-10  transition-[400px] duration-500 ease-in-out'>
          {searchData.map((i, index) => {
            const d = i.name
            const Product_name = d.replace(/\s+/g, '-')
            return (
              <Link key={index} to={`/product/${Product_name}`}>
                <Card className='my-1 rounded-md'>
                  <div className='w-full flex items-start py-3'>
                    <img
                      src={i.image_Url[0].url}
                      alt=''
                      className='w-10 h-10 mr-3'
                    />
                    <h1>{i.name}</h1>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Search
