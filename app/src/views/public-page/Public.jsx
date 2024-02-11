import { Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

const Public = () => {
  return (
    <section className='items-center h-[80vh] justify-around flex flex-col max-w-4xl mx-auto'>
      <header>
        <h1 className='text-4xl'>
          Welcome to <span>xMo E-Commerce</span>
        </h1>
      </header>
      <main className='justify-around flex flex-col max-w-4xl mx-auto'>
        <p className='text-3xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          expedita voluptates ex nisi recusandae quaerat quos sit, cumque in
          dolores corporis quibusdam reiciendis autem ipsum dolor, eius sequi
          consectetur soluta!
        </p>
        <address className='mt-5'>
          xMo E-Commerce
          <br />
          777 Foo Drive
          <br />
          Foo City, EG 12345
          <br />
          <a href='tel:+201001950121'>(+20) 0100-195-0121</a>
        </address>
        <br />
        <p className='text-lg'>Owner: Mohamed Hassan</p>
      </main>
      <footer>
        <div className='flex min-w-96 justify-around my-3'>
          <Link to='/login'>
            <Button
              color='blue'
              className='capitalize py-2 font-medium w-40 text-base  '
            >
              Login
            </Button>
          </Link>
          <Link to='/signup'>
            <Button
              className='capitalize py-2 font-medium w-40 text-base  '
              color='blue'
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </footer>
    </section>
  )
}

export default Public
