import { TodoList } from "../../models/todolist.model.js";


export const queryTodoLists = async () => {
    return TodoList.find().populate("subjects");
};

export const queryTodoList = async (_, { todolistId }) => {
    return TodoList.findById(todolistId).populate("subjects");
};

export const querySubjectTodoLists = async (_, __, { subject }) => {
    return TodoList.find({ subjects: subject._id });
};