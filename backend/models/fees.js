const mongoose = require("mongoose");
const { Schema } = mongoose;

const feesSchema = new Schema({
  studentRegNo:String,
  fees:[Object]
 
});

module.exports = mongoose.model("Fees", feesSchema);
