const express = require('experss');
const router = express.Router();
const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');

const client = new textToSpeech.TextToSpeechClient();

router.post('/generateVoice', async (req, res) => {
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

  // Performs the text-to-speech request
  const [response] = await client.synthesizeSpeech(request);
  // Write the binary audio content to a local file
  const writeFile = util.promisify(fs.writeFile);
  await writeFile('output.mp3', response.audioContent, 'binary');
  console.log('Audio content written to file: output.mp3');
});

quickStart();