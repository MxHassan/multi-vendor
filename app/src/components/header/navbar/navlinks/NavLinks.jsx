import { Tab, Tabs, TabsHeader } from '@material-tailwind/react'
// import { navItems } from '../../../../static/data'
import { useLocation, useNavigate } from 'react-router-dom'
import { navItems } from '../../../../static/data'

const NavLinks = () => {
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <Tabs value={location.pathname.split('/')[1] || 'home'}>
      <TabsHeader className='hidden sm:flex sm:w-[400px] 800px:w-[500px] 1100px:w-[600px] bg-opacity-100 bg-gray-300  text-nowrap '>
        {navItems.map((navItem, index) => (
          <Tab
            key={index}
            className='font-normal font-Poppins'
            onClick={() => {
              navigate(`${navItem.url}`)
            }}
            value={navItem.value}
          >
            {navItem.title}
          </Tab>
        ))}
      </TabsHeader>
    </Tabs>
  )
}

export default NavLinks
