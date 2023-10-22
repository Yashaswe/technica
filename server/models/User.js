import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
	{
		username: {
			type: String,
			unique: true,
			required: true,
		},
		password: {
			type: String,
			minLengh: 5,
			required: true,
		},
		stories: {
			type: [mongoose.Schema.Types.ObjectId],
			ref: 'Story',
			default: [],
		},
	},
	{
		timestamps: true,
	}
)

const User = mongoose.model('User', userSchema)

export default User
