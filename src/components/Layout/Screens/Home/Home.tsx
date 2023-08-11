import React, { FC } from 'react'
import styles from './Home.module.scss'

import { EmployeesList } from '@/components/UI/Employees-list/Employees-list'
import { Layout } from '../../Layout'
import { useTypedSelector } from '@/hooks/use-typed-selector'
import { formatBirthDate } from '@/utils/format-birth-date'
import { useUser } from '@/hooks/use-user'

export const Home: FC = () => {
	const { user } = useTypedSelector(state => state.auth)
	const { users, is_loading } = useUser.getUsers()

	const formated_birth_date = formatBirthDate(String(user?.birth_date))

	const user_role = user
		? user?.roles?.some(item => item.role === 'HR')
		: undefined

	return (
		<Layout title={'Employees'} description={'Employees'}>
			<div className={styles.home}>
				<div className={styles.title}>
					<h1>Your Info</h1>
				</div>
				<div className={styles.user_info}>
					<div className={styles.names}>
						<hr />
						<div className={styles.name}>ID</div>
						<hr />
						<div className={styles.name}>Full Name</div>
						<hr />
						<div className={styles.name}>Birth date</div>
						<hr />
						<div className={styles.name}>Position</div>
						<hr />
						<div className={styles.name}>Salary Amount</div>
						<hr />
						<div className={styles.name}>Role</div>
						<hr />
					</div>
					<div className={styles.values}>
						<hr />
						<div className={styles.value}>{user?.id || 'Empty'}</div>
						<hr />
						<div className={styles.value}>{user?.full_name || 'Empty'}</div>
						<hr />
						<div className={styles.value}>{formated_birth_date || 'Empty'}</div>
						<hr />
						<div className={styles.value}>{user?.position || 'Empty'}</div>
						<hr />
						<div className={styles.value}>{user?.salary_amount || 'Empty'}</div>
						<hr />
						<div className={styles.value}>
							{user_role
								? 'HR'
								: user_role !== undefined
								? 'EMPLOYEE'
								: 'Empty'}
						</div>
						<hr />
					</div>
				</div>
				<EmployeesList
					users={users}
					title={'Employees'}
					is_loading={is_loading}
				/>
			</div>
		</Layout>
	)
}
