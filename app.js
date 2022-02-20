import express from 'express';
import dbConfig from './src/config/db-config.js';
import router from './src/router/app.router.js';

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());

// routers
app.use(router);

app.use((err, req, res, next) => {
    res.json({ a: err.message, b: err.stack, c: err.type });
})
    //connect
    ; (async () => {
        try {
            await dbConfig();
            app.listen(PORT, () => console.log('http://localhost:' + PORT));
        } catch (error) {
            console.error(error);
            process.exit(1);
        }
    })();