import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
// import { useEffect } from 'react'

import { selectNavActive } from '../features/nav/navSlice'
import { useSelector } from 'react-redux'
 
const MainLayout = () => {
  const navActive = useSelector(selectNavActive)
  return (
    <>
      <Navbar />
      <div className={`${navActive && '800px:mt-[70px] '} `}>
        <Outlet />
      </div>
    </>
  )
}

export default MainLayout
