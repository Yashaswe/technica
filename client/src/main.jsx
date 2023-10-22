import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import '@fontsource/lexend'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

const colors = {
	background: {
		light: '#F6E6E8',
		lighter: '#B6E2D3',
		darker: '#0D273C',
	},
	text: {
		pink: '#fa7c74',
		blue: '#3c9cd4',
		gray: '#272829',
	},
	button: {
		pink: '#fa7c74',
    darker_pink: '#b35c51',
		gray: '#56595e',
		darker_gray: '#272829',
	},
}

const styles = {
	global: () => ({
		body: {
			color: 'text.gray',
			bg: 'background.lighter',
			lineHeight: '1.5',
		},
	}),
}

const config = {
	initialColorMode: 'light',
	useSystemColorMode: true,
}

const fonts = {
	heading: `'Lexend', 'monospace'`,
	body: `'Lexend','monospace'`,
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
