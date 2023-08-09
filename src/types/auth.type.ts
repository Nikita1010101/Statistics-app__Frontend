import { IUser } from './user.type'

export interface ILoginBody {
	user_id: string
	password: string
}

export interface ILoginData {
	user: IUser | null
	access_token: string
	refresh_token: string
}
