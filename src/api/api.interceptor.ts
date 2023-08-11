import axios from 'axios'

import { getContentType } from './api.helper'
import store from '@/store/store'
import { refresh } from '@/store/auth/auth.action'

export const instance = axios.create({
	baseURL: `${process.env.SERVER_URL}/api`,
	headers: getContentType(),
	withCredentials: true
})

instance.interceptors.request.use(request => {
	const access_token = store.getState().auth.access_token

	request.headers.Authorization = `Bearer ${access_token}`

	return request
})

instance.interceptors.response.use(
	response => response,
	async error => {
		const originalRequest = error.config

		if (error.response?.status === 400) {
			alert('Data Error!')
		}

		if (
			error.response?.status === 401 &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await store.dispatch(refresh())
				return instance.request(originalRequest)
			} catch (error) {
				window.location.href = '/login'
			}
		}

		if (error.response?.status === 403) {
			window.location.href = '/login'
		}

		if (error.response?.status === 404) {
			window.location.href = '/login'
		}

		if (error.response?.status === 500) {
			alert('Server Data Error!!!')
		}

		return error
	}
)
