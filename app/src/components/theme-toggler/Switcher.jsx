import { useEffect } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import { IconButton } from '@material-tailwind/react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentTheme, toggleThemeMode } from '../../features/theme/themeSlice'

export default function Switcher() {
  const dispatch = useDispatch()
  const theme = useSelector(selectCurrentTheme)
  const toggleDarkTheme = () => {
    dispatch(toggleThemeMode())
  }
  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(!theme ? 'dark' : 'light')
    root.classList.add(theme ? 'dark' : 'light')
  }, [theme])
  return (
    <IconButton onClick={toggleDarkTheme} variant='text'>
      <DarkModeSwitch checked={theme} onChange={() => null} size={30} />
    </IconButton>
  )
}
