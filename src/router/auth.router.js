class AuthRouter {
	async Register(req, res, next) {
		try {
			res.send("hello");
		} catch (error) {
			next(error);
		}
	}

	async Login(req, res, next) {
		try {

		} catch (error) {
			next(error);
		}
	}
}

export {
	AuthRouter
};