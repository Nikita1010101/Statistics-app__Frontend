import { IUser } from './user.type'

export interface ILoginBody {
	user_id: string
	password: string
}

export interface ILoginData {
	access_token: string
	user: IUser | null
}
