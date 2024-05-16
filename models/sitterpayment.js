const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sitterPaymentSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  amount: {
    type: String,
    required: true,
  },
  paymentStatus: {
    type: String,
    trim:true,
  },
});

module.exports = mongoose.model("sitterpayment", sitterPaymentSchema);
