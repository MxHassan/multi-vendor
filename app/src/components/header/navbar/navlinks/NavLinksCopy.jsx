import PropTypes from 'prop-types'
import { Box, Tabs, Tab } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { navItems } from '../../../../static/data'

function samePageLinkNavigation(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false
  }
  return true
}

function LinkTab(props) {
  const navigate = useNavigate()
  return (
    <Tab
      component='a'
      onClick={(event) => {
        // Routing libraries handle this, you can remove the onClick handle when using them.
        if (samePageLinkNavigation(event)) {
          event.preventDefault()
        }
        navigate(props.href)
      }}
      aria-current={props.selected && 'page'}
      {...props}
    />
  )
}

LinkTab.propTypes = {
  selected: PropTypes.bool
}

const NavLinksCopy = () => {
  const [value, setValue] = useState(0)
  useEffect(() => {
    const pageUrl = location.pathname.split('/')[1]
    pageUrl === ''
      ? setValue(0)
      : pageUrl === 'best-selling'
      ? setValue(1)
      : pageUrl === 'products'
      ? setValue(2)
      : pageUrl === 'events'
      ? setValue(3)
      : pageUrl === 'faq'
      ? setValue(4)
      : null
    // switch (pageUrl) {
    //   case '':
    //     setValue(0)
    //     break
    //   case 'best-selling':
    //     setValue(1)
    //     break
    //   case 'products':
    //     setValue(2)
    //     break
    //   case 'events':
    //     setValue(3)
    //     break
    //   case 'faq':
    //     setValue(4)
    //     break
    //   default:
    //     break
    // }
  }, [])
  const handleChange = (event, newValue) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (event.type !== 'click' || (event.type === 'click' && samePageLinkNavigation(event))) {
      setValue(newValue)
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs textColor='inherit' centered value={value} onChange={handleChange} aria-label='nav tabs' role='navigation'>
        {navItems.map((i, index) => (
          <LinkTab key={index} sx={{ textTransform: 'none' }} label={i.title} href={i.url} />
        ))}
      </Tabs>
    </Box>
  )
}

export default NavLinksCopy
