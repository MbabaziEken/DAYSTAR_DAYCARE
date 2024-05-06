const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    fullName:{
        type: String,
        required: true,
    },
    gender:{
        type:String,
        required:true,
    },
    EBG:{
        type:String,
        required:true,
    },
    WorkingExprience:{
        type:String,
        required:true,
    },
    PlaceofResidence:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    }
});

adminSchema.plugin(passportLocalMongoose,{
    usernameField:"email",
});

module.exports = mongoose.model("Admin",adminSchema);