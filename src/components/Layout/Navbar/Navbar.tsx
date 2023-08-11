import React, { FC, useEffect } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.scss'

import { useTypedSelector } from '@/hooks/use-typed-selector'
import { useActions } from '@/hooks/use-actions'
import { useRouter } from 'next/router'

export const Navbar: FC = () => {
	const { replace } = useRouter()
	const { user } = useTypedSelector(state => state.auth)
	const { logout } = useActions()

	const exit = () => {
		logout()
	}

	const isHR = user?.roles?.some(item => item.role === 'HR')

	useEffect(() => {
		if (user === null) {
			replace('/login')
		}
	}, [user])

	return (
		<div className={styles.navbar}>
			<h2 title='Employees'>
				<Link href={'/'}>Employees</Link>
			</h2>
			{isHR && (
				<h2 title='Statistics'>
					<Link href={'/statistics'}>Statistics</Link>
				</h2>
			)}
			<h2 title='Logout'>
				<Link onClick={exit} href={'/login'}>
					Logout
				</Link>
			</h2>
		</div>
	)
}
