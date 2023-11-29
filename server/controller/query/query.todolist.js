import { TodoList } from "../../models/todolist.model.js";


// 모든 할 일 목록 조회
export const getAllTodoLists = async () => {
    try {
        const todoLists = await TodoList.find() ;
        return todoLists ;
    } catch (error) {
        throw new Error ('Error getting todo lists : ${error.message}');
    }
};

// 특정 과목의 할 일 목록 조회
export const getTodoListsBySubject = async (subjectID) => {
    try {
        const todoLists = await TodoList.find({subject:subjectID});
        return todoLists ;
    } catch (error) {
        throw new Error ('Error getting todo lists by subjects: ${error.message}')
    }
};

// 새로운 할 일 추가
export const addTodo = async (todoData) => {
    try {
        const newTodo = new TodoList (todoData) ;
        const savedTodo = await newTodo.save() ;
        return savedTodo ;
    } catch (error) {
        throw new Error('Error adding todo: ${error.message}') ;
    }
} ;


//특정 할 일 업데이트
export const updateTodo = async (todoId, updatedData) => {
    try {
        const updatedTodo = await TodoList.findByIdAndUpdate(
            todoId,
            updatedData
            { new : true}
        ) ;
        return updatedTodo;
    } catch (error) {
        throw new Error ('Error updating todo : ${error.message}');
    }
} ;

// 특정 할 일 삭제
export const deleteTodo = async (todoId) => {
    try {
        const deletedTodo = await TodoList.findByIdAndDelete(todoId);
        return deletedTodo;
    } catch (error) {
        throw new Error(`Error deleting todo: ${error.message}`);
    }
};