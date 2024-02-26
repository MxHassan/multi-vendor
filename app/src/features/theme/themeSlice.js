import { createSlice } from '@reduxjs/toolkit'
const determineDarkModePreference = () => {
  const storedDarkMode = JSON.parse(localStorage.getItem('theme'))
  if (storedDarkMode !== null) {
    return storedDarkMode
  } else {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }
}

const initialState = {
  theme: determineDarkModePreference()
}
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleThemeMode: (state) => {
      state.theme = !state.theme
      localStorage.setItem('theme', state.theme)
    }
  }
})
export const selectCurrentTheme = (state) => state.theme.theme
export const { toggleThemeMode } = themeSlice.actions
export default themeSlice.reducer
