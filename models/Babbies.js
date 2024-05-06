const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const babbiesSchema = new Schema({
    Babyname:{
        type: String,
        trim: true,
    },
    Age:{
        type:String,
        trim:true,
    },
    gender:{
        type:String,
        trim:true,
    },
    Favorites:{
        type:String,
        trim:true,
    },
    HealthStatus:{
        type:String,
        trim:true,
    },
    ParentsContact:{
        type:String,
        trim:true,
    },
    ParentsName:{
        type:String,
        trim:true,
    },
    NextOfKin:{
        type:String,
        trim:true,
    },
    IdNo:{
        type:String,
        trim:true,
    },
    Allergies:{
        type:String,
        trim:true, 
    },
});

module.exports = mongoose.model("Babbies",babbiesSchema);