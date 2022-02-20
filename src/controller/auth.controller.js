import { authModule } from "../module/auth.module.js";
import { upload } from '../config/multer.config.js';

class AuthController {
    async Register(req, res, next) {
        try {
            let data = await new Promise((file, err) => upload(req, res, errr => {
                if (errr) return err(errr);
                return file({ file: req.file, body: req.body });
            }));

            let token = await authModule.WriteUser(data);
            return res.json({ success: true, messages: [], token });
        } catch (error) {
            next(error);
        }
    }

    async Login(req, res, next) {
        try {
            console.log(req.body);
            const token = await authModule.checkUser(req.body);
            return res.json({ success: true, messages: [], token });
        } catch (error) {
            return next(error);
        }
    }
}

export { AuthController };