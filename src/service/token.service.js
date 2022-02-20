import jwt from 'jsonwebtoken';

class TokenService {
    code(payload) {
        return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });
    }
    decode(token) {
        return jwt.verify(token, process.env.JWT_SECRET_KEY);
    }
}
export const tokenService = new TokenService();