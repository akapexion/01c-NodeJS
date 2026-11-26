import express from 'express'
import demoController from '../controllers/demoController.js';

const demoRoute = express.Router();

demoRoute.get("/", demoController.homeLogic);
demoRoute.get("/api", demoController.apiRes);

export default demoRoute;
