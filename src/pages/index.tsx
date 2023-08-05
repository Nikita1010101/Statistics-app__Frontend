import React from 'react'
import { GetServerSideProps, NextPage } from 'next'

import { Home } from 'components/Layout/Screens/Home/Home'
import { UserService } from '@/services/user/user.service'
import { IUser } from '@/types/user.type'

const HomePage: NextPage<{ users: IUser[] }> = ({ users }) => {
	return <Home users={users} />
}

export default HomePage

export const getServerSideProps: GetServerSideProps = async () => {
	const { data: users } = await UserService.getUsers()

	return { props: { users: users || ([] as IUser[]) } }
}
