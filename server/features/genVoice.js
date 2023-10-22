import express from 'express'
import textToSpeech from '@google-cloud/text-to-speech'
import fs from 'fs'
import util from 'util'
import cloudinary from '../db/connectCloudinary.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new textToSpeech.TextToSpeechClient()

const genVoice = async (prompt) => {
	const request = {
		input: {
			text: prompt,
		},
		voice: {
			languageCode: 'en-US',
			name: 'en-US-Neural2-I',
		},
		audioConfig: {
			audioEncoding: 'LINEAR16',
			effectsProfileId: ['small-bluetooth-speaker-class-device'],
			pitch: 0,
			speakingRate: 1,
		},
	}

	const [response] = await client.synthesizeSpeech(request)
	// Write the binary audio content to a local file
	const writeFile = util.promisify(fs.writeFile)
	await writeFile('output.mp3', response.audioContent, 'binary')
	console.log('Audio content written to file: output.mp3')

	const uploadResponse = await cloudinary.uploader.upload('output.mp3', {
		resource_type: 'raw',
	})
	const mp3Link = uploadResponse.secure_url

    return mp3Link
}

export default genVoice
