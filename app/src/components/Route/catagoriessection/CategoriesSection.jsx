import { Link } from 'react-router-dom'
import { Typography } from '@material-tailwind/react'
import { categoriesData } from '../../../static/data'
// import { useGetCategoriesQuery } from '../../../features/categories/categoriesApiSlice'
// import Loader from '../../loader/Loader'

const CategoriesSection = () => {
  // const { data: categoriesData, isLoading, error, isError, isSuccess } = useGetCategoriesQuery()

  let content

  const categories = categoriesData.map((category, index) => {
    const categoryUrl = category.title.replace(/\s+/g, '-')
    return (
      <Link to={`/products?category=${categoryUrl}`} key={index}>
        <div className='w-full h-[100px] flex items-center bg-light-background-secondary dark:bg-dark-background-secondary p-3 rounded-lg justify-between cursor-pointer overflow-hidden '>
          <Typography variant='h5' className='leading-[1.3]'>
            {category.title}
          </Typography>
          <img src={category.image_Url} alt='' className='w-[120px] object-cover hover:scale-125 duration-300' />
        </div>
      </Link>
    )
  })
  content = (
    <div className='grid grid-cols-1 max-w-[400px] mx-auto md:max-w-full md:mx-0 gap-[20px]  md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-7 xl:grid-cols-5 xl:gap-[30px]'>
      {categories}
    </div>
  )
  return (
    <div
      className='sm:w-11/12 mx-auto md:w-full shadow-lg p-6 rounded-lg mb-12 bg-light-background-default dark:bg-dark-background-default '
      id='categories'
    >
      {content}
    </div>
  )
}
export default CategoriesSection
{
  /* <div className='grid grid-cols-1 max-w-[400px] mx-auto md:max-w-full md:mx-0 gap-[20px]  md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-7 xl:grid-cols-5 xl:gap-[30px]'>
        {categoriesData &&
          categoriesData.map((i) => {
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
      </div> */
}
