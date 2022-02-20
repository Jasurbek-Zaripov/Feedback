import mongoose from "mongoose";
import './dotenv-config.js';

export default async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
        });
        console.log('\n --------------------\n| database connected |\n --------------------\n');
    } catch (error) {
        throw error;
    }
};