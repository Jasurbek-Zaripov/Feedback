import { fileService } from '../service/file.service.js';

class AuthModule {

    async WriteUser(data) {
        try {
            return await fileService.WriteUser(data);
        } catch (error) {
            return error;
        }
    }
}

export const authModule = new AuthModule();