import mongoose from 'mongoose'

const storySchema = mongoose.Schema(
	{
		postedBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		query: {
			type: String,
			required: true,
		},
		response: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

const Story = mongoose.model('Story', storySchema)

export default Story
