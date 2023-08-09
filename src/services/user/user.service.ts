import { AxiosResponse } from 'axios'

import { instance } from '@/api/api.interceptor/user'
import { IStatistics, IUser } from '@/types/user.type'

export const UserService = {
	async getUsers(): Promise<AxiosResponse<IUser[]>> {
		return await instance.get('/user/users')
	},

	async getStatistics(): Promise<AxiosResponse<IStatistics>> {
		return await instance.get('/user/statistics')
	},

	async addUser(user: IUser): Promise<AxiosResponse<IUser>> {
		return await instance.post('/user/add', user)
	},

	async removeUser(user_id: number): Promise<AxiosResponse<IUser>> {
		return await instance.delete('/user/remove', { user_id })
	},

	async editUser(user: IUser): Promise<AxiosResponse<IUser>> {
		return await instance.patch('/user/edit', user)
	}
}
