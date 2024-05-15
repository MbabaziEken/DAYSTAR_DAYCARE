const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const parentsSchema = new Schema({
    ParentsName:{
        type: String,
        trim: true,
    },
    BabyName:{
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
    NextOfKinsContact:{
        type:String,
        trim:true,
    }
});

module.exports=mongoose.model("Parents",parentsSchema);