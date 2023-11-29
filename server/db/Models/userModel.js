const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    isAdmin : {
        type :Boolean,
        required : true
    }
},{strict:true})

const User = mongoose.model('User',userSchema,'Users')
module.exports = User