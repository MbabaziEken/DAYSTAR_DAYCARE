const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    gender:{
        type:String,
        required:true,
    },
    educationBg:{
        type:String,
        required:true,
    },
    workingExp:{
        type:String,
        required:true,
    },
    placeOfResidence:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
});

adminSchema.plugin(passportLocalMongoose,{
    usernameField:"email",
});

module.exports = mongoose.model("Admin",adminSchema);