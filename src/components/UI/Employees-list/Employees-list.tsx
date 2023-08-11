import React, { FC } from 'react'
import styles from './Employees-list.module.scss'

import { EmployeeItem } from './Employee-item/Employee-item'
import { IEmployeesList } from './Employees-list.interface'

export const EmployeesList: FC<IEmployeesList> = ({
	users,
	title,
	is_loading
}) => {
	return (
		<>
			<div className={styles.title}>
				<h1>{title}</h1>
				<hr />
			</div>
			<div className={styles.users_list}>
				{!is_loading ? (
					users?.length !== 0 ? (
						users?.map(({ id, ...user }) => <EmployeeItem key={id} {...user} />)
					) : (
						<h2>List is Empty</h2>
					)
				) : (
					<h2>Loading...</h2>
				)}
			</div>
		</>
	)
}
