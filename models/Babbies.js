const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const babbiesSchema = new Schema({
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
    nextOfKin:{
        type:String,
        required:true,
    },
    babbyNo:{
        type:String,
        required:true,
    },
    parentsName:{
        type:String,
        required:true,
    },
    parentsContact:{
        type:String,
        required:true,
    },
    healthStatus:{
        type:String,
        required:true,
    },
    allergies:{
        type:String,
        required:true, 
    },
    favorites:{
        type:String,
        required:true,
    }
});

