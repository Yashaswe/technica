import useSound from 'use-sound'

import { FaPlay } from 'react-icons/fa'
import { useState } from 'react'

const PlaySound = (sound) => {
	const [playing, setPlaying] = useState(false)
	const [play] = useSound(sound)

	return (
		<button
			disabled={playing}
			onClick={() => {
				play()
				setPlaying(true)
			}}>
			<FaPlay size={30}></FaPlay>
		</button>
	)
}

export default PlaySound
