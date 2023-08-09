import Cookies from 'js-cookie'

export const getAccessToken = () => {
	return Cookies.get('access_token')
}

export const setAccessToken = (access_token: string) => {
	Cookies.set('access_token', access_token)
}

export const removeAccessToken = () => {
	Cookies.remove('access_token')
}