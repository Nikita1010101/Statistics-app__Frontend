import React, { FC, PropsWithChildren } from 'react'
import styles from './Layout.module.scss'

import { Navbar } from './Navbar/Navbar'
import { ILayout } from './Layout.interface'

export const Layout: FC<PropsWithChildren<ILayout>> = ({
	children,
	title,
	description
}) => {
	return (
		<>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			{title !== 'login' && <Navbar />}
			<main className={styles.layout}>{children}</main>
		</>
	)
}
