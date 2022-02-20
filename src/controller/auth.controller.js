import { authModule } from "../module/auth.module.js";
import { upload } from '../config/multer.config.js';

class AuthController {
    async Register(req, res, next) {
        try {
            let data = await new Promise((file, err) => upload(req, res, errr => {
                if (errr) return err(errr);
                return file({ file: req.file, body: req.body });
            }));

            let result = await authModule.WriteUser(data);
            res.send({ result });
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

export { AuthController };