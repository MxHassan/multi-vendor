import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/header/Header'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setNavLinkValue } from '../features/nav/navSlice'

const MainLayout = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  let value = location.pathname.split('/')
  useEffect(() => {
    if (value.length === 2 && value[1] === '') {
      dispatch(setNavLinkValue('home'))
    } else {
      dispatch(setNavLinkValue(value[1]))
    }
  }, [dispatch, value])
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default MainLayout
