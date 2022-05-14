const mongoose = require("mongoose");
const { Schema } = mongoose;

const timetableSchema = new Schema({
  subjectCode: {
    type: String,
    required: true,
  },
  cl1: {
    type: Number,
    required: true,
  },
  cl1D: {
    type: String,
    required: true,
  },
  cl2: {
    type: Number,
    required: true,
  },
  cl2D: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Timetable", timetableSchema);
