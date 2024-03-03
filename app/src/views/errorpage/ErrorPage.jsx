import { useRouteError, useNavigate } from 'react-router-dom'
import styles from '../../styles/styles'
import SearchBar from '../../components/searchbar/SearchBar'
import { HomeIcon } from '@heroicons/react/24/outline'

export default function ErrorPage() {
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  window.scrollTo(0, 0)
  const navigate = useNavigate()
  const error = useRouteError()
  console.error(error)
  return (
    <div className='flex flex-col text-center items-center h-screen  '>
      <SearchBar />
      <div className='max-w-4xl h-full flex flex-col justify-center   mx-auto p-4 bg-light-background-secondary dark:bg-dark-background-secondary rounded-3xl'>
        {error.status === 404 ? (
          <img className='mx-auto object-cover min-h-96 max-w-[70%]' src='/src/assets/404-tranc.png' alt='Error 404' />
        ) : (
          <p color='error'>{error.status}</p>
        )}
        <div className='flex items-center justify-center flex-col'>
          <p className='text-3xl my-1'>Sorry, an unexpected error has occurred.</p>
          <p className='text-2xl my-1 text-red-500'>
            {error.data} is &quot;{error.statusText || error.message}&quot;
          </p>
          <button
            // className="bg-purple-500 hover:bg-purple-700 dark:text-white italic rounded-md mt-1 px-4 pt-1 pb-2  text-xl"
            className={`${styles.button} bg-light-secondary-main dark:bg-dark-secondary-dark mt-2 py-3 `}
            onClick={() => navigate('/')}
          >
            <HomeIcon width={25} className='-ml-1 mr-1' />
            Back Home
          </button>
        </div>
      </div>
    </div>
  )
}
