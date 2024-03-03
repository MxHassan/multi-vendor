import { createSlice } from '@reduxjs/toolkit'

const eventsSlice = createSlice({
  name: 'events',
  initialState: {
    eventsTime: null
  },
  reducers: {
    setEventsTime: (state, action) => {
      const eventDays = Date.now() + 1000 * 60 * 60 * 24 * action.payload
      state.eventsTime = eventDays
    }
  }
})
export default eventsSlice.reducer
export const { setEventsTime } = eventsSlice.actions
export const selectEventsTime = (state) => state.events.eventsTime
