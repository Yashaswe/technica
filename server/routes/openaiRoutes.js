const express = require('experss');
const dotenv = require('dotenv');
dotenv.config();

const router = express.Router();
const OpenAI = require('openai');

const openai = new OpenAI();

router.post('/generateStory', async (req, res) => {
    try {
        const prompt = res.body.prompt;

        const response = await openai.chat.completions.create({
            messsages: [
                {
                    role: 'user',
                    content: prompt
                },
            ],
            model: 'gpt-3.5-turbo',
            temperatur: 0.6,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        });

        res.status(200).send({
            bot: response.choices[0].message.content
        })
    }
    catch {
        res.status(500).send( {error} )
    }
});

module.exports = router;
