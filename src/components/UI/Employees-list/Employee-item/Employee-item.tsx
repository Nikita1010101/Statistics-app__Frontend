import React, { FC } from 'react'
import styles from './Employee-item.module.scss'
import { IUser } from '@/types/user.type'
import { formatBirthDate } from '@/utils/format-birth-date'

export const EmployeeItem: FC<IUser> = ({
	full_name,
	birth_date,
	position,
	salary_amount
}) => {
	const formated_birth_date = formatBirthDate(birth_date)
	return (
		<div className={styles.item}>
			<div className={styles.value}>{full_name}</div>
			<div className={styles.value}>{formated_birth_date}</div>
			<div className={styles.value}>{position}</div>
			<div className={styles.value}>{salary_amount}₽</div>
		</div>
	)
}
