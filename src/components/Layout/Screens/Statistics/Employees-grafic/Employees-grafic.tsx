import React, { FC } from 'react'
import { LineChart, Line, CartesianGrid, YAxis, XAxis, Tooltip } from 'recharts'

import { IEmployeesGrafic } from './Employees-grafic.interface'

export const EmployeesGrafic: FC<IEmployeesGrafic> = ({ data }) => {
	return (
		<LineChart
			width={1000}
			height={400}
			data={data}
			margin={{ top: 15, right: 15 }}
		>
			<Line
				type={'bump'}
				name={'Total Monthly Salary'}
				dataKey={'salaries_amount'}
				stroke={'#29d'}
			/>
			<CartesianGrid stroke={'#ccc'} strokeDasharray={'5 5'} />
			<XAxis dataKey={'month'} tick={{ fontWeight: 500, color: '#777' }} />
			<YAxis tick={{ fontSize: '0.85em', fontWeight: 500, fill: '#777' }} />
			<Tooltip />
		</LineChart>
	)
}
