import mongoose from "mongoose";

const SubjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 50,
  },
  credit: Number,
  classification: String,
  capacity: Number,
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      index: true,
    },
  ],
  lecture_time: String,
  lecture_date: String,
  lecture_room: String,
  absent_count: Number,
  late_count: Number,
  nothandle_count: Number,
  assignments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Assignment",
    },
  ]
});

export const Subject = mongoose.model("Subject", SubjectSchema);