import React, { FC, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import styles from './Employee-form.module.scss'

import { useUser } from '@/hooks/use-user'
import { ICreateUser } from '@/types/user.type'
import { IEmployeeForm } from './Employee-form.interface'
import { filterBody } from '@/utils/filter-body'
import { formatBodyDates } from '@/utils/format-body-dates'

export const EmployeeForm: FC<IEmployeeForm> = ({ type, setType }) => {
	const [link, setLink] = useState<string>('')
	const { register, handleSubmit } = useForm()
	const { getLink } = useUser.addUser()
	const { editUser } = useUser.editUser()
	const { removeUser } = useUser.removeUser()

	const type_add = type === 'Add'
	const type_edit = type === 'Edit'
	const type_remove = type === 'Remove'

	const onSubmit: SubmitHandler<FieldValues> = async body => {
		if (type_add) {
			const { user_roles, ...data } = body

			const formatedBody = formatBodyDates(data as ICreateUser)

			const formatUserRoles = user_roles
				.toUpperCase()
				.replace(/ /g, '')
				.split(',')

			const { data: link } = await getLink({
				...formatedBody,
				userRoles: formatUserRoles
			})

			setLink(link)
		}

		if (type_edit) {
			const formatedBody = formatBodyDates(body as ICreateUser)
			const filteredBody = filterBody(formatedBody)

			editUser(filteredBody)
			setType('')
		}

		if (type_remove) {
			removeUser(body.user_id as number)
			setType('')
		}
	}

	return (
		<div onClick={event => event.stopPropagation()} className={styles.login}>
			<div className={styles.form}>
				<h1>{`${type} User`}</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					{(type_edit || type_remove) && (
						<input
							placeholder='Enter user_id'
							{...register('user_id', { required: true })}
							type='text'
						/>
					)}
					{(type_add || type_edit) && (
						<>
							<input
								placeholder='Enter full name'
								{...register('full_name', { required: type_add })}
								type='text'
							/>
							<input
								placeholder='Enter birth date (DD.MM.YYYY)'
								{...register('birth_date', { required: type_add })}
								type='text'
							/>
							<input
								placeholder='Enter position'
								{...register('position', { required: type_add })}
								type='text'
							/>
							<input
								placeholder='Enter salary amount'
								{...register('salary_amount', { required: type_add })}
								type='number'
							/>
							<input
								placeholder='Enter hire date (DD.MM.YYYY)'
								{...register('hire_date', { required: type_add })}
								type='text'
							/>
						</>
					)}
					{type_add && (
						<input
							placeholder='Enter user roles'
							{...register('user_roles', { required: true })}
							type='text'
						/>
					)}
					<input
						className={styles.btn_submit}
						type='submit'
						title={`${type} user`}
						value={type}
					/>
				</form>
				{type_add && <div className={styles.link}>{link || 'No link'}</div>}
			</div>
		</div>
	)
}
