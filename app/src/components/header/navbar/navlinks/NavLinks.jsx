import { Tab, Tabs, TabsHeader } from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom'
import { navItems } from '../../../../static/data'
const NavLinks = () => {
  const navigate = useNavigate()
  return (
    <Tabs value={location.pathname.split('/')[1] === '' ? 'home' : location.pathname.split('/')[1]}>
      <TabsHeader
        indicatorProps={{
          className: ` bg-light-background-paper dark:bg-dark-action-selected hover:bg-light-action-hover `
        }}
        className='hidden  sm:flex z-10 sm:w-[400px] 800px:w-[500px]  1100px:w-[600px]  text-light-text-primary dark:text-dark-text-primary bg-light-background-secondary dark:bg-dark-background-main  text-nowrap '
      >
        {navItems.map((navItem, index) => (
          <Tab
            key={index}
            className='font-normal font-Poppins hover:bg-light-action-hover dark:hover:bg-dark-action-hover duration-200 rounded-lg'
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
