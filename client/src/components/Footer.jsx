import { Button, Flex } from '@chakra-ui/react'
import { HiOutlineLogout } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { logoutUser } from '../../../server/controllers/userController'
import useShowToast from '../hooks/useShowToast'

const Footer = () => {
	const showToast = useShowToast()
	const navigate = useNavigate()

	const handleLogOut = async () => {
		try {
			const res = await fetch(logoutUser, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
			})

			const data = await res.json()

			if (data.error) {
				showToast('Error', data.error, 'error')
				return
			}

			navigate('/login')
		} catch (error) {
			console.log('Error in handleLogout, ', error.message)
		}
	}

	return (
		<Flex justifyContent={'flex-end'} mr={'-20'}>
			<Button
				position={'fixed'}
				top={'30px'}
				right={'30px'}
				size={'sm'}
				onClick={handleLogOut}>
				<HiOutlineLogout size={25} />
			</Button>
		</Flex>
	)
}

export default Footer
