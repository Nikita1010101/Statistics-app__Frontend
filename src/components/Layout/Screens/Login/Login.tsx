import React, { FC } from 'react'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import styles from './Login.module.scss'

import { useActions } from '@/hooks/use-actions'
import { ILoginBody } from '@/types/auth.type'
import { useRouter } from 'next/router'

export const Login: FC = () => {
	const { replace } = useRouter()
	const { register, handleSubmit } = useForm()

	const { login } = useActions()

	const onSubmit: SubmitHandler<FieldValues> = body => {
		login(body as ILoginBody)
		replace('/')
	}

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
