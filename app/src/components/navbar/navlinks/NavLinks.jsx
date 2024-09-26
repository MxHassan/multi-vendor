import { Tab, Tabs, TabsHeader } from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom'
import { navItems } from '../../../static/data'
// import { useSelector } from 'react-redux'
// import { selectNavLinkValue } from '../../../features/nav/navSlice'
const NavLinks = ({ mobileNav, closeDrawer }) => {
  const navigate = useNavigate()
  // const tabValue = useSelector(selectNavLinkValue)
  return (
    <Tabs
      orientation={mobileNav ? 'vertical' : 'horizontal'}
      value={location.pathname.split('/')[1] === '' ? 'home' : location.pathname.split('/')[1]}
    >
      <div className=' px-4   '>
        <TabsHeader
          indicatorProps={{
            className: `bg-light-primary-light ${mobileNav ? ' dark:bg-dark-primary-dark' : ' dark:bg-dark-info-main'}`
          }}
          className={` bg-opacity-100  ${
            mobileNav ? 'w-full' : 'hidden sm:flex sm:w-[400px] 800px:w-[500px]  1100px:w-[600px]'
          } bg-light-background-secondary dark:bg-dark-background-main  text-nowrap `}
        >
          {navItems.map((navItem, index) => (
            <Tab
              key={index}
              className={` ${
                mobileNav && 'text-xl py-2 my-1 '
              } font-normal font-Poppins text-light-common-black dark:text-light-common-white hover:bg-light-action-hover dark:hover:bg-dark-action-hover duration-200 rounded-lg`}
              onClick={() => {
                navigate(`${navItem.url}`)
                mobileNav && closeDrawer()
              }}
              value={navItem.value}
            >
              {navItem.title}
            </Tab>
          ))}
        </TabsHeader>
      </div>
    </Tabs>
  )
}

export default NavLinks
