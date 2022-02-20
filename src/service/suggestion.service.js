import { suggModel } from "../model/suggestion.model.js";

class SuggestionService {
    async Create({ title, category, dec, userId }) {
        try {
            const suggestion = new suggModel();
            suggestion.author = userId;
            suggestion.title = title;
            suggestion.decription = dec;
            suggestion.category = category;

            await suggestion.validate();
            return await suggestion.save();
        } catch (error) {
            throw error;
        }
    }

    async Delete({ userId, suggestionId }) {
        try {
            return await suggModel.findByIdAndDelete({
                author: userId,
                _id: suggestionId
            }).exec();

        } catch (error) {
            throw error;
        }
    }
}
export const suggestionService = new SuggestionService();