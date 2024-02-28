import { useEffect } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { selectCurrentTheme } from '../../features/theme/themeSlice'
import { useSelector } from 'react-redux'

export default function Switcher({ profileMenu }) {
  const theme = useSelector(selectCurrentTheme)
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(!theme ? 'dark' : 'light')
    root.classList.add(theme ? 'dark' : 'light')
  }, [theme])
  return (
    <DarkModeSwitch
      checked={profileMenu ? !theme : theme}
      moonColor={profileMenu && 'black'}
      sunColor={profileMenu && 'white'}
      onChange={() => null}
      size={30}
    />
  )
}
