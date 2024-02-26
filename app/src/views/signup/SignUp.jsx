import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import axiosApi from '../../api/axios'
import { ValidiateProps } from '../../utils/validation'
import { REGISTER_URL } from '../../constants'
import { Avatar, Checkbox, Input, Typography } from '@material-tailwind/react'
import { UserCircleIcon } from '@heroicons/react/24/outline'
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
      placeholder: 'name@example.com',
      errormessage: 'It should be a valid email address !'
    },
    {
      id: 'password',
      name: 'password',
      type: showPassword ? 'text' : 'password',
      label: 'Password',
      autoComplete: 'new-password',
      placeholder: '********',
      errormessage:
        'Password should be 8-24 characters and include at least 1 uppercase letter , 1 lowercase letter , 1 number and 1 special character !'
    },
    {
      id: 'confirmPassword',
      name: 'confirmPassword',
      type: showPassword ? 'text' : 'password',
      label: 'Confirm Password',
      autoComplete: 'new-password',
      placeholder: '********',
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
    if (values.email === '' && errors.email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: false
      }))
    }
    if (values.password === '' && errors.password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: false
      }))
    }
    if (values.confirmPassword === '' && errors.confirmPassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: false
      }))
    }
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
      values.password !== values.confirmPassword &&
      !(values.password === '' || values.confirmPassword === '')
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
    <div className='min-w-96 flex-col justify-center py-12 sm:px-6 lg:px-8 bg-light-background-main dark:bg-dark-background-main'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <h2 className='mt-6 text-center text-3xl font-extrabold '>Sign Up a new account</h2>
      </div>
      <div className='mt-8 sm:mx-auto max-sm:w-full sm:max-w-lg bg-light-background-secondary dark:bg-dark-background-secondary rounded-lg'>
        <div className=' p-8 shadow sm:rounded-lg sm:px-10'>
          <form noValidate onSubmit={handleSubmit} className='space-y-6'>
            <div className='flex justify-between'>
              <div className=' mr-2'>
                <label htmlFor='firstName' className='block text-sm font-medium '>
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
              <div className='ml-2'>
                <label htmlFor='lastName' className='block text-sm font-medium '>
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
                <label htmlFor={input.id} className='block text-sm font-medium '>
                  {input.label}
                </label>
                <div className='mt-1'>
                  <Input
                    color='blue'
                    placeholder={input.placeholder}
                    size='lg'
                    type={input.type}
                    name={input.name}
                    id={input.id}
                    value={values[input.name]}
                    onChange={onChange}
                    autoComplete={input.id}
                    error={errors[input.name]}
                    className='bg-light-background-default '
                  />
                  {errors[input.name] && <p className='p-1 text-xs text-red-700 opacity-75'>{input.errormessage}</p>}
                </div>
              </div>
            ))}
            {matchError && <p className='p-1 text-xs text-red-700 opacity-75'>Passwords Don&apos;t match</p>}
            <Checkbox
              color='indigo'
              onClick={() => setShowPassword(!showPassword)}
              id='showPassword'
              className='bg-light-background-default'
              label={
                <Typography className='flex items-center text-light-common-black dark:text-dark-common-white font-normal'>
                  Show Password
                </Typography>
              }
              containerProps={{ className: '-ml-2.5' }}
            />
            <div>
              <div className='mt-2 flex items-center'>
                <div className='inline-block h-10 w-10  overflow-hidden'>
                  {avatar ? (
                    <Avatar className='w-full h-full' src={URL.createObjectURL(avatar)} />
                  ) : (
                    <UserCircleIcon className='w-fit h-fit' />
                  )}
                </div>
                <label
                  htmlFor='file-input'
                  className='duration-100 ml-4 bg-light-background-default dark:bg-dark-background-main cursor-pointer flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium '
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
                className='duration-300 disabled:hover:cursor-not-allowed disabled:bg-gray-400 relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-[4px]  bg-light-primary-main dark:bg-dark-primary-dark hover:bg-light-primary-light hover:hover:bg-light-primary-dark '
              >
                Sign Up
              </button>
            </div>
            <div>
              Already have an account?{' '}
              <Link to='/login' className='duration-100 font-medium text-blue-600 hover:text-blue-500'>
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
