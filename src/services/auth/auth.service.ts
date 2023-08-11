import axios, { AxiosResponse } from 'axios'

import { instance } from '@/api/api.interceptor'
import { ILoginBody, ILoginData } from '@/types/auth.type'

export const AuthService = {
	async password(body: ILoginBody): Promise<void> {
		await axios.post<ILoginBody>(
			`${process.env.SERVER_URL}/api/auth/password`,
			body
		)
	},

	async login(body: ILoginBody): Promise<AxiosResponse<ILoginData>> {
		return await instance.post<ILoginData>('/auth/login', body)
	},

	async logout(): Promise<AxiosResponse<string>> {
		return await instance.delete<string>('/auth/logout')
	},

	async refresh(): Promise<AxiosResponse<ILoginData>> {
		return await axios.get<ILoginData>(
			`${process.env.SERVER_URL}/api/auth/refresh`,
			{ withCredentials: true }
		)
	}
}
