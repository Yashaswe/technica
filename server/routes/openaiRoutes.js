import express from 'express';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();
const openaiRouter = express.Router();
const openai = new OpenAI();

openaiRouter.post('/generateStory', async (req, res) => {
    try {
        const prompt = req.body.prompt;
    
        const response = await openai.chat.completions.create({
            messages: [
                {
                    role: 'user',
                    content: prompt
                },
            ],
            model: 'gpt-3.5-turbo',
            temperature: 0.6,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        });
    
        res.status(200).send({
            bot: response.choices[0].message.content
        })
    }
    catch (error) {
        console.log(error);
        res.status(500).send( {error} );
    }
});

export default openaiRouter;