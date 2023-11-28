import mongoose from "mongoose";

const AssignmentSchema = new mongoose.Schema({
  assignment_name: {
    type: String,
    required: true,
    maxLength: 50,
  },
  capacity: Number,
  assignment_status: String,
  assignment_date: Date,
  subjects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subject",
      index: true,
    },
  ],
});

export const Assignment = mongoose.model("Assignment", AssignmentSchema);