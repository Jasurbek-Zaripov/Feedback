import { AuthController } from '../controller/auth.controller.js';
import { Router } from 'express';


class AppRouter {
	constructor() {
		this.authController = new AuthController();
		this.router = Router();
		this.createRout();
	}

	createRout() {
		this.router.post('/auth/register', this.authController.Register);
		this.router.post('/auth/login', this.authController.Login);
	}
}

let appRouter = new AppRouter();

export default appRouter.router;

