import { AxiosResponse } from 'axios'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

import { UserService } from '@/services/user/user.service'
import { ICreateUser, IStatistics, IUser } from '@/types/user.type'

export const useUser = {
	getUsers() {
		const { data: users, isLoading: is_loading } = useQuery<
			AxiosResponse<IUser[]>,
			unknown,
			IUser[],
			readonly unknown[]
		>({
			queryKey: ['users'],
			queryFn: () => UserService.getUsers(),
			select: ({ data }) => data
		})

		return { users, is_loading }
	},

	getStatistics() {
		const { data: statistics, isLoading: is_loading } = useQuery<
			AxiosResponse<IStatistics>,
			unknown,
			IStatistics,
			readonly unknown[]
		>({
			queryKey: ['statistics'],
			queryFn: () => UserService.getStatistics(),
			select: ({ data }) => data
		})

		return { statistics, is_loading }
	},

	addUser() {
		const queryClient = useQueryClient()

		const { mutateAsync: getLink, isLoading: is_loading } = useMutation({
			mutationKey: ['add user'],
			mutationFn: (body: ICreateUser) => UserService.addUser(body),
			onSuccess: () => {
				queryClient.invalidateQueries(['users', 'statistics'])
			}
		})

		return { getLink, is_loading }
	},

	editUser() {
		const queryClient = useQueryClient()

		const { mutate: editUser, isLoading: is_loading } = useMutation({
			mutationKey: ['edit user'],
			mutationFn: (body: Partial<IUser>) => UserService.editUser(body),
			onSuccess: () => {
				queryClient.invalidateQueries(['users', 'statistics'])
			}
		})

		return { editUser, is_loading }
	},

	removeUser() {
		const queryClient = useQueryClient()

		const { mutate: removeUser, isLoading: is_loading } = useMutation({
			mutationKey: ['remove user'],
			mutationFn: (user_id: number) => UserService.removeUser(user_id),
			onSuccess: () => {
				queryClient.invalidateQueries(['users', 'statistics'])
			}
		})

		return { removeUser, is_loading }
	}
}
