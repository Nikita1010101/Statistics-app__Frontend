import { IUser } from '@/types/user.type'
import { TUserKeys } from '../types/user.type'

export const filterBody = (body: Partial<IUser>) => {
	const keys = Object.keys(body)

	const validKeys = keys.filter(
		key => Boolean(body[key as TUserKeys]) !== false
	)

	const newObj = validKeys.reduce((acc, key) => {
		acc[key as TUserKeys] = body[key as TUserKeys]
		return acc
	}, {} as Partial<IUser>)

	return newObj
}
