import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Button,
  List,
  ListItem,
  ListItemPrefix
} from '@material-tailwind/react'
import { useState } from 'react'
import { productData } from '../../../static/data'
import { useNavigate } from 'react-router-dom'

const MobileSearchBox = ({ handleOpen }) => {
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
    <Accordion
      className='   text-inherit flex flex-col 800px:hidden  w-full justify-center   bg-light-background-paper dark:bg-dark-background-paper rounded-xl py-2  '
      open={searchTerm.length !== 0}
    >
      <AccordionHeader
        onClick={() => handleOpen((cur) => (cur !== 1 ? 1 : cur))}
        className='border-b-0 p-0 text-inherit flex justify-center   '
      >
        <div className='flex relative ml-4 '>
          <div className='absolute top-2 left-2 '>
            {searchActive && (
              <MagnifyingGlassIcon width={25} className='animate-fade-in text-gray-700 dark:text-white ' />
            )}
          </div>
          <input
            onFocus={() => {
              if (!searchActive) setSearchActive(true)
            }}
            onBlur={() => {
              setTimeout(() => {
                if (searchActive) setSearchActive(false)
                if (searchTerm.length !== 0) setSearchTerm('')
              }, 150)
            }}
            type='search'
            className={`h-10  pl-10 mx-auto  bg-light-background-secondary  dark:bg-dark-background-secondary  dark:text-dark-text-primary placeholder:opacity-0  dark:placeholder:text-white rounded-lg hover:w-[80%] hover:placeholder:opacity-50 focus:placeholder:opacity-100 focus:w-full duration-500  placeholder:text-gray-600 focus:bg-light-background-paper dark:focus:bg-dark-background-third w-40`}
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder='Search for a product...'
            // labelProps={{
            //   className: 'before:content-none after:content-none'
            // }}
          />
        </div>
      </AccordionHeader>
      <AccordionBody className='py-1 text-inherit'>
        <List className='p-2 w-full small-scrollbar bg-light-background-secondary dark:bg-dark-background-secondary dark:text-dark-text-primary   rounded-[4px] px-2 py-1 1000px:px-4  max-h-[50vh] overflow-scroll overflow-x-hidden animate-fade-in duration-300 '>
          {!searchData && !searchActive && searchTerm === '' && searchData.length === 0 && <ListItem />}
          {searchData &&
            searchActive &&
            searchTerm !== '' &&
            searchData.length !== 0 &&
            searchData.map((i, index) => {
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
                  <ListItem
                    className='p-0 hover:scale-[1.05] flex flex-col hover:text-inherit  bg-light-background-secondary dark:bg-dark-background-secondary duration-300'
                    key={index}
                    id={i.id}
                  >
                    <ListItemPrefix className='w-24 shrink-0 rounded-lg '>
                      <img src={i.image_Url[0].url} alt='' className='w-full h-full object-cover rounded-lg ' />
                    </ListItemPrefix>
                    <p className='text-base'>{i.name}</p>
                  </ListItem>
                </Button>
              )
            })}
          {/* <div
              className={` w-full small-scrollbar bg-light-background-secondary dark:bg-dark-background-secondary dark:text-dark-text-primary   rounded-[4px] px-2 py-1 1000px:px-4  max-h-[50vh] overflow-scroll overflow-x-hidden animate-fade-in duration-300 `}
            > */}
          {/* </div> */}
        </List>
      </AccordionBody>
    </Accordion>
  )
}

export default MobileSearchBox
