const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sittersSchema = new Schema({
name:{
    type:String,
    trim:true, 
},
amount:{
    type:number,
    required:true, 
},
paymentStatus:{
    type:Boolean,
    default:false, 
}

});

module.exports=mongoose.model("Sitters",sittersSchema);