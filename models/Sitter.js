const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const sittersSchema = new Schema({
    sitterName:{
        type: String,
        trim: true,
        unique:true,
    },
    gender:{
        type:String,
           trim:true,
    },
    age:{
        type:String,
        trim:true,
    },
    educationBackground:{
        type:String,
        trim:true,
    },
    location:{
        type:String,
        trim:true,
    },
    contact:{
        type:String,
        trim:true,
    },
    nin:{
        type:String,
        trim:true,
    },

    nextOfKin:{
        type:String,
        trim:true,
    },
    recommendersName:{
        type:String,
        trim:true,
    },
    recommendersContact:{
        type:String,
        trim:true,
    },
    sitterNumber:{
        type:String,
        trim:true,
    },
    availability:{
        type:Boolean,
        default:false,
    }
});

module.exports=mongoose.model("Sitters",sittersSchema);