import axios from 'axios'

import { AuthService } from '@/services/auth/auth.service'
import { getAccessToken } from '@/services/token/token.helper'
import { getContentType } from './api.helper'

export const instance = axios.create({
	baseURL: `${process.env.SERVER_URL}/api`,
	headers: getContentType(),
	withCredentials: true
})

instance.interceptors.request.use(request => {
	const access_token = getAccessToken()

	request.headers.Authorization = `Bearer ${access_token}`

	return request
})

instance.interceptors.response.use(
	response => response,
	async error => {
		const originalRequest = error.config

		if (
			error.response?.status === 401 &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await AuthService.refresh()
				return instance.request(originalRequest)
			} catch (error) {
				window.location.href = '/login'
			}
		}

		return error
	}
)
