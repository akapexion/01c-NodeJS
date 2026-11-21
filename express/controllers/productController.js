const productController = {
    products : (req, res) => {  //main api
    const ID = req.query.id;
    if(ID){
        res.send(`ALL PRODUCTS - ${ID}`);
    }
    else {
        res.send("ALL PRODUCTS");
    }
},

    singleProduct : (req, res) => {  //detail page api
    res.send(`GETTING PRODUCT OF ID : ${req.params.id}`);
}
}

export default productController; 