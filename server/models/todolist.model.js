import mongoose from "mongoose";

const TodoListSchema = new mongoose.Schema( {
    todo_name : {
        type : String
        required : true,
    },
    status : {
        type : String,
        enum : ["not-started","completed", "in-progress"],
        default : "not-started",
    },
    due_date : {
        type : Date,
        required : true,
    }
    subject : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Subject"
        required : true,
    },
});

const TodoList = mongoose.model("TodoList",TodoListSchema) ;
export default TodoList ; 