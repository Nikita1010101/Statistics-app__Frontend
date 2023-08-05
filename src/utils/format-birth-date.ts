export const formatBirthDate = (birth_date: string) => {
	const formated_birth_date = birth_date
		.split('')
		.slice(0, 10)
		.join('')
		.split('-')
		.reverse()
		.join('.')

	return formated_birth_date
}
