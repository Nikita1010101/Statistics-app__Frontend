import React from 'react'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import NextNProgress from 'nextjs-progressbar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '@/styles/globals.css'

import store from '@/store/store'

const queryClient = new QueryClient()

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
				<QueryClientProvider client={queryClient}>
					<Component {...pageProps} />
				</QueryClientProvider>
			</Provider>
		</>
	)
}

export default AppPage
