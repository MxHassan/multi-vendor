import { useEffect, useState } from 'react'
// import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import styles from '../../styles/styles'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../../features/auth/authSlice'
import { useLoginMutation } from '../../features/auth/authApiSlice'
import { Dialog, Spinner } from '@material-tailwind/react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { Backdrop, CircularProgress } from '@mui/material'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [login, { isLoading }] = useLoginMutation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState()
  const [disabled, setDisabled] = useState(true)
  useEffect(() => {
    if (!email || !password) setDisabled(true)
    else setDisabled(false)
  }, [email, password])
  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)
    const userCredentials = {
      email: formData.get('email'),
      password: formData.get('password')
    }
    try {
      const res = await login(userCredentials).unwrap()
      const { accessToken } = res
      dispatch(setCredentials({ accessToken }))
      setEmail('')
      setPassword('')
      setVisible(false)
      toast.success(res.message)
      navigate('/')
      // console.log(userRes.data.user)
    } catch (err) {
      if (!err?.status) toast.error('No Server Response')
      else if (err.status === 400) toast.error('Missing Username Or Password')
      else if (err.status === 401) toast.error('Unauthorized')
      else toast.error('No Server Response')
      // else toast.error(err.data.message)
    }
  }
  if (isLoading) {
    return (
      // <Dialog open={isLoading} className='bg-transparent  flex justify-center shadow-none'>
      //   <Spinner color='blue' className='h-14 w-14 text-light-grey-900/20 dark:text-light-grey-400' />
      // </Dialog>
      <Backdrop open={isLoading}>
        {/* <CircularProgress color='primary' /> */}
        <Spinner
          color='blue'
          className='h-14 w-14 animate-fade-in text-light-grey-900/50 dark:text-light-grey-400/50'
        />
      </Backdrop>
    )
  }
  return (
    <div className='flex-col  justify-center py-12 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <h2 className='mt-6 text-center text-3xl font-extrabold '>Login with your account</h2>
      </div>
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-light-background-secondary dark:bg-dark-background-secondary py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <form noValidate onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label htmlFor='email' className='block text-sm font-medium '>
                Email address
              </label>
              <div className='mt-1'>
                <input
                  className='appearance-none dark:text-light-text-primary block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                  type='email'
                  name='email'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete='email'
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor='password' className='block text-sm font-medium '>
                Password
              </label>
              <div className='mt-1 relative'>
                <input
                  className='appearance-none block w-full px-3 py-2 border dark:text-light-text-primary border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                  type={visible ? 'text' : 'password'}
                  name='password'
                  id='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete='current-password'
                  required
                />
                {visible ? (
                  <EyeIcon
                    className='absolute right-2 top-2 cursor-pointer dark:text-light-text-primary animate-fade-in duration-[50ms]'
                    width={24}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <EyeSlashIcon
                    className='absolute right-2 top-2 cursor-pointer dark:text-light-text-primary animate-fade-in duration-75'
                    width={24}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>
            <div className={`${styles.noramlFlex} justify-between`}>
              <div className={`${styles.noramlFlex}`}>
                <input
                  type='checkbox'
                  name='remember-me'
                  id='remember-me'
                  className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
                />
                <label htmlFor='remember-me' className='ml-2 block text-sm '>
                  Remember Me
                </label>
              </div>
              <div className='text-sm'>
                <Link to='/forget-password' className='duration-100 font-medium text-blue-700 hover:text-blue-500'>
                  Forget your password?
                </Link>
              </div>
            </div>
            <div>
              <button
                type='submit'
                disabled={disabled}
                className='duration-300 disabled:hover:cursor-not-allowed disabled:bg-gray-400 relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-[4px] text-white bg-blue-800 hover:bg-blue-900 '
              >
                Login
              </button>
            </div>
            <div>
              Not have any account?{' '}
              <Link to='/signup' className='duration-100 font-medium text-blue-700 hover:text-blue-500'>
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
