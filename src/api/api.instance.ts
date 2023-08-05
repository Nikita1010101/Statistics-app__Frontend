import axios, { InternalAxiosRequestConfig } from 'axios'

import { getContentType } from './api.helper'
import { AuthService } from '@/services/auth/auth.service'

export const instance = axios.create({
	withCredentials: true,
	baseURL: `${process.env.SERVER_URL}/api`,
	headers: getContentType()
})

// instance.interceptors.request.use(request => {
// 	if (typeof window !== 'undefined') {
// 		const access_token = localStorage.getItem('access_token')

// 		if (request && request.headers && access_token) {
// 			request.headers.Authorization = `Bearer ${access_token}`
// 			console.log('auth:', request.headers.Authorization)
// 		}
// 		console.log(request)

// 		return request
// 	}
// })

// instance.interceptors.response.use(
// 	response => response,
// 	async error => {
// 		const originalRequest = error.config

// 		console.log(error)

// 		if (
// 			error.response?.status === 401
// 			// (error.config && !error.config._isRetry)
// 		) {
// 			// originalRequest._isRetry = true

// 			try {
// 				// await AuthService.refresh()
// 				return instance.request(originalRequest)
// 			} catch (error) {
// 				console.log('not autorized')
// 				//deleteToken()
// 			}
// 		}

// 		return error
// 	}
// )
