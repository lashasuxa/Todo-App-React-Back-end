import Todo from "../models/Todo.js";

export const getAllTodo = async (req, res) => {
  const data = await Todo.find();

  return res.status(200).json(data);
};

export const getWebTodos = async (req, res) => {
  const data = await Todo.find({ category: "web" });

  return res.status(200).json(data);
};

export const addTodo = async (req, res) => {
  const { todo, status } = req.body;
  let id = "3";
  await Todo.create({ todo, id, status });
  return res.status(200).json({ todo, id, status });
};
