import { createEntityAdapter, createSelector } from '@reduxjs/toolkit'
import { apiSlice } from '../../app/api/apiSlice'

const eventsAdapter = createEntityAdapter({})

const initialState = eventsAdapter.getInitialState()

export const eventsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => '/event/all-events',
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError
      },
      keepUnusedDataFor: 30,
      transformResponse: (resData) => {
        if (resData.success) {
          return eventsAdapter.setAll(initialState, resData.events)
        }
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [{ type: 'Event', id: 'LIST' }, ...result.ids.map((id) => ({ type: 'Event', id }))]
        } else return [{ type: 'Event', id: 'LIST' }]
      }
    })
  })
})

export const { useGetEventsQuery } = eventsApiSlice

export const selectEventsResult = eventsApiSlice.endpoints.getEvents.select()

const selectEventsData = createSelector(selectEventsResult, (eventsResult) => eventsResult.data)

export const {
  selectAll: selectAllEvents,
  selectById: selectEventById,
  selectIds: selectEventsIds,
  selectEntities: selectAllEventsData
} = eventsAdapter.getSelectors((state) => selectEventsData(state) ?? initialState)
