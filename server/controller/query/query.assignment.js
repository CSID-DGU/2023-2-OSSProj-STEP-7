import { Assignment } from "../../models/assignment.model.js";

export const queryAssignments = async () => {
  return Assignment.find().populate("subjects");
};

export const queryAssignment = async (_, { assignmentId }) => {
  return Assignment.findById(assignmentId).populate("subjects");
};

export const querySubjectAssignments = async (_, __, { subject }) => {
  return Assignment.find({ subjects: subject._id });
};