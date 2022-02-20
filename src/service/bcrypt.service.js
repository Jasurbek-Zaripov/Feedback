import bcrypt from 'bcrypt';

class BcryptService {
    async Hash(password) {
        try {
            const salt = await bcrypt.genSalt();
            const hashPas = await bcrypt.hash(password, salt);

            return hashPas;
        } catch (error) {
            throw error;
        }
    }

    async Valid(password, hashPas) {
        try {
            return await bcrypt.compare(password, hashPas);
        } catch (error) {
            throw error;
        }
    }
}
export const bcryptService = new BcryptService();