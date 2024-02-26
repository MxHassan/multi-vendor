// import { Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import styles from '../../styles/styles'
import { ArrowRightStartOnRectangleIcon, UserPlusIcon } from '@heroicons/react/24/outline'

const Public = () => {
  return (
    <section className='items-center bg-light-background-secondary dark:bg-dark-background-secondary p-5 rounded-3xl  h-[80vh] justify-around flex flex-col max-w-4xl mx-auto'>
      <header>
        <h1 className='text-4xl'>
          Welcome to <span>xMo E-Commerce</span>
        </h1>
      </header>
      <main className='justify-around flex flex-col max-w-4xl mx-auto'>
        <p className='text-3xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita voluptates ex nisi recusandae
          quaerat quos sit, cumque in dolores corporis quibusdam reiciendis autem ipsum dolor, eius sequi consectetur
          soluta!
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
            <button
              color='blue'
              className={`${styles.button} bg-light-primary-main dark:bg-dark-primary-dark ml-2  } `}
            >
              <ArrowRightStartOnRectangleIcon width={20} className='mr-2 -ml-1' />
              Login
            </button>
          </Link>
          <Link to='/signup'>
            <button className={`${styles.button} bg-light-primary-main dark:bg-dark-primary-dark ml-2  } `}>
              Sign Up
              <UserPlusIcon width={20} className='ml-2 -mr-1' />
            </button>
          </Link>
        </div>
      </footer>
    </section>
  )
}

export default Public
