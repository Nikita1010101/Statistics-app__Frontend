import { IUser } from '@/types/user.type'

export interface IAuthInitialState {
	is_loading: boolean
	user: IUser | null
}
