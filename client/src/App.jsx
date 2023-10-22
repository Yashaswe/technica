import { Container } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import LoginCard from './components/LoginCard'
const App = () => {
	return (
		<>
			<Container>
				<Routes>
					<Route path='/signup' />
					<Route path='/login' element={<LoginCard />} />
					<Route path='/story' />
					<Route path='/' />
				</Routes>
			</Container>
		</>
	)
}

export default App
