const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sitterSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    gender:{
        type:String,
        required:true,
    },
    age:{
        type:String,
        required:true,
    },
    educationBg:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    NINno:{
        type:String,
        required:true,
    },
    recommendersName:{
        type:String,
        required:true,
    },
    recommendersContact:{
        type:String,
        required:true,
    }
});

