import { Flex, Image } from '@chakra-ui/react'
import panda from '../assets/panda.png'

const Header = () => {
	return (
		<Flex justifyContent={'center'} mt={'12'} mb={'6'}>
			<Image cursor={'pointer'} alt='logo' w={100} src={panda} />
		</Flex>
	)
}

export default Header
