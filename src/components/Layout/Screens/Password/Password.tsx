import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import styles from './Password.module.scss'

import { AuthService } from '@/services/auth/auth.service'

export const Password: FC = () => {
	const { replace, query } = useRouter()
	const { register, handleSubmit } = useForm()

	const onSubmit: SubmitHandler<FieldValues> = async ({
		password,
		confirm_password
	}) => {
		if (password === confirm_password && query._user_id) {
			await AuthService.password({
				user_id: String(query._user_id),
				password
			})

			replace('/login')
		}
	}

	return (
		<div className={styles.login}>
			<div className={styles.form}>
				<h1>Password</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						placeholder='Enter password'
						{...register('password', { required: true })}
						type='password'
					/>
					<input
						placeholder='Confirm password'
						{...register('confirm_password', { required: true })}
						type='password'
					/>
					<input
						className={styles.btn_submit}
						type='submit'
						title='Set Password'
						value='Set Password'
					/>
				</form>
			</div>
		</div>
	)
}
