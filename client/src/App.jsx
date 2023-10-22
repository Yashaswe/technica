import { Container } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Footer from './components/Footer'
const App = () => {
	return (
		<>
			<Container>
				<Header />
				<Routes>
					<Route path='/signup' element={<SignUp />} />
					<Route path='/login' element={<Login />} />
					<Route path='/story' />
					<Route path='/' />
				</Routes>
        <Footer />
			</Container>
		</>
	)
}

export default App
