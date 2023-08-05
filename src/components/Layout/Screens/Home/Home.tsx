import { FC } from 'react'
import React from 'react'
import styles from './Home.module.scss'
import { IUser } from '@/types/user.type'
import { EmployeesList } from '@/components/UI/Employees-list/Employees-list'

export const Home: FC<{ users: IUser[] }> = ({ users }) => {
	return (
		<div className={styles.home}>
			<div className={styles.employee_info}>
				<div className={styles.names}>
					<div className={styles.name}>Full Name</div>
					<div className={styles.name}>Birth date</div>
					<div className={styles.name}>Position</div>
					<div className={styles.name}>Salary Amount</div>
					<div className={styles.name}>Role</div>
				</div>
				<div className={styles.values}>
					<div className={styles.value}></div>
					<div className={styles.value}></div>
					<div className={styles.value}></div>
					<div className={styles.value}></div>
					<div className={styles.value}></div>
				</div>
			</div>
			<EmployeesList users={users} />
		</div>
	)
}

/*

	1. employee info => full_name, birth_date, position, salary_amount, role
		
	2. list with others employees 

*/
