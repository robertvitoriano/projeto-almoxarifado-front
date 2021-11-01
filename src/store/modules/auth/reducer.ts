import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token') || null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
  },
})


export const { setToken } = authSlice.actions

export default authSlice.reducer

