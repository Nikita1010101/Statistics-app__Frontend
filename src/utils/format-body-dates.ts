import { ICreateUser } from '@/types/user.type'

export const formatBodyDates = (body: ICreateUser) => {
	const { birth_date, hire_date, ...data } = body

	const format_birth_date = birth_date.split('.').reverse().join('-')
	const format_hire_date = hire_date.split('.').reverse().join('-')

	const formatedBody = {
		...data,
		birth_date: format_birth_date,
		hire_date: format_hire_date,
		fired: false
	}

	return formatedBody
}
