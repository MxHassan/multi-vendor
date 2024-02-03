import { Link } from 'react-router-dom'
import { RxAvatar } from 'react-icons/rx'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axiosApi from '../../api/axios'
import { ValidiateProps } from '../../utils/validation'
import { REGISTER_URL } from '../../constants'
// const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/
const SignUp = () => {
  // const navigate = useNavigate();
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [avatar, setAvatar] = useState(null)
  const [showPassword, setShowPassword] = useState(false)
  const [matchError, setMatchError] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    confirmPassword: false
  })
  const formInputs = [
    {
      id: 'email',
      name: 'email',
      type: 'email',
      label: 'Email Address',
      autoComplete: 'email',
      errormessage: 'It should be a valid email address !'
    },
    {
      id: 'password',
      name: 'password',
      type: showPassword ? 'text' : 'password',
      label: 'Password',
      autoComplete: 'new-password',
      errormessage:
        'Password should be 8-24 characters and include at least 1 uppercase letter , 1 lowercase letter , 1 number and 1 special character !'
    },
    {
      id: 'confirmPassword',
      name: 'confirmPassword',
      type: showPassword ? 'text' : 'password',
      label: 'Confirm Password',
      autoComplete: 'new-password',
      errormessage:
        'Password should be 8-24 characters and include at least 1 uppercase letter , 1 lowercase letter , 1 number and 1 special character !'
    }
  ]
  const updateError = (propName, newValue) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [propName]: newValue
    }))
  }
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
    let result = !ValidiateProps(e.target.name, e.target.value)
    updateError(e.target.name, result)
  }
  useEffect(() => {
    if (
      !values.email ||
      !values.password ||
      !values.confirmPassword ||
      !firstName ||
      !lastName ||
      !avatar ||
      errors.username ||
      errors.email ||
      errors.password ||
      errors.confirmPassword ||
      matchError
    ) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
    if (
      !errors.password &&
      !errors.confirmPassword &&
      values.password !== values.confirmPassword
    ) {
      setMatchError(true)
    } else {
      setMatchError(false)
    }
  }, [values, errors, matchError, firstName, lastName, avatar])

  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('firstName', firstName)
    formData.append('lastName', lastName)
    formData.append('email', values.email)
    formData.append('password', values.password)
    formData.append('confirmPassword', values.confirmPassword)
    formData.append('file', avatar)
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    try {
      const res = await axiosApi.post(REGISTER_URL, formData, config)
      if (res.data.success === true) {
        toast.success(res.data.message)
        setFirstName('')
        setLastName('')
        setValues({ email: '', password: '', confirmPassword: '' })
        setAvatar(null)
        setShowPassword(false)
        // setTimeout(() => {
        //   navigate('/');
        // }, 1000);
      }
    } catch (err) {
      if (!err?.response) {
        toast.error('No Server Response')
      } else {
        toast.error(`Registration Failed: ${err.response.data.message}`)
      }
    }
  }
  return (
    <div className='min-h-screen bg-gray-50 flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
          Sign Up a new account
        </h2>
      </div>
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white p-8 shadow sm:rounded-lg sm:px-10'>
          <form noValidate onSubmit={handleSubmit} className='space-y-6'>
            <div className='flex justify-between'>
              <div className='max-sm:mr-5 mr-3'>
                <label
                  htmlFor='firstName'
                  className='block text-sm font-medium text-gray-700'
                >
                  First Name
                </label>
                <div className='mt-1'>
                  <input
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                    type='text'
                    name='firstName'
                    id='firstName'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    autoComplete='name'
                    required
                  />
                </div>
              </div>
              <div className='max-sm:ml-5 ml-3'>
                <label
                  htmlFor='lastName'
                  className='block text-sm font-medium text-gray-700'
                >
                  Last Name
                </label>
                <div className='mt-1'>
                  <input
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                    type='text'
                    name='lastName'
                    id='lastName'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    autoComplete='name'
                    required
                  />
                </div>
              </div>
            </div>
            {formInputs.map((input) => (
              <div key={input.id}>
                <label
                  htmlFor={input.id}
                  className='block text-sm font-medium text-gray-700'
                >
                  {input.label}
                </label>
                <div className='mt-1'>
                  <input
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                    type={input.type}
                    name={input.name}
                    id={input.id}
                    value={values[input.name]}
                    onChange={onChange}
                    autoComplete={input.id}
                    required
                  />
                  {errors[input.name] && (
                    <p className='p-1 text-xs text-red-700 opacity-75'>
                      {input.errormessage}
                    </p>
                  )}
                </div>
              </div>
            ))}
            {matchError && (
              <p className='p-1 text-xs text-red-700 opacity-75'>
                Passwords Don&apos;t match
              </p>
            )}
            <div className='flex items-center'>
              <input
                className='mr-3 h-4 w-4'
                type='checkbox'
                id='showPassword'
                onClick={() => setShowPassword(!showPassword)}
              />
              <label htmlFor='showPassword'>Show Password</label>
            </div>
            <div>
              <div className='mt-2 flex items-center'>
                <span className='inline-block h-8 w-8 rounded-full overflow-hidden'>
                  {avatar ? (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt='profile picture'
                      className='h-full w-full object-cover rounded-full'
                    />
                  ) : (
                    <RxAvatar className='h-8 w-8' />
                  )}
                </span>
                <label
                  htmlFor='file-input'
                  className='ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50'
                >
                  <span>Upload File</span>
                  <input
                    type='file'
                    name='avatar'
                    id='file-input'
                    className='sr-only'
                    accept='image/*'
                    onChange={(e) => setAvatar(e.target.files[0])}
                  />
                </label>
              </div>
            </div>
            <div>
              <button
                type='submit'
                disabled={disabled}
                className=' disabled:bg-gray-400 relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 '
              >
                Sign Up
              </button>
            </div>
            <div>
              Already have an account?{' '}
              <Link
                to='/login'
                className='font-medium text-blue-600 hover:text-blue-500'
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
