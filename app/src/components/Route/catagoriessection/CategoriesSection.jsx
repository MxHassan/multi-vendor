import { brandingData, categoriesData } from '../../../static/data'
import { Link } from 'react-router-dom'
import { Typography } from '@material-tailwind/react'

const CategoriesSection = () => {
  return (
    <>
      <div className='sm:w-11/12 mx-auto md:w-full hidden 400px:block shadow-lg bg-light-background-default dark:bg-dark-background-default rounded-md '>
        <div className='branding my-12 grid grid-cols-1 max-w-[400px] mx-auto md:max-w-full md:mx-0 gap-[20px]  md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-7 xl:grid-cols-4 xl:gap-[30px]  shadow-sm  p-5 rounded-md'>
          {brandingData &&
            brandingData.map((brand, index) => (
              <div
                key={index}
                id='hover-rotate'
                className='flex items-center bg-light-background-secondary dark:bg-dark-background-secondary rounded-md shadow-sm p-4 cursor-pointer '
              >
                {brand.icon}
                <div className='px-3'>
                  <p className='font-bold text-sm md:text-base'>{brand.title}</p>
                  <p className='text-xs md:text-sm'>{brand.Description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div
        className='sm:w-11/12 mx-auto md:w-full shadow-lg p-6 rounded-lg mb-12 bg-light-background-default dark:bg-dark-background-default '
        id='categories'
      >
        <div className='grid grid-cols-1 max-w-[400px] mx-auto md:max-w-full md:mx-0 gap-[20px]  md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-7 xl:grid-cols-5 xl:gap-[30px]'>
          {categoriesData &&
            categoriesData.map((i) => {
              {
                /* const d = i.title.toLowerCase() */
              }
              const categorieUrl = i.title.replace(/\s+/g, '-')
              return (
                <Link to={`/products?category=${categorieUrl}`} key={i.id}>
                  <div className='w-full h-[100px] flex items-center bg-light-background-secondary dark:bg-dark-background-secondary p-3 rounded-lg justify-between cursor-pointer overflow-hidden '>
                    <Typography variant='h5' className='leading-[1.3]'>
                      {i.title}
                    </Typography>
                    <img src={i.image_Url} alt='' className='w-[120px] object-cover hover:scale-125 duration-300' />
                  </div>
                </Link>
              )
            })}
        </div>
      </div>
    </>
  )
}
export default CategoriesSection
