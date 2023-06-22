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

app.get("/api/alltodos", getAllTodos);
app.post("/api/todos", addTodo);
app.delete("/api/todos/:id", deleteTodo);
app.put("/api/todos/:id", updateTodo);

app.listen(3000);
