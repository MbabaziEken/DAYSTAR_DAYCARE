const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const sittersSchema = new Schema({
    SitterName:{
        type: String,
        trim: true,
    },
    Gender:{
        type:String,
           trim:true,
    },
    Age:{
        type:String,
        trim:true,
    },
    EducationBackground:{
        type:String,
        trim:true,
    },
    Location:{
        type:String,
        trim:true,
    },
    Contact:{
        type:String,
        trim:true,
        unique:true,
    },
    nin:{
        type:String,
        trim:true,
    },

    NextOfKin:{
        type:String,
        trim:true,
    },
    RecommendersName:{
        type:String,
        trim:true,
    },
    RecommendersContact:{
        type:String,
        trim:true,
    }
});

module.exports=mongoose.model("Sitters",sittersSchema);