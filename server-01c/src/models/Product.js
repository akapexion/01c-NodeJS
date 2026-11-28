import mongoose from 'mongoose';

const productsDesign = new mongoose.Schema({
    product_name : {
        type : String,
        required : true
    },

    product_price : {
        type : Number,
        required : true
    },

    product_qty : {
        type : Number,
        required : true
    }

   
}, {timestamps: true});

const Product = mongoose.model("Product", productsDesign);

export default Product;