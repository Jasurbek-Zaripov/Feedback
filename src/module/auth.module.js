import { userModel } from '../model/user.module.js';
import { bcryptService } from '../service/bcrypt.service.js';
import { fileService } from '../service/file.service.js';
import { tokenService } from '../service/token.service.js';
class AuthModule {

    async WriteUser(data) {
        try {
            const user = await fileService.WriteUser(data);
            return tokenService.code({ userId: user._id });
        } catch (error) {
            throw error;
        }
    }

    async checkUser({ nikname, password }) {
        try {
            const user = await userModel.findOne({ nikname }).exec();
            if (!user) throw new Error('User not found!');

            const isValid = await bcryptService.Valid(password, user.password);

            if (!isValid) throw new Error('Nikname or password invalid!');
            const token = tokenService.code({ userId: user._id });
            return token;
        } catch (error) {
            throw error;
        }
    }
}

export const authModule = new AuthModule();