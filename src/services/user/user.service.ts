import { AxiosResponse } from 'axios'

import { instance } from '@/api/api.instance'
import { IStatistics, IUser } from '@/types/user.type'

export const UserService = {
	async getUsers(): Promise<AxiosResponse<IUser[]>> {
		return await instance.get('/users')
	},

	async getStatistics(): Promise<AxiosResponse<IStatistics>> {
		return await instance.get('/statistics')
	},

	async addUser(user: IUser): Promise<AxiosResponse<IUser>> {
		return await instance.post('/add', user)
	},

	async removeUser(user_id: number): Promise<AxiosResponse<IUser>> {
		return await instance.post('/remove', { user_id })
	},

	async editUser(user: IUser): Promise<AxiosResponse<IUser>> {
		return await instance.post('/edit', user)
	}
}
