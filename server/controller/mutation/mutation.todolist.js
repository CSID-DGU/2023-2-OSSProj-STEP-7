import { Subject } from "../../models/subject.model.js";
import { TodoList } from "../../models/todolist.model.js";

export const mutCreateTodoList = async (
_,
{ middle_exam,final_exam,middle_date,final_date,subjects}
) => {

if (!middle_exam || middle_exam.trim() === "") {
    throw new Error("Middle exam name is required");
}
if (middle_exam.length > 50) {
    throw new Error("Middle exam name should not exceed 50 characters");
}
if (!final_exam || final_exam.trim() === "") {
    throw new Error("Final exam name is required");
}
if (final_exam.length > 50) {
    throw new Error("Final exam name should not exceed 50 characters");
}

const todolist = new TodoList({
    middle_exam,
    final_exam,
    middle_date,
    final_date,
    subjects,
    capacity,
});

const subject = await Subject.findById(subjectId);
if (!subject) {
    throw new Error("Subject not found");
}

subject.todolist.push(todolist._id);
await subject.save();

return todolist.save();

};

export const mutAddTodoListToSubject = async (
_,
{ todolistId, subjectId },
) => {
const todolist = await TodoList.findById(todolistId);

if (!todolist) {
    throw new Error("TodoList not found");
}
if (!todolist.subjects.includes(subjectId)) {
    todolist.subjects.push(subjectId);
    await todolist.save();
}
return TodoList.populate(todolist, "subjects");
};