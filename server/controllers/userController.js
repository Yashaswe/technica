import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import setCookie from '../helpers/setCookie.js'

// @desc Get one user
// @route GET /user/:username
// @access Private
const getUser = async (req, res) => {
	const { username } = req.body
	try {
		const user = await User.findOne({ username }).select('-password').lean()
		if (!user) {
			return res.status(404).json({ error: 'User not found' })
		}
		return res.status(200).json({ user })
	} catch (err) {
		res.status(500).json({ error: err.message })
		console.log('Error in getUser: ', err.message)
	}
}

// @desc Create new user
// @route POST /user/signup
// @access Public
const signupUser = async (req, res) => {
	try {
		const { username, password } = req.body
		const user = await User.findOne({ username }).select('-password').lean()

		if (user) {
			return res.status(400).json({ error: 'User already exists' })
		}

		if (password.length < 5) {
			return res.status(400).json({ error: 'Password too short' })
		}

		const salt = Number(process.env.SALT)
		const hashedPwd = await bcrypt.hash(password, salt)

		const newUser = new User({
			username,
			password: hashedPwd,
		})
		await newUser.save()

		if (!newUser) {
			return res.status(500).json({ error: 'Unsuccessful Sign Up' })
		}

		setCookie(newUser._id, res)
		delete newUser.password
		return res.status(201).json({ newUser })
	} catch (err) {
		res.status(500).json({ error: err.message })
		console.log('Error in createNewUser: ', err.message)
	}
}

// @desc Login user
// @route POST /user/login
// @access Public
const loginUser = async (req, res) => {
	try {
		const { username, password } = req.body
		const user = await User.findOne({ username }).lean()
		const isPwdCorrect = await bcrypt.compare(password, user?.password || '')

		if (!user || !isPwdCorrect) {
			return res.status(400).json({ error: 'Invalid username or password' })
		}

		setCookie(user._id, res)
		delete user.password
		return res.status(200).json({ user })
	} catch (err) {
		res.status(500).json({ error: err.message })
		console.log('Error in loginUser: ', err.message)
	}
}

// @desc Logout user
// @route /POST /user/logout
// @access Public
const logoutUser = async (req, res) => {
	if (!req.cookies.jwt) {
		return res.status(401).json({ error: 'User is not logged in' })
	}

	try {
		res.cookie('jwt', '', { maxAge: 1 })
		return res.status(200).json({ message: 'User logged out' })
	} catch (err) {
		res.status(500).json({ error: err.message })
		console.log('Error in loginUser: ', err.message)
	}
}

export { getUser, signupUser, loginUser, logoutUser }
