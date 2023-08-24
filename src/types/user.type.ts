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

export  interface ICreateUser extends IUser {
	userRoles: string[]
}

export interface IStatistics {
	hired_employees: number
	fired_employees: number
	upcomingSalaries: IUpcomingSalaries[]
	upcomingBirthdays: IUser[]
}


export interface IUpcomingSalaries {
	month: string
	salaries_amount: number
}

export type TEmployeesSettings = 'Add' | 'Edit' | 'Remove' | '' 

export type TUserKeys = keyof IUser & undefined