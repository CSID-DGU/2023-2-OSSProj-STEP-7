import { Assignment } from "../../models/assignment.model.js";
import { Subject } from "../../models/subject.model.js";

export const mutCreateAssignment = async (
  _,
  { assignment_name, subjectId, capacity, assignment_date, assignment_status }
) => {
  
  if (!assignment_name || assignment_name.trim() === "") {
    throw new Error("Subject name is required");
  }
  if (assignment_name.length > 50) {
    throw new Error("Subject name should not exceed 50 characters");
  }
  const assignment = new Assignment({
    assignment_name,
    capacity,
    subjects: [subjectId],
    assignment_status,
    assignment_date,
  });

  const subject = await Subject.findById(subjectId);
  if (!subject) {
    throw new Error("Subject not found");
  }

  subject.assignments.push(assignment._id);
  await subject.save();

  return assignment.save();

};

export const mutAddAssignmentToSubject = async (
  _,
  { assignmentId, subjectId },
) => {
  const assignment = await Assignment.findById(assignmentId);

  if (!assignment) {
    throw new Error("Assignment not found");
  }
  if (!assignment.subjects.includes(subjectId)) {
    assignment.subjects.push(subjectId);
    await assignment.save();
  }
  return Assignment.populate(assignment, "subjects");
};