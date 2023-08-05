export interface IUser {
  id?: number
	full_name: string
	birth_date: string
	position: string
	salary_amount: number
	hire_date: string
	fired: boolean
	roles?: string[]
}