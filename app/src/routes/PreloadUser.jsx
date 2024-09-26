import { store } from '../app/store'
import { userApiSlice } from '../features/user/userApiSlice'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
const PreloadUser = () => {
  useEffect(() => {
    console.log('subscribing')
    const user = store.dispatch(userApiSlice.endpoints.getUser.initiate())

    return () => {
      console.log('unsubscribing')
      user.reset()
    }
  }, [])

  return <Outlet />
}
export default PreloadUser
