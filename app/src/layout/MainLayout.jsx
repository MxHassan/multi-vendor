import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { selectNavActive } from '../features/nav/navSlice'
import { useSelector } from 'react-redux'
import { useGetUserMutation } from '../features/user/userApiSlice'
import { toast } from 'react-toastify'

const MainLayout = () => {
  const navActive = useSelector(selectNavActive)
  // const location = useLocation()
  const dispatch = useDispatch()
  // let value = location.pathname.split('/')
  const [getUser, { data: user, isLoading, isSuccess, isError, error }] = useGetUserMutation()
  useEffect(() => {
    getUser()
  }, [getUser, dispatch])
  isError && toast.error(error.data.message)
  // useEffect(() => {
  //   if (value.length === 2 && value[1] === '') {
  //     dispatch(setNavLinkValue('home'))
  //   } else {
  //     dispatch(setNavLinkValue(value[1]))
  //   }
  // }, [dispatch, value])
  return (
    <>
      <Navbar />
      <div className={`${navActive && 'mt-[70px] '} `}>
        <Outlet />
      </div>
    </>
  )
}

export default MainLayout
