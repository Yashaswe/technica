import { Flex, Heading, Image } from '@chakra-ui/react'
import panda from '../assets/panda.png'

const Header = () => {
	return (
		<Flex align={'center'} flexDir={'column'} justifyContent={'center'} mt={'12'} mb={'6'}>
			<Image cursor={'pointer'} alt='logo' w={100} src={panda} />
			<Heading color={'text.pink'} mt={4}>emojiverse</Heading>
		</Flex>
	)
}

export default Header
