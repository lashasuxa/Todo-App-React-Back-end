import Todo from "../models/Todo.js";

export const getAllTodos = async (req, res) => {
  const data = await Todo.find();
  return res.status(200).json(data);
};

export const addTodo = async (req, res) => {
  const { id, todo, status } = req.body;
  const newTodo = new Todo({ id, todo, status });
  await newTodo.save();
  return res.status(200).json(newTodo);
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const deletedTodo = await Todo.findOneAndRemove({ id });

  if (deletedTodo) {
    return res.status(200).json({ message: "Todo deleted successfully." });
  } else {
    return res
      .status(404)
      .json({ message: "No Todo found with the given id." });
  }
};

export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { todo, status } = req.body;
  const updatedTodo = await Todo.findOneAndUpdate(
    { id },
    { todo, status },
    { new: true }
  );
  return res.status(200).json(updatedTodo);
};
