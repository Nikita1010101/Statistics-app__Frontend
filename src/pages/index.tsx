import React from 'react'
import { GetServerSideProps, NextPage } from 'next'

import { Home } from 'components/Layout/Screens/Home/Home'
import { UserService } from '@/services/user.service'
import { IUser } from '@/types/user.type'

export const HomePage: NextPage<IUser[]> = users => {
	return <Home users={users} />
}

export const getServerSideProps: GetServerSideProps = async () => {
	const users = await UserService.getUsers()

	return { props: users }
}
