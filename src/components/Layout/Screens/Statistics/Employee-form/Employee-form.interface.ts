import { Dispatch, SetStateAction } from 'react'

import { TEmployeesSettings } from '@/types/user.type'

export interface IEmployeeForm {
	type: TEmployeesSettings
	setType: Dispatch<SetStateAction<TEmployeesSettings>>
}
