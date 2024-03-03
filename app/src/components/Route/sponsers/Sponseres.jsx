import { sponsersData } from '../../../static/data'

const Sponseres = () => {
  return (
    <div className='w-11/12 mx-auto hidden sm:block '>
      {/* <div className={`${styles.heading}`}>
        <Typography variant='h1'>Best Deals</Typography>
      </div> */}
      <div
        className='sm:w-11/12 mx-auto md:w-full shadow-lg px-5 py-10 rounded-lg mb-12 bg-light-background-secondary dark:bg-dark-background-default '
        id='best-deals'
      >
        <div className='grid grid-cols-1 max-w-[400px] mx-auto md:max-w-full md:mx-0 gap-[20px]  md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-7 xl:grid-cols-5 xl:gap-[30px]  '>
          {sponsersData &&
            sponsersData.map((sponser, index) => (
              <div
                key={index}
                className='flex justify-center rounded-xl bg-light-background-main dark:bg-light-background-third'
              >
                <img src={sponser.imgUrl} alt={`${sponser.name} Logo`} className='w-[150px] h-20 object-contain' />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
export default Sponseres
