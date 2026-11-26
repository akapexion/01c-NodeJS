const productController = {
    readProducts : (req, res) => {
        res.send({
            productID : 1,
            productName : "Laptop"
        });
    }
}

export default productController;