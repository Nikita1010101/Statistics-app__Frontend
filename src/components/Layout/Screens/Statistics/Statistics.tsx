import React, { FC, useState } from 'react'
import cn from 'classnames'
import styles from './Statistics.module.scss'

import { useUser } from '@/hooks/use-user'
import { EmployeesList } from '@/components/UI/Employees-list/Employees-list'
import { EmployeesGrafic } from './Employees-grafic/Employees-grafic'
import { Layout } from '../../Layout'
import { EmployeeForm } from './Employee-form/Employee-form'
import { TEmployeesSettings } from '@/types/user.type'

export const Statistics: FC = () => {
	const { statistics, is_loading } = useUser.getStatistics()

	const [type, setType] = useState<TEmployeesSettings>('')
	return (
		<Layout title={'Statistics'} description={'Statistics'}>
			<div className={styles.statistics}>
				<div
					onClick={() => setType('')}
					className={cn(styles.employee_settings_form, {
						[styles.active]: type
					})}
				>
					<EmployeeForm type={type} setType={setType} />
				</div>
				<div className={styles.title}>
					<h1>Employee Settings</h1>
				</div>
				<div className={styles.employee_settings}>
					<button
						onClick={() => setType('Add')}
						title={'Add Employee'}
						className={styles.add}
					>
						Add Employee
					</button>
					<button
						onClick={() => setType('Edit')}
						title={'Edit Employee'}
						className={styles.edit}
					>
						Edit Employee
					</button>
					<button
						onClick={() => setType('Remove')}
						title={'Remove Employee'}
						className={styles.remove}
					>
						Remove Employee
					</button>
				</div>
				{is_loading ? (
					'Loading...'
				) : (
					<>
						<div className={styles.upcoming_salaries}>
							<div className={styles.title}>
								<h1>Employee Settings</h1>
							</div>
							<EmployeesGrafic data={statistics?.upcomingSalaries} />
						</div>
						<div className={styles.employees_count}>
							<div className={styles.hired}>
								Employees hired per year -{' '}
								<strong>{statistics?.hired_employees}</strong>
							</div>
							<div className={styles.fired}>
								Employees fired per yaer -{' '}
								<strong>{statistics?.fired_employees}</strong>
							</div>
						</div>
						<div className='upcoming_birthdays'>
							<EmployeesList
								users={statistics?.upcomingBirthdays}
								title={'Upcoming Birthdays'}
								is_loading={is_loading}
							/>
						</div>
					</>
				)}
			</div>
		</Layout>
	)
}
