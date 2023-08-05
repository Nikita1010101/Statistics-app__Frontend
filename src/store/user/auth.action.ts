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

export const logout = createAsyncThunk<ILoginData | null>('auth/logout', async () => {
	try {
		const { data } = await AuthService.logout()
		return data
	} catch (error) {
		return null
	}
})
