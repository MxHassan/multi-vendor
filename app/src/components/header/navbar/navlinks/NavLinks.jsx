import { Tab, Tabs, TabsHeader } from '@material-tailwind/react'
// import { navItems } from '../../../../static/data'
import { useLocation, useNavigate } from 'react-router-dom'

const NavLinks = () => {
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <Tabs
      value={location.pathname.split('/')[1] || 'home'}
    >
      <TabsHeader
        indicatorProps={{ className: 'bg-opacity-30 bg-white' }}
        className='hidden sm:flex sm:w-[400px] 800px:w-[500px] 1100px:w-[600px] bg-opacity-30 text-nowrap '
      >
        <Tab
          className='text-white'
          onClick={() => {
            navigate('/')
          }}
          value='home'
        >
          Home
        </Tab>
        <Tab
          className='text-white'
          onClick={() => {
            navigate('/login')
          }}
          value='login'
        >
          Login
        </Tab>
        <Tab
          className='text-white'
          onClick={() => {
            navigate('/signup')
          }}
          value='signup'
        >
          Sign Up
        </Tab>
        <Tab
          className='text-white'
          onClick={() => {
            navigate('/welcome')
          }}
          value='welcome'
        >
          Welcome
        </Tab>
        <Tab
          className='text-white'
          onClick={() => {
            navigate('/activation')
          }}
          value='activation'
        >
          Activation
        </Tab>
      </TabsHeader>
    </Tabs>
  )
}

export default NavLinks
