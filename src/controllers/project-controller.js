import Todo from "../models/Todo.js";

export const getAllTodos = async (req, res) => {
  const data = await Todo.find();
  return res.status(200).json(data);
};

export const addTodo = async (req, res) => {
  const { todo, status, category } = req.body;
  const newTodo = new Todo({ todo, status, category });
  await newTodo.save();
  return res.status(200).json(newTodo);
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndRemove(id);
  return res.status(200).json({ message: "Todo deleted successfully." });
};

export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { todo, status, category } = req.body;
  const updatedTodo = await Todo.findByIdAndUpdate(
    id,
    { todo, status, category },
    { new: true }
  );
  return res.status(200).json(updatedTodo);
};
