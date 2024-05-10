const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const babbiesSchema = new Schema({
    babyName:{
        type: String,
        trim: true,
    },
    age:{
        type:String,
        trim:true,
    },
    gender:{
        type:String,
        trim:true,
    },
    favorites:{
        type:String,
        trim:true,
    },
    healthStatus:{
        type:String,
        trim:true,
    },
    parentsContact:{
        type:String,
        trim:true,
    },
    parentsName:{
        type:String,
        trim:true,
    },
    nextOfKin:{
        type:String,
        trim:true,
    },
    idNo:{
        type:String,
        trim:true,
    },
    allergies:{
        type:String,
        trim:true, 
    },
    assignedSitter:{
        type:String,
        trim:true, 
    },
    checkIn:{
        type:String,
        trim:true, 
    },
    checkOut:{
        type:String,
        trim:true, 
    },
    timeSpent:{
        type:String,
        trim:true, 
    },
    broughtBy:{
        type:String,
        trim:true, 
    },
    pickedBy:{
        type:String,
        trim:true, 
    },
    
    
});

module.exports = mongoose.model("Babbies",babbiesSchema);