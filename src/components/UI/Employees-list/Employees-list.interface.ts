import { IUser } from '@/types/user.type'

export interface IEmployeesList {
	users?: IUser[]
	title: string
	is_loading: boolean
}
