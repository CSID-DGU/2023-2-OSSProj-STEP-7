import mongoose from "mongoose";

const TodoListSchema = new mongoose.Schema( {
    middle_exam : {
        type : String,
        required : true,
    },
    final_exam : {
        type : String,
        required : true,
    },
    middle_date : {
        type : Date,
        
    },
    final_date : {
        type : Date,
        
    },
    subjects : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Subject"
        },
    ],
    capacity : Number,
});

export const TodoList = mongoose.model("TodoList",TodoListSchema) ;
