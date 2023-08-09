import { createAsyncThunk } from '@reduxjs/toolkit'

import { AuthService } from '@/services/auth/auth.service'
import { ILoginBody, ILoginData } from '@/types/auth.type'

export const login = createAsyncThunk<ILoginData, ILoginBody>(
	'auth/login',
	async (body, thinkApi) => {
		try {
			const { data } = await AuthService.login(body)
			return data
		} catch (error) {
			return thinkApi.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk<string>(
	'auth/logout',
	async (_, thinkApi) => {
		try {
			const { data } = await AuthService.logout()
			return data
		} catch (error) {
			return thinkApi.rejectWithValue(error)
		}
	}
)

export const refresh = createAsyncThunk<ILoginData>(
	'auth/refresh',
	async (_, thinkApi) => {
		try {
			const { data } = await AuthService.refresh()
			return data
		} catch (error) {
			return thinkApi.rejectWithValue(error)
		}
	}
)
