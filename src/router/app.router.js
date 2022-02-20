import { AuthController } from '../controller/auth.controller.js';
import { SuggestionController } from '../controller/suggestion.controller.js';
import { Router } from 'express';


class AppRouter {
	constructor() {
		this.authController = new AuthController();
		this.suggestionController = new SuggestionController();
		this.router = Router();
		this.createRout();
	}

	createRout() {
		this.router.post('/auth/register', this.authController.Register);
		this.router.post('/auth/login', this.authController.Login);
		this.router.post('/suggestion', this.suggestionController.Create);
		this.router.delete('/suggestion', this.suggestionController.Delete);
	}
}

let appRouter = new AppRouter();

export default appRouter.router;

