import { useNavigate } from 'react-router-dom'
import { Tabs, TabsHeader, Tab } from '@material-tailwind/react'
import { profileItems } from '../../static/data'
import { createElement } from 'react'
const ProfileSideBar = ({ closeDrawer, mobileNav }) => {
  const navigate = useNavigate()
  return (
    <div
      className={`   w-full justify-center  items-center bg-light-background-paper dark:bg-dark-background-paper rounded-xl py-8 `}
    >
      <Tabs
        orientation='vertical'
        value={
          location.pathname.split('/').length > 2 ? location.pathname.split('/')[2] : location.pathname.split('/')[1]
        }
      >
        <div className=' px-4  '>
          <TabsHeader
            indicatorProps={{
              className: ` bg-light-warning-light dark:bg-dark-warning-main  `
            }}
            className='  px-4 bg-opacity-100 flex z-0 w-full  bg-light-background-secondary dark:bg-dark-background-main mx-auto text-nowrap  '
          >
            {profileItems.map((navItem, index) => (
              <Tab
                key={index}
                className='font-normal py-4 my-1 font-Poppins  text-light-common-black dark:text-light-common-white hover:bg-light-action-hover dark:hover:bg-dark-action-hover duration-200 rounded-lg'
                onClick={() => {
                  navigate(`${navItem.url}`)
                  mobileNav && closeDrawer()
                }}
                value={navItem.value}
              >
                <div className='flex items-center gap-2'>
                  {createElement(navItem.icon, { className: 'w-8 h-8 shrink-0' })}
                  <p className={`${mobileNav ? 'block 1300px:hidden' : 'hidden  1300px:block'}`}>{navItem.title}</p>
                </div>
              </Tab>
            ))}
          </TabsHeader>
        </div>
      </Tabs>
    </div>
  )
}
export default ProfileSideBar
