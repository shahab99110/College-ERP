const mongoose = require("mongoose");
const { Schema } = mongoose;

const subjectSchema = new Schema({
  department: {
    type: String,
    required: true,
  },
  subjectCode: {
    type: String,
    required: true,
  },
  subjectName: {
    type: String,
    required: true,
    trim: true,
  },
  totalLectures: {
    type: Number,
    default: 30,
  },
  year: {
    type: String,
  },
  semister: {
    type: Number,
  },
  attendence: {
    type: Schema.Types.ObjectId,
    ref: "attendence",
  },
  timetable: {
    type: Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model("subject", subjectSchema);
