import { Button, HStack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FaAngleRight, FaUndo } from 'react-icons/fa'

import EmojiPicker, { Emoji } from 'emoji-picker-react'
import { createStoryRoute } from '../utils/routes'

const InputEmoji = ({ result, setResult }) => {
	const [selectedEmoji, setSelectedEmoji] = useState([])

	const handleClick = async () => {
		console.log('called')
		let emojiUsed = ''
		selectedEmoji.map((emoji) => {
			const emojiName = emoji.name
			emojiUsed = emojiUsed.concat(emojiName[emojiName.length - 1])
		})

		const res = await fetch(createStoryRoute, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(emojiUsed),
		})

		const data = await res.json()
		setResult({ response: data.response, mp3: data.mp3 })
	}

	useEffect(() => {}, [result])

	const clearSelectedEmoji = () => {
		setSelectedEmoji([])
	}
	return (
		<div>
			<>
				<HStack overflow='hidden' mb={2}>
					{selectedEmoji.map((emoji, i) => (
						<Emoji key={i} unified={emoji.unified} />
					))}
				</HStack>
				<Button
					onClick={clearSelectedEmoji}
					style={{ backgroundColor: 'white' }}>
					<FaUndo size={20} />
				</Button>

				<Button onClick={handleClick} style={{ backgroundColor: 'white' }}>
					<FaAngleRight size={20} />
				</Button>
			</>
			<EmojiPicker
				onEmojiClick={(emojiData) => {
					setSelectedEmoji([
						...selectedEmoji,
						{ unified: emojiData.unified, name: emojiData.names },
					])
				}}
				width={'100%'}
				emojiStyle='facebook'
				searchDisabled={true}
				previewConfig={{ showPreview: true }}
				// defaultEmoji: string; // defaults to: "1f60a"
				// defaultCaption: string; // defaults to: "What's your mood?"
				//   showPreview: false; // defaults to: true
				// }
			></EmojiPicker>
		</div>
	)
}
export default InputEmoji
