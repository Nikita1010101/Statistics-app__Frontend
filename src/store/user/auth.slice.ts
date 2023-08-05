import { createSlice } from '@reduxjs/toolkit'

import { IAuthInitialState } from './auth.interface'
import { login, logout } from './auth.action'

export const initialState: IAuthInitialState = {
	is_loading: false,
	access_token: '',
	user: null
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: builder =>
		builder
			.addCase(login.pending, state => {
				state.is_loading = true
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.is_loading = false
				state.access_token = payload?.access_token || ''
				state.user = payload?.user || null
			})
			.addCase(login.rejected, state => {
				state.is_loading = false
				state.access_token = ''
				state.user = null
			})
			.addCase(logout.pending, state => {
				state.is_loading = true
			})
			.addCase(logout.fulfilled, state => {
				state.is_loading = false
				state.access_token = ''
				state.user = null
			})
			.addCase(logout.rejected, state => {
				state.is_loading = false
				state.access_token = ''
				state.user = null
			})
})
