import { Typography } from '@material-tailwind/react'
import { useGetProductsQuery } from '../../features/products/productsApiSlice'
import Loader from '../loader/Loader'
import styles from '../../styles/styles'
import ProductCard from '../product-card/ProductCard'

const SuggestedProducts = ({ productCategory, productId }) => {
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
    if (!ids?.length) {
      return (content = (
        <div className='flex h-[calc(100vh-160px)] items-center justify-center'>
          <Typography variant='h1' className='text-center'>
            No Products Found
          </Typography>
        </div>
      ))
    }
    const data = ids?.length && ids.map((id) => entities[id])
    let productsData = data.filter((product) => product.category === productCategory && product.id !== productId)
    if (!productsData?.length) {
      console.log('no related p')
      content = (
        <div className='flex h-[30vh] items-center justify-center'>
          <Typography variant='h1' className='text-center'>
            No Related Products Found
          </Typography>
        </div>
      )
    } else {
      content = (
        <div className='grid grid-cols-1 max-w-[400px] 800px:max-w-fit mx-auto  800px:mx-0 gap-[20px]  800px:grid-cols-2 800px:gap-[25px] 1100px:grid-cols-3 1100px:gap-7   '>
          {productsData.map((product, index) => (
            <ProductCard productId={product.id} key={index} />
          ))}
        </div>
      )
    }
  }

  return (
    <div className={`${styles.section} p-4`}>
      <Typography variant='h2' className='border-b border-gray-900 dark:border-gray-100 mb-5'>
        Related Products
      </Typography>
      <div className='relative sm:w-11/12 mx-auto md:w-full shadow-lg p-6 rounded-lg  bg-light-background-main dark:bg-dark-background-main '>
        {content}
      </div>
    </div>
  )
}
export default SuggestedProducts
