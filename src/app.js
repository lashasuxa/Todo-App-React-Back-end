import express from "express";
import connect from "./database/mongo.js";
import dotenv from "dotenv";
import {
  getAllTodos,
  addTodo,
  deleteTodo,
  updateTodo,
} from "./controllers/project-controller.js";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();

connect();
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).json({ message: "app works fine!" });
});

app.get("/api/todos", getAllTodos); // get all todos
app.post("/api/todos", addTodo); // create a new todo
app.delete("/api/todos/:id", deleteTodo); // delete a specific todo by id
app.put("/api/todos/:id", updateTodo); // update a specific todo by id

app.listen(3000);
