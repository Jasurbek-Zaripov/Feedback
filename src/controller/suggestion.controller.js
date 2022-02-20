import { suggestionModule } from "../module/suggestion.module.js";
import { tokenService } from "../service/token.service.js";

class SuggestionController {
    async Create(req, res, next) {
        try {
            let { userId } = tokenService.decode(req.headers.token);
            req.body.userId = userId;
            const feedback = await suggestionModule.Create(req.body);
            return res.json({ success: true, messages: [], feedback });
        } catch (error) {
            next(error);
        }
    }

    async Delete(req, res, next) {
        try {
            let { userId } = tokenService.decode(req.headers.token);
            req.body.userId = userId;
            const feedback = await suggestionModule.Delete(req.body);
            return res.json({ success: true, messages: [], feedback });
        } catch (error) {
            next(error);
        }
    }
}
export { SuggestionController };