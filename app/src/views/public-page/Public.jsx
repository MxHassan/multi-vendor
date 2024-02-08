import { Link } from 'react-router-dom'

const Public = () => {
  return (
    <section className='items-center justify-around flex flex-col max-w-4xl mx-auto'>
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
        <div className='flex min-w-96 justify-around'>
          <Link to='/login'>
            <button className='relative w-40 h-[40px] flex justify-center my-2 py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 '>
              Login
            </button>
          </Link>
          <Link to='/sign-up'>
            <button className='relative w-40 h-[40px] flex justify-center my-2 py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 '>
              Sign Up
            </button>
          </Link>
        </div>
      </footer>
    </section>
  )
}

export default Public
