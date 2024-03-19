import { useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { useGetCategoriesQuery } from '../../../features/categories/categoriesApiSlice'
import { categoriesData } from '../../../static/data'

const Categories = ({ handleDropMenu }) => {
  // const { data: categoriesData, isLoading, error, isError, isSuccess } = useGetCategoriesQuery('getCategories')

  let content

  // if (isLoading) {
  //   content = (
  //     <div className='p-2 mt-1 h-[40vh] flex justify-center items-center'>
  //       <Loader />
  //     </div>
  //   )
  // }

  // if (isError) {
  //   content = (
  //     <div className='text-center flex items-center h-[40vh] p-2 mt-1  text-4xl text-red-500'>
  //       Something went wrong {error?.message}
  //     </div>
  //   )
  // }

  const categories = categoriesData.map((category, index) => {
    const categoryUrl = category.title.replace(/\s+/g, '-')
    return (
      <Link onClick={handleDropMenu} key={index} to={`/products?category=${categoryUrl}`}>
        <div
          className='p-0 flex items-center gap-3 mt-1 rounded-lg bg-light-background-third dark:bg-dark-background-third hover:scale-[1.05] duration-300'
          id={category.id}
        >
          <img src={category.image_Url} alt='' className='w-16 h-full  shrink-0 object-cover rounded-lg' />
          <p className='font-Poppins dark:text-neutral-100 text-balance'>{category.title}</p>
        </div>
      </Link>
    )
  })
  content = (
    <div className='p-2 mt-1 overflow-y-scroll overflow-x-hidden small-scrollbar max-h-[40vh]'>{categories}</div>
  )

  return (
    <div className='pr-1 focus:outline-none overflow-hidden bg-light-background-secondary dark:bg-dark-background-secondary rounded-b-lg z-10 w-full absolute left-0 top-14  animate-fade-in '>
      {content}
    </div>
  )
}

export default Categories
