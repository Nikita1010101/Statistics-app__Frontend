import { AxiosResponse } from 'axios'

import { instance } from '@/api/axios'
import { IUser } from '@/types/user.type'

export const UserService = {
	async getUsers(): Promise<AxiosResponse<IUser[]>> {
		return await instance.get('/users')
	}
}
