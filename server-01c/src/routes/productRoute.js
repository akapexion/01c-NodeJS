import express from 'express'
import productController from '../controllers/productController.js';

const productRoute = express.Router();

productRoute.get("/products", productController.allProducts);

export default productRoute;