import { Schema, model } from "mongoose";

const todoSchema = new Schema({
  todo: {
    type: Schema.Types.String,
    required: true,
  },
  id: {
    type: Schema.Types.String,
    required: true,
  },
  status: {
    type: Schema.Types.String,
    required: true,
  },
});

const Todo = model("Todo", todoSchema);

export default Todo;
