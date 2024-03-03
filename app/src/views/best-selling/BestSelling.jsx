import { Typography } from '@material-tailwind/react'
import ProductCard from '../../components/product-card/ProductCard'
import { useEffect, useState } from 'react'
import { productData } from '../../static/data'

const BestSelling = () => {
  // const [searchParams] = useSearchParams()
  const [data, setData] = useState([])
  // const categoryData = searchParams.get('category')
  useEffect(() => {
    // if (categoryData === null) {
    const d = productData && productData.sort((a, b) => b.total_sell - a.total_sell)
    setData(d)
    // } else {
    //   const categoryName = categoryData.replace(/-/g, ' ')
    //   const d = productData && productData.filter((i) => i.category === categoryName)
    //   setData(d)
    // }
    window.scrollTo(0, 0)
    // return () => {
    //   second
    // }
  }, [])

  return (
    <>
      {data && data.length !== 0 ? (
        <div className='1000px:min-h-[calc(100vh-160px)]'>
          <div className='w-11/12 mx-auto '>
            <div className='sm:w-11/12 mx-auto md:w-full shadow-lg p-6 rounded-lg mb-12 bg-light-background-secondary dark:bg-dark-background-default '>
              <div className='grid grid-cols-1 max-w-[400px] mx-auto md:max-w-full md:mx-0 gap-[20px]  md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-7 xl:grid-cols-5 xl:gap-[30px]  '>
                {data.map((i, index) => (
                  <ProductCard product={i} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='w-11/12 mx-auto '>
          <div
            className='sm:w-11/12 flex justify-center items-center mx-auto md:w-full shadow-lg p-6 rounded-lg mb-12 bg-light-background-secondary 
          h-[calc(100vh-160px)] dark:bg-dark-background-default '
          >
            <Typography variant='h1' className='text-center'>
              No Products Found
            </Typography>
          </div>
        </div>
      )}
    </>
  )
}

export default BestSelling
