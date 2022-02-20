import { AuthController } from '../controller/auth.controller.js';
import { Router } from 'express';


class AppRouter {
	constructor(authController = AuthController) {
		this.authController = authController;
		this.router = Router();
		this.createRout();
	}

	createRout() {
		this.router.post('/auth/register', this.authController.Register);
	}
}

let appRouter = new AppRouter(new AuthController());

export default appRouter.router;

