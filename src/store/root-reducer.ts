import { combineReducers } from '@reduxjs/toolkit'
import { authSlice } from '@/store/user/auth.slice'

export const rootReducer = combineReducers({
  auth: authSlice.reducer
})