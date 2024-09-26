import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { ValidiateProps } from '../../utils/validation'
import { Avatar, Button, Checkbox, Input, Typography } from '@material-tailwind/react'
import { CloudArrowUpIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { Backdrop, Button as MuiButton } from '@mui/material'
import { useSignUpMutation } from '../../features/auth/authApiSlice'
import Loader from '../../components/loader/Loader'
const SignUp = () => {
  const navigate = useNavigate()
  const [signup, { isLoading, isSuccess }] = useSignUpMutation()
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

  useEffect(() => {
    if (isSuccess) {
      navigate('/activation/prompt')
    }
  }, [isSuccess, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    let bodyFormData = new FormData()
    bodyFormData.append('firstName', firstName)
    bodyFormData.append('lastName', lastName)
    bodyFormData.append('email', values.email)
    bodyFormData.append('password', values.password)
    bodyFormData.append('confirmPassword', values.confirmPassword)
    bodyFormData.append('file', avatar)
    try {
      const res = await signup(bodyFormData).unwrap()
      if (res?.success) {
        toast.success(res.message)
        setFirstName('')
        setLastName('')
        setValues({ email: '', password: '', confirmPassword: '' })
        setAvatar(null)
        setShowPassword(false)
        // setTimeout(() => {
        //   navigate('/login')
        // }, 7 * 1000)
      }
    } catch (err) {
      console.log(err)
      if (err?.status === 'FETCH_ERROR') {
        toast.error('No Server Response')
      } else {
        toast.error(`Registration Failed: ${err.data.message}`)
      }
    }
  }
  return (
    <>
      <div className='min-w-96 flex-col justify-center py-12 sm:px-6 lg:px-8 duration-300 '>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <h2 className='mt-6 text-center text-3xl font-extrabold '>Sign Up a new account</h2>
        </div>
        <div className='mt-8 sm:mx-auto max-sm:w-full sm:max-w-lg bg-light-background-secondary dark:bg-dark-background-secondary rounded-lg'>
          <div className=' p-8 shadow sm:rounded-lg sm:px-10  '>
            <form noValidate onSubmit={handleSubmit} className='space-y-6'>
              <div className='flex justify-between '>
                <div className=' mr-2'>
                  <label htmlFor='firstName' className='block text-sm font-medium '>
                    First Name
                  </label>
                  <div className='mt-1'>
                    <Input
                      placeholder='John'
                      size='lg'
                      type='text'
                      name='firstName'
                      id='firstName'
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      autoComplete='name'
                      className=' !border-light-text-secondary duration-0 text-inherit focus:!border-light-text-primary dark:!border-dark-text-secondary dark:focus:!border-dark-text-primary '
                      labelProps={{
                        className: 'hidden'
                      }}
                      containerProps={{
                        className: 'bg-light-background-main animate-fade-in dark:bg-dark-background-main rounded-lg'
                      }}
                    />
                  </div>
                </div>
                <div className='ml-2'>
                  <label htmlFor='lastName' className='block text-sm font-medium '>
                    Last Name
                  </label>
                  <div className='mt-1'>
                    <Input
                      placeholder='Deo'
                      size='lg'
                      type='text'
                      name='lastName'
                      id='lastName'
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      autoComplete='name'
                      required
                      className=' !border-light-text-secondary text-inherit duration-0 focus:!border-light-text-primary dark:!border-dark-text-secondary dark:focus:!border-dark-text-primary '
                      labelProps={{
                        className: 'hidden'
                      }}
                      containerProps={{
                        className: 'bg-light-background-main  dark:bg-dark-background-main rounded-lg'
                      }}
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
                      // color='blue'
                      placeholder={input.placeholder}
                      size='lg'
                      type={input.type}
                      name={input.name}
                      id={input.id}
                      value={values[input.name]}
                      onChange={onChange}
                      autoComplete={input.id}
                      error={errors[input.name]}
                      className=' !border-light-text-secondary text-inherit duration-0 focus:!border-light-text-primary dark:!border-dark-text-secondary dark:focus:!border-dark-text-primary '
                      labelProps={{
                        className: 'hidden'
                      }}
                      containerProps={{
                        className: 'bg-light-background-main  dark:bg-dark-background-main rounded-lg'
                      }}
                    />
                    {errors[input.name] && (
                      <p className='p-1 animate-fade-in mt-1 text-xs text-red-700 opacity-75'>{input.errormessage}</p>
                    )}
                  </div>
                </div>
              ))}
              {matchError && (
                <p className='p-1 text-xs animate-fade-in text-red-700 opacity-75'>Passwords Don&apos;t match</p>
              )}
              <Checkbox
                color='indigo'
                value={showPassword}
                onClick={() => setShowPassword(!showPassword)}
                id='showPassword'
                className='bg-light-background-main'
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
                      <UserCircleIcon className='w-fit h-fit text-inherit' />
                    )}
                  </div>

                  <MuiButton
                    sx={{ textTransform: 'none', borderRadius: 5, ml: 1.5 }}
                    startIcon={<CloudArrowUpIcon width={30} />}
                    tabIndex={-1}
                    variant='contained'
                    color='primary'
                    component='label'
                  >
                    Upload File
                    <input
                      type='file'
                      name='avatar'
                      id='file-input'
                      className='sr-only'
                      accept='image/*'
                      onChange={(e) => setAvatar(e.target.files[0])}
                    />
                  </MuiButton>
                </div>
              </div>
              <div>
                <Button
                  type='submit'
                  disabled={disabled}
                  color='indigo'
                  variant='gradient'
                  fullWidth
                  className='capitalize duration-200 text-base'
                >
                  Sign Up
                </Button>
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
      {isLoading && (
        <Backdrop open={true}>
          <Loader />
        </Backdrop>
      )}
    </>
  )
}

export default SignUp
