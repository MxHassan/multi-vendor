import { useEffect, useState } from 'react'
import { productData } from '../../../static/data'
import styles from '../../../styles/styles'
import { Typography } from '@material-tailwind/react'
import ProductCard from '../../product-card/ProductCard'

const BestDeals = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const d = productData && productData.sort((a, b) => b.total_sell - a.total_sell)
    const firstFive = d.slice(0, 5)
    setData(firstFive)
  }, [])
  return (
    <div className='w-11/12 mx-auto'>
      <div className={`${styles.heading}`}>
        <Typography variant='h1'>Best Deals</Typography>
      </div>
      <div className='grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg:gap-5 xl:grid-cols-5 xl:gap-[30px] '>
        {data && data.map((product, index) => <ProductCard product={product} key={index} />)}
      </div>
    </div>
  )
}
export default BestDeals
