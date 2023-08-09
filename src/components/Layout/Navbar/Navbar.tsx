import React, { FC, useEffect } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.scss'

import { useTypedSelector } from '@/hooks/use-typed-selector'
import { useActions } from '@/hooks/use-actions'
import { AuthService } from '@/services/auth/auth.service'

export const Navbar: FC = () => {
	const { user } = useTypedSelector(state => state.auth)
	const { removeUser } = useActions()

	useEffect(() => {
		if (user === null) {
			;(async () => {
				await AuthService.logout()
			})()
		}
	}, [user])

	return (
		<div className={styles.navbar}>
			<h2 title='Employees'>
				<Link href={'/'}>Employees</Link>
			</h2>
			{user?.roles?.[0].role === 'HR' && (
				<h2 title='Statistics'>
					<Link href={'/statistics'}>Statistics</Link>
				</h2>
			)}
			<h2 title='Logout'>
				<Link onClick={() => removeUser()} href={'/login'}>
					Logout
				</Link>
			</h2>
		</div>
	)
}
