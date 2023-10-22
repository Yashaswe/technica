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
import { loginRoute } from '../utils/routes'

export default function Login() {
	const [showPassword, setShowPassword] = useState(false)
	const [inputs, setInputs] = useState({
		username: '',
		password: '',
	})
	const showToast = useShowToast()
	const navigate = useNavigate()

	const handleLogin = async () => {
		try {
			const res = await fetch(loginRoute, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(inputs),
			})

			const data = await res.json()

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
						color={'text.pink'}>
						LOGIN
					</Heading>
				</Stack>
				<Box
					my={8}
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
								<FormLabel>Username</FormLabel>
								<Input
									borderColor={'text.blue'}
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
							<FormLabel>Password</FormLabel>
							<InputGroup>
								<Input
									borderColor={'text.blue'}
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
						<Stack spacing={10} pt={6}>
							<Button
								rounded={'lg'}
								loadingText='Submitting'
								size='lg'
								bg={'button.gray'}
								color={'white'}
								_hover={{
									bg: 'button.darker_gray',
								}}
								onClick={handleLogin}>
								Login
							</Button>
						</Stack>
						<Stack pt={6}>
							<Text align={'center'} fontSize={'1rem'}>
								Don&apos;t have an account?{' '}
								<Link
									textDecor={'underline'}
									color={'text.pink'}
									onClick={() => navigate('/signup')}>
									Sign up
								</Link>
							</Text>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	)
}
