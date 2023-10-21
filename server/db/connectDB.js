import mongoose from 'mongoose'

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		console.log(`MongoDB connected: ${conn.connection.host}`)
	} catch (err) {}
}

export default connectDB
