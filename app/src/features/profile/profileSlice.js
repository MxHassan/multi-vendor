import {createSlice} from '@reduxjs/toolkit'
const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    sideBar: false
  },
  reducers: {
    setOpenSideBar: (state) => {
      state.sideBar = true
    },
    setCloseSideBar: (state) => {
      state.sideBar = false
    },
  }
})
export const {setOpenSideBar,setCloseSideBar} = profileSlice.actions
export default profileSlice.reducer
export const selectSideBar = (state) => state.profile.sideBar