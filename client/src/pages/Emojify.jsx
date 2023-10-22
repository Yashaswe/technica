import { Container, Flex } from '@chakra-ui/react'
import InputEmoji from '../components/InputEmoji'
import PlaySound from '../components/PlaySound'
import TextPlace from '../components/TextPlace'
import { useEffect, useState } from 'react'

const Emojify = () => {
	const [story, setStory] = useState('')
	const [voice, setVoice] = useState('')

	useEffect(() => {}, [story])

	return (
		<Flex flexDir={'column'}>
			<InputEmoji />
			<Flex
				flexDir={'column'}
				paddingTop={10}
				alignContent={'space-between'}
				gap={5}>
				<PlaySound />
				<TextPlace
					text="
display: inline-flex does not make flex items display inline. It makes the flex container display inline. That is the only difference between display: inline-flex and display: flex. A similar comparison can be made between display: inline-block and display: block, and pretty much any other display type that has an inline counterpart.1

There is absolutely no difference in the effect on flex items; flex layout is identical whether the flex container is block-level or inline-level. In particular, the flex items themselves always behave like block-level boxes (although they do have some properties of inline-blocks). You cannot display flex items inline; otherwise you don't actually have a flex layout.

It is not clear what exactly you mean by vertically align"
				/>
			</Flex>
		</Flex>
	)
}
export default Emojify
