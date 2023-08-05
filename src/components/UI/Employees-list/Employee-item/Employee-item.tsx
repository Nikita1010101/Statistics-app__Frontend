import React, { FC } from 'react'
import styles from './Employee-item.module.scss'
import { IUser } from '@/types/user.type'

export const EmployeeItem: FC<IUser> = () => {
	return <div className={styles.user_item}></div>
}
