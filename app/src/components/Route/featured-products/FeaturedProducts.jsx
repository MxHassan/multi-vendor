import { productData } from '../../../static/data'
import styles from '../../../styles/styles'
import { Typography } from '@material-tailwind/react'
import ProductCard from '../../product-card/ProductCard'

const FeaturedProducts = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <div className={`${styles.heading}`}>
        <Typography variant='h1'>Featured Products</Typography>
      </div>
      <div
        className='sm:w-11/12 mx-auto md:w-full shadow-lg p-6 rounded-lg mb-12 bg-light-background-secondary dark:bg-dark-background-default '
        id='best-deals'
      >
        <div className='grid grid-cols-1 max-w-[400px] mx-auto md:max-w-full md:mx-0 gap-[20px]  md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-7 xl:grid-cols-5 xl:gap-[30px]  '>
          {productData && productData.map((i, index) => <ProductCard product={i} key={index} />)}
        </div>
      </div>
    </div>
  )
}
export default FeaturedProducts
