import { Button, Input } from '@material-tailwind/react'
import { useState } from 'react'

const NewsLetterArea = () => {
  const [email, setEmail] = useState('')
  return (
    <div className='bg-indigo-600 text-light-text-primary dark:text-dark-text-primary md:flex  py-7 px-4 sm:px-12 md:items-center '>
      <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'>
        <span className='text-[#56d879]'>Subscribe</span> to get news events and offers!
      </h1>
      <div className='items-center justify-center block md:flex md:flex-col md:w-3/5 lg:flex-row md:gap-5 gap-2 '>
        <Input
          placeholder='Email Address'
          size='lg'
          type='email'
          name='email'
          id='newsLetterEmail'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete='email'
          required
          className=' !border-light-text-secondary  py-2.5 px-2  text-inherit  focus:!border-light-text-primary dark:!border-dark-text-secondary dark:focus:!border-dark-text-primary '
          labelProps={{
            className: 'hidden'
          }}
          containerProps={{
            className:
              'bg-light-background-main w-full md:w-9/12 xl:w-1/2 mb-4 md:mb-0  dark:bg-dark-background-main rounded-lg'
          }}
        />
        <Button color='green' className='capitalize  text-base w-full md:w-1/3 lg:w-1/5 '>
          Submit
        </Button>
      </div>
    </div>
  )
}

export default NewsLetterArea
