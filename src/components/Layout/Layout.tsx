import React, { FC, PropsWithChildren, useEffect } from 'react'
import styles from './Layout.module.scss'

import { Navbar } from './Navbar/Navbar'
import { ILayout } from './Layout.interface'
import { useTypedSelector } from '@/hooks/use-typed-selector'
import { useActions } from '@/hooks/use-actions'
import { useRouter } from 'next/router'

export const Layout: FC<PropsWithChildren<ILayout>> = ({
	children,
	title,
	description
}) => {
	const { pathname } = useRouter()
	const { user } = useTypedSelector(state => state.auth)
	const { refresh } = useActions()

	useEffect(() => {
		if (!user) {
			refresh()
		}
	}, [user])

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
