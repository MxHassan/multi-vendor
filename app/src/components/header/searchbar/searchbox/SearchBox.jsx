import { useState } from 'react'
import { productData } from '../../../../static/data'
import { Link } from 'react-router-dom'
import { Card, CardBody, CardHeader, Input, List, ListItem, Typography } from '@material-tailwind/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchData, setSearchData] = useState([])
  const [searchActive, setSearchActive] = useState(null)

  const handleSearchChange = (e) => {
    const term = e.target.value
    setSearchTerm(term)
    const filteredProducts =
      productData && productData.filter((product) => product.name.toLowerCase().includes(term.toLowerCase()))
    setSearchData(filteredProducts)
  }
  return (
    <div className='w-1/2 relative '>
      <Input
        // color='blue'
        containerProps={{ className: 'flex' }}
        onFocus={() => {
          if (!searchActive) setSearchActive(true)
        }}
        onBlur={() => {
          if (searchActive) setSearchActive(false)
        }}
        type='search'
        className='h-10 pl-12 hover:w-[80%] focus:w-full duration-500 mx-auto placeholder:text-blue-gray-300 focus:!border-blue-300 1300px:w-[300px] 1100px:w-[200px] 800px:w-32  '
        icon={searchActive && <MagnifyingGlassIcon width={25} className='animate-fade-in duration-500' />}
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder='Search for a product...'
        labelProps={{
          className: 'before:content-none after:content-none'
        }}
      />
      {searchData && searchTerm !== '' && searchData.length !== 0 && (
        <div className='absolute  w-full z-20 '>
          <List className=' mx-auto w-11/12  bg-gray-300 small-scrollbar rounded-[4px] px-2 py-1 1000px:px-4 max-h-[40vh] overflow-scroll overflow-x-hidden animate-fade-in duration-300 '>
            {searchData.map((i, index) => {
              const d = i.name
              const Product_name = d.replace(/\s+/g, '-')
              return (
                <Link key={index} to={`/product/${Product_name}`}>
                  <ListItem className='p-0 hover:scale-[1.05] duration-300 '>
                    <Card className='w-full rounded-md h-[80px] flex-row'>
                      <CardHeader className='m-0 1000px:w-20 w-16 shrink-0 rounded-lg '>
                        <img
                          src={i.image_Url[0].url}
                          alt=''
                          className='w-full h-full object-cover hover:scale-[1.3] duration-300 '
                        />
                      </CardHeader>
                      <CardBody>
                        <Typography color='black'>{i.name}</Typography>
                      </CardBody>
                    </Card>
                  </ListItem>
                </Link>
              )
            })}
          </List>
        </div>
      )}
    </div>
  )
}

export default Search
