import OpenAI from 'openai'
import dotenv from 'dotenv'

dotenv.config()

const openai = new OpenAI()

const genStory = async (query) => {
    try {
        const response = await openai.chat.completions.create({
            messages: [
                {
                    role: 'user',
                    content: 'Write a story of 90 words max with these key words: ' + query + '. Not include emojis',
                },
            ],
            model: 'gpt-3.5-turbo',
            temperature: 0.6,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })
    
        return { response: response.choices[0].message.content }
    }
    catch (err) {
        throw new Error(err)
    }
}

export default genStory
