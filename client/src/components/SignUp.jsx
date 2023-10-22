'use client'

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	InputGroup,
	InputRightElement,
	Link,
	Stack,
	Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useShowToast from '../hooks/useShowToast'
import { signupRoute } from '../utils/routes'

export default function SignUp() {
	const [showPassword, setShowPassword] = useState(false)
	const [inputs, setInputs] = useState({
		username: '',
		password: '',
		confirmPassword: '',
	})
	const showToast = useShowToast()
	const navigate = useNavigate()

	const handleValidation = () => {
		if (inputs.password !== inputs.confirmPassword) {
			showToast(
				'Error',
				'Password and confirm password should be the same',
				'error'
			)
			return false
		}
		return true
	}

	const handleSignUp = async () => {
		if (!handleValidation()) {
			return
		}

		try {
			const start = Date.now()
			const res = await fetch(signupRoute, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					username: inputs.username,
					password: inputs.password,
				}),
			})

			const end = Date.now()
			console.log(`Execution time: ${end - start} ms`)

			const data = await res.json()
			console.log(data)

			if (data.error) {
				showToast('Error', data.error, 'error')
				return
			}

			navigate('/')
		} catch (error) {
			console.log('Error in handleLogin, ', error.message)
		}
	}

	return (
		<Flex align={'center'} justify={'center'}>
			<Stack spacing={8} mx={'auto'} maxW={'lg'} py={6} px={6}>
				<Stack align={'center'} my={4}>
					<Heading
						fontSize={'5xl'}
						textAlign={'center'}
						fontWeight={'black'}
						color={'text.blue'}>
						SIGN UP
					</Heading>
				</Stack>
				<Box
					rounded={'xl'}
					bg='background.light'
					boxShadow={'lg'}
					p={8}
					w={{
						base: 'full',
						sm: '400px',
					}}>
					<Stack spacing={4}>
						<Box>
							<FormControl id='username' isRequired>
								<FormLabel color={'text.blue'}>Username</FormLabel>
								<Input
									borderColor={'button.light'}
									rounded={'lg'}
									type='text'
									onChange={(e) =>
										setInputs({ ...inputs, username: e.target.value })
									}
									value={inputs.username}
								/>
							</FormControl>
						</Box>
						<FormControl id='password' isRequired>
							<FormLabel color={'text.blue'}>Password</FormLabel>
							<InputGroup>
								<Input
									borderColor={'button.light'}
									rounded={'lg'}
									type={showPassword ? 'text' : 'password'}
									onChange={(e) =>
										setInputs({ ...inputs, password: e.target.value })
									}
									value={inputs.password}
								/>
								<InputRightElement h={'full'}>
									<Button
										variant={'ghost'}
										onClick={() =>
											setShowPassword((showPassword) => !showPassword)
										}>
										{showPassword ? <ViewIcon /> : <ViewOffIcon />}
									</Button>
								</InputRightElement>
							</InputGroup>
						</FormControl>
						<FormControl id='confirmPassword' isRequired>
							<FormLabel color={'text.blue'}>Confirm Password</FormLabel>
							<InputGroup>
								<Input
									borderColor={'button.light'}
									rounded={'lg'}
									type={showPassword ? 'text' : 'password'}
									onChange={(e) =>
										setInputs({ ...inputs, confirmPassword: e.target.value })
									}
									value={inputs.confirmPassword}
								/>
								<InputRightElement h={'full'}>
									<Button
										variant={'ghost'}
										onClick={() =>
											setShowPassword((showPassword) => !showPassword)
										}>
										{showPassword ? <ViewIcon /> : <ViewOffIcon />}
									</Button>
								</InputRightElement>
							</InputGroup>
						</FormControl>
						<Stack spacing={10} pt={6}>
							<Button
								rounded={'lg'}
								loadingText='Submitting'
								size='lg'
								bg={'button.pink'}
								color={'white'}
								_hover={{
									bg: 'button.darker_pink',
								}}
								onClick={handleSignUp}>
								Sign Up
							</Button>
						</Stack>
						<Stack pt={6}>
							<Text align={'center'} fontSize={'1rem'}>
								Already a user?{' '}
								<Link
									textDecor={'underline'}
									color={'text.blue'}
									onClick={() => navigate('/login')}>
									Log in
								</Link>
							</Text>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	)
}
