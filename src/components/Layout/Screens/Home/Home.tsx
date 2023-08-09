import React, { FC, useEffect, useState } from 'react'
import styles from './Home.module.scss'

import { IUser } from '@/types/user.type'
import { EmployeesList } from '@/components/UI/Employees-list/Employees-list'
import { Layout } from '../../Layout'
import { useTypedSelector } from '@/hooks/use-typed-selector'
import { formatBirthDate } from '@/utils/format-birth-date'
import { UserService } from '@/services/user/user.service'

export const Home: FC = () => {
	const { user } = useTypedSelector(state => state.auth)
	const formated_birth_date = formatBirthDate(String(user?.birth_date))

	const [users, setUsers] = useState([] as IUser[])

	useEffect(() => {
		;(async () => {
			const { data: users } = await UserService.getUsers()
			setUsers(users)
		})()
	}, [])

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
							{user?.roles?.[0]?.role || 'Empty'}
						</div>
						<hr />
					</div>
				</div>
				<EmployeesList users={users} />
			</div>
		</Layout>
	)
}
