import { AuthRouter } from './auth.router.js';
import { Router } from 'express';


class AppRouter {
	constructor() {
		this.authRouter = new AuthRouter();
		this.router = Router();
		this.createRout();
	}

	createRout() {
		this.router.get('/auth/Register', this.authRouter.Register);
	}

	getRouter() {
		return this.router;
	}

}

let appRouter = new AppRouter();

export default appRouter.getRouter();

