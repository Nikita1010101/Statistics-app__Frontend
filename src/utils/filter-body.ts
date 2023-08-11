import { IUser } from '@/types/user.type'

export const filterBody = (body: Partial<IUser>) => {
	const keys = Object.keys(body)

	const validKeys = keys.filter(
		key => Boolean(body[key as keyof IUser]) !== false
	)

	const newObj = validKeys.reduce((acc, key) => {
		acc[key] = body[key as keyof Partial<IUser>]
		return acc
	}, {} as Partial<IUser>)

	return newObj
}
