import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { mode } from '@chakra-ui/theme-tools'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource/roboto-mono'
import '@fontsource/martian-mono/600.css'

const colors = {
	theme: {
		light: '#E2E8F0',
		dark: '#011627',
	},
}

const styles = {
	global: (props) => ({
		body: {
			color: mode('theme.dark', 'theme.light')(props),
			bg: mode('theme.light', 'theme.dark')(props),
			lineHeight: '1.5',
		},
	}),
}

const config = {
	initialColorMode: 'light',
	useSystemColorMode: true,
}

const fonts = {
	heading: `'Martian Mono', 'Martian Mono'`,
	body: `'Roboto Mono','Roboto Mono'`,
}

const theme = extendTheme({ colors, config, styles, fonts })

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<ChakraProvider theme={theme}>
				<ColorModeScript initialColorMode={theme.config.initialColorMode} />
				<App />
			</ChakraProvider>
		</BrowserRouter>
	</React.StrictMode>
)
