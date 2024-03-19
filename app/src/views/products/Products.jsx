import { useSearchParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/ProductCard'
import { Typography } from '@material-tailwind/react'
import { useGetProductsQuery } from '../../features/products/productsApiSlice'
import Loader from '../../components/loader/Loader'

const Products = () => {
  const [searchParams] = useSearchParams()
  const categoryData = searchParams.get('category')
  const categoryName = categoryData?.replace(/-/g, ' ')

  window.scrollTo(0, 0)
  const { data: products, isSuccess, isLoading, isError, error } = useGetProductsQuery()

  let content

  if (isLoading) {
    content = (
      <div className='flex justify-center items-center h-[calc(100vh-160px)]'>
        <Loader />
      </div>
    )
  }

  if (isError) {
    content = (
      <div className='flex justify-center items-center h-[calc(100vh-160px)]'>
        <Typography variant='h2' color='red'>
          Something went wrong {error?.data?.message}
        </Typography>
      </div>
    )
  }

  if (isSuccess) {
    const { ids, entities } = products
    const data = ids?.map((id) => entities[id])

    let productsData

    if (categoryData) {
      productsData = data.filter((i) => i.category === categoryName)
    } else {
      productsData = data.sort((a, b) => a.total_sell - b.total_sell)
    }
    if (productsData?.length) {
      content = (
        <div className='grid grid-cols-1 max-w-[400px] mx-auto md:max-w-full md:mx-0 gap-[20px]  md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-7 xl:grid-cols-5 xl:gap-[30px]  '>
          {productsData.map((product, index) => (
            <ProductCard productId={product.id} key={index} />
          ))}
        </div>
      )
    } else
      content = (
        <div className='flex  mt-60 justify-center'>
          <Typography variant='h1' className='text-center'>
            No Products Found
          </Typography>
        </div>
      )
  }

  return (
    <div className='w-11/12 mx-auto '>
      <div className='sm:w-11/12 mx-auto  1000px:min-h-[calc(100vh-160px)] md:w-full shadow-lg p-6 rounded-lg mb-12 bg-light-background-secondary dark:bg-dark-background-default '>
        {content}
      </div>
    </div>
  )
}
export default Products
