import { suggestionService } from '../service/suggestion.service.js';

class SuggestionModule {
    async Create(data) {
        try {
            return await suggestionService.Create(data);
        } catch (error) {
            throw error;
        }
    }
    async Delete(data) {
        try {
            return await suggestionService.Delete(data);
        } catch (error) {
            throw error;
        }
    }
}
export const suggestionModule = new SuggestionModule();