import { AuthRouter } from './auth.router.js';


class AppRouter {
	constructor() {
		this.authRouter = new AuthRouter();
	}


}

let appRouter = new AppRouter();

export {
	appRouter
};