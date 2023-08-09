import axios, { AxiosResponse } from 'axios'

import { instance } from '@/api/api.interceptor'
import { ILoginBody, ILoginData } from '@/types/auth.type'
import { removeAccessToken, setAccessToken } from '../token/token.helper'

export const AuthService = {
	async refresh(): Promise<AxiosResponse<ILoginData>> {
		const response = await axios.get<ILoginData>(
			`${process.env.SERVER_URL}/api/auth/refresh`,
			{ withCredentials: true }
		) 

		const access_token = response.data.access_token

		if (access_token) {
			setAccessToken(access_token)
		}

		return response
	},

	async login(body: ILoginBody): Promise<AxiosResponse<ILoginData>> {
		const response = await instance.post<ILoginData>('/auth/login', body)

		const access_token = response?.data?.access_token

		if (access_token) {
			setAccessToken(access_token)
		}

		return response
	},

	async logout(): Promise<AxiosResponse<string>> {
		const response = await instance.delete<string>('/auth/logout')

		removeAccessToken()

		return response
	}
}
