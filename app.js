import express from 'express';
import dbConfig from './src/config/db-config.js';

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());

//connect
(async () => {
    try {
        await dbConfig();
        app.listen(PORT, () => console.log('http://localhost:' + PORT));
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})();