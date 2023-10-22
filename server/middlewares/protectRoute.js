import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const protectRoute = async (req, res, next) => {
	try {
		const token = req.cookies.jwt

		if (!token) {
			return res.status(401).json({ error: 'Unauthorized' })
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET)
		const user = await User.findById(decoded.userId).select('-password').lean().exec()

		req.user = user
		next()
	} catch (err) {
		res.status(500).json({ error: err.message })
		console.log('Error in protectRoute: ', err.message)
	}
}

export default protectRoute
