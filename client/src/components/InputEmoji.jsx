import { useState } from 'react'
import { Button } from '@chakra-ui/react'
import { FaAngleRight, FaUndo } from 'react-icons/fa'

import EmojiPicker, { Emoji } from 'emoji-picker-react'

const InputEmoji = () => {
	const [selectedEmoji, setSelectedEmoji] = useState([])

	const handleClick = () => {
		let emojiUsed = ''
		selectedEmoji.map((emoji) => {
			const emojiName = emoji.name
			emojiUsed = emojiUsed.concat(emojiName[emojiName.length - 1])
		})
		console.log(emojiUsed, 'Emoji Used') //Call api
	}

	const clearSelectedEmoji = () => {
		setSelectedEmoji([])
	}
	return (
		<div>
			<div>
				<div>
					{selectedEmoji.map((emoji, i) => (
						<div key={i}>
							{console.log(emoji)}
							<Emoji unified={emoji.unified}></Emoji>
						</div>
					))}
				</div>
				<Button
					onClick={clearSelectedEmoji}
					style={{ backgroundColor: 'white' }}>
					<FaUndo size={20} />
				</Button>

				<Button onClick={handleClick} style={{ backgroundColor: 'white' }}>
					<FaAngleRight size={20} />
				</Button>
			</div>
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
