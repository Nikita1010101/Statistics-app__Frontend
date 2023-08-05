import React from 'react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import NextNProgress from 'nextjs-progressbar'
import '@/styles/globals.css'

import store from '@/store/store'

const AppPage = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<NextNProgress
				color='#29d'
				startPosition={0.4}
				stopDelayMs={200}
				height={2}
				showOnShallow={true}
				options={{ easing: 'ease', speed: 500 }}
			/>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</>
	)
}

export default AppPage
