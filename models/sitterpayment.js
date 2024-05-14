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
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("sitterpayment", sitterPaymentSchema);
