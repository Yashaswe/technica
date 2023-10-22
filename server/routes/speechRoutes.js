import express from 'express';
import textToSpeech from '@google-cloud/text-to-speech';
import fs from 'fs';
import util from 'util';
import dotenv from 'dotenv';
dotenv.config();

const speechRouter = express.Router();
const client = new textToSpeech.TextToSpeechClient();

speechRouter.post('/', async (req, res) => {
  const text = req.body.prompt;

  // Construct the request
  const request = {
    input: {
        text: text
    },
    voice: {
        languageCode: 'en-US', 
        'name': 'en-US-Neural2-I'
    },
    audioConfig: {
        audioEncoding: 'LINEAR16',
        effectsProfileId: [
        'small-bluetooth-speaker-class-device'
        ],
        'pitch': 0,
        'speakingRate': 1
    },
  };

  const [response] = await client.synthesizeSpeech(request);
  // Write the binary audio content to a local file
  const writeFile = util.promisify(fs.writeFile);
  await writeFile('output.mp3', response.audioContent, 'binary');
  console.log('Audio content written to file: output.mp3');
});

export default speechRouter;