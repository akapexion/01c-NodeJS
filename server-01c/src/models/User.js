import mongoose from 'mongoose';

const usersDesign = new mongoose.Schema({
    user_name : {
        type : String,
        required : true
    },

    user_email : {
        type : String,
    },

    user_password : {
        type : String,
        default : "123"
    },

    user_role : {
        type : String,
        enum : ["manager", "employee"],
        required : true
    }
}, {timestamps: true});

const User = mongoose.model("User", usersDesign);

export default User;