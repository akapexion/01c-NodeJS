import express from 'express'
import productRoute from './routes/productRoute.js';
import demoRoute from './routes/demoRoute.js';

const app = express();

app.use(demoRoute);
app.use(productRoute);

app.listen(8000, () => {
    console.log("Server is running...");
});