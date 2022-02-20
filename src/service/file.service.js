import { userModel } from '../model/user.module.js';

class FileService {

    async WriteUser({ file, body }) {
        try {
            let user = new userModel();
            user.username = body.username;
            user.avatar = file.originalname;
            user.mime_type = file.mimetype;
            user.nikname = '@' + (body.nikname.replace(/^\@/, '') || '');
            user.profession = body.profession;
            user.buffer = file.buffer;

            await user.validate();

            return await user.save();
        } catch (error) {
            throw error;
        }
    }
}

export const fileService = new FileService();
