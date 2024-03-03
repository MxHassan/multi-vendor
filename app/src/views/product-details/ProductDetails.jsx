import ProductDetailsCard from '../../components/product-details-card/ProductDetailsCard'

const ProductDetails = () => {
  window.scrollTo(0, 0)
  return (
    <div className='block pt-[90px]  800px:flex 800px:p-8 bg-light-background-secondary dark:bg-dark-background-secondary'>
      <ProductDetailsCard />
    </div>
  )
}
export default ProductDetails
