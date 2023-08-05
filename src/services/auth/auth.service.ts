import { AxiosResponse } from 'axios'

import { instance } from '@/api/api.instance'
import { ILoginBody, ILoginData } from '@/types/auth.type'

export const AuthService = {
	async refresh(): Promise<void> {
		const { data } = await instance.get('/refresh')

		if (data.access_token) {
			localStorage.setItem('access_token', data.access_token)
		}
	},

	async login(body: ILoginBody): Promise<AxiosResponse<ILoginData>> {
		return await instance.post('/login', body)
	},

	async logout(): Promise<AxiosResponse<ILoginData>> {
		return await instance.post('/logout')
	}
}
