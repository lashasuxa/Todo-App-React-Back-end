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
  await Todo.findOneAndRemove({ id });
  return res.status(200).json({ message: "Todo deleted successfully." });
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
