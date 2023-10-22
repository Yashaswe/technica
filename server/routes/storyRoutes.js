import express from 'express'

import { getUserStories, createStory } from '../controllers/storyController.js'
import protectRoute from '../middlewares/protectRoute.js'

const router = express.Router()

router.get('/:username', protectRoute, getUserStories)
router.post('/', protectRoute, createStory)

export default router
