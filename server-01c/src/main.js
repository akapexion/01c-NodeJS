import express from 'express'
import productRoute from './routes/productRoute.js';
import dbConfig from './config/dbConfig.js';
const app = express();

dbConfig();



app.use(productRoute);


app.listen(8000, () => {
    console.log("Server is running...");
});