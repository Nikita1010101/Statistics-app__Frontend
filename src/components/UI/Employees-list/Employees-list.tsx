import React, { FC } from 'react'
import styles from './Employees-list.module.scss'

import { EmployeeItem } from './Employee-item/Employee-item'
import { IUser } from '@/types/user.type'

export const EmployeesList: FC<{ users: IUser[] }> = ({ users }) => {
	return (
		<>
			<div className={styles.title}>
				<h1>Employees</h1>
				<hr />
			</div>
			<div className={styles.users_list}>
				{users.map(({ id, ...user }) => (
					<EmployeeItem key={id} {...user} />
				))}
			</div>
		</>
	)
}
