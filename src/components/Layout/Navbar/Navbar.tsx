import React, { FC } from 'react'
import styles from './Navbar.module.scss'
import Link from 'next/link'

export const Navbar: FC = () => {
	return (
		<div className={styles.navbar}>
			<h2 title='Employees'>
				<Link href={'/'}>Employees</Link>
			</h2>
			<h2 title='Statistics'>
				<Link href={'/statistics'}>Statistics</Link>
			</h2>
			<h2 title='Logout'>
				<Link href={'/login'}>Logout</Link>
			</h2>
		</div>
	)
}

/* 

	buttons =>

	1. left => all employees 

	2. right => logout

	3. center => statistics (ONLY FOR HR) 

*/
