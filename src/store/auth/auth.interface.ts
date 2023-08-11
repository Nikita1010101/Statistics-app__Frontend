import { IUser } from '@/types/user.type'

export interface IAuthInitialState {
	is_loading: boolean
	access_token: string
	user: IUser | null
}
