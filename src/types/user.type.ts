export interface IRole {
	id?: number
	role: string
	userId: number
}

export interface IUser {
  id?: number
	full_name: string
	birth_date: string
	position: string
	salary_amount: number
	hire_date: string
	fired: boolean
	roles?: IRole[]
}

export interface IStatistics {
	hired_employees: number
	fired_employees: number
	upcomingSalaries: Pick<IUser, 'birth_date' | 'salary_amount'>[]
	upcomingBirthdays: IUser[]
}