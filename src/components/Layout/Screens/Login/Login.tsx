import React, { FC, useEffect } from 'react'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import styles from './Login.module.scss'

import { useActions } from '@/hooks/use-actions'
import { ILoginBody } from '@/types/auth.type'
import { useRouter } from 'next/router'
import { useTypedSelector } from '@/hooks/use-typed-selector'

export const Login: FC = () => {
	const { replace } = useRouter()
	const { register, handleSubmit } = useForm()
	const { user } = useTypedSelector(state => state.auth)
	const { login } = useActions()

	const onSubmit: SubmitHandler<FieldValues> = body => {
		login(body as ILoginBody)
	}

	useEffect(() => {
		if (user !== null) {
			replace('/')
		}
	}, [user])

	return (
		<div className={styles.login}>
			<div className={styles.form}>
				<h1>Login</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						placeholder='Enter your id'
						{...register('user_id', { required: true })}
						type='number'
					/>
					<input
						placeholder='Enter password'
						{...register('password', { required: true })}
						type='password'
					/>
					<input
						className={styles.btn_submit}
						type='submit'
						title='Login in system'
						value='Login'
					/>
				</form>
			</div>
		</div>
	)
}
