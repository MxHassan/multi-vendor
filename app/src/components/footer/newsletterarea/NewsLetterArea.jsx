const NewsLetterArea = () => {
  return (
    <div className='bg-indigo-600  md:flex md:justify-between py-7 px-4 sm:px-12 md:items-center'>
      <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'>
        <span className='text-[#56d879]'>Subscribe</span> to get news events and
        offers!
      </h1>
      <div className='items-center max-md:flex max-md:flex-col'>
        <input
          className='text-gray-800 max-lg:mb-4 w-2/3 md:w-72 py-2.5 rounded px-2 focus:outline-none  md:mr-5 '
          type='text'
          required
          placeholder='Enter your email'
          name='newsletterEmail'
          id='newsletterEmail'
        />
        <button className='bg-[#56d879] hover:bg-teal-500 duration-300 px-5 py-2.5 rounded-md text-white md:w-auto w-2/3'>
          Submit
        </button>
      </div>
    </div>
  )
}

export default NewsLetterArea
