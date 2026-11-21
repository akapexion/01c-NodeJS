import express from "express"; //import
import simpleController from "./controllers/simpleController.js";
import productController from "./controllers/productController.js";

const app = express(); //execute

app.get("/", simpleController.hello);

app.get("/about", simpleController.about);

app.get("/api", simpleController.api);

app.get("/products", productController.products);

app.get("/products/:id", productController.singleProduct);

app.listen(3000, () => {
    console.log("Server is running on : http://localhost:3000");
});