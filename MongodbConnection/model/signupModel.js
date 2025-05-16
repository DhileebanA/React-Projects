const mongodb = require("mongoose");

const userSchema = mongodb.Schema({
    email:{type:String,unique:true},
    password:{type:String},
    username:{type:String},
    mob:{type:String},
    age:{type:Number,default:18},
})

const User = mongodb.model("users",userSchema);
module.exports = User;