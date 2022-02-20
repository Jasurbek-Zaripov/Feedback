import { Router } from 'express'
import { appRouter } from './app.router.js'

const router = Router()

router.get('/auth/Register',appRouter.authRouter.Register)

export default router