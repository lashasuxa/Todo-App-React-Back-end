import express from "express";
import connect from "./database/mongo.js";
import dotenv from "dotenv";
import {
  getAllTodo,
  getWebTodos,
  addTodo,
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

app.get("/api/alert", json({ message: "allert message" }));
app.get("/api/projects", getAllTodo);
app.get("/api/projects/web", getWebTodos);

app.post("/api/projects", addTodo);

app.listen(3000);
