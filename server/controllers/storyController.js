import Story from '../models/Story.js'
import User from '../models/User.js'

// @desc Get one user's stories
// @route GET /story/:username
// @access Private
const getUserStories = async (req, res) => {
	const { username } = req.params

	try {
		const user = await User.findOne({ username })
			.select('-password')
			.lean()
			.exec()

		if (!user) {
			return res.status(404).json({ error: 'User not found' })
		}

		const stories = await Story.find({ postedBy: user._id }).sort({
			createdAt: -1,
		})

		return res.status(200).json(posts)
	} catch (err) {
		res.status(500).json({ error: err.message })
		console.log('Error in getUserStories: ', err.message)
	}
}

// @desc Create a new story
// @route POST /story
// @access Private
const createStory = async (req, res) => {
	try {
		const { username, query } = req.body
		if (!username || !query) {
			return res
				.status(400)
				.json({ error: 'PostedBy and Emoji Query are required' })
		}

		const user = await User.findOne({ username })
		if (!user) {
			return res.status(400).json({ error: 'User not found.' })
		}

		if (user._id.toString() !== req.user._id.toString()) {
			return res.status(401).json({ error: 'Unauthorized to create post.' })
		}

		// Call Open AI API to generate story from the Emoji Query
		const response = 'abc'

		const newStory = new Story({
			postedBy: req.user._id,
			query,
			response,
		})

		await newStory.save()
		return res
			.status(201)
			.json({ message: 'Story created successfully.', newStory })
	} catch (err) {
		res.status(500).json({ error: err.message })
		console.log('Error in createStory: ', err.message)
	}
}

export { getUserStories, createStory }
