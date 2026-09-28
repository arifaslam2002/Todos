import express from "express";
import {
  createTodo,
  deleteTodo,
  getTodos,
  UpdateTodo,
} from "../Controller/todoController.js";

const router = express.Router();
router.get("/", getTodos);
router.post("/", createTodo);
router.put("/:id", UpdateTodo);
router.delete("/:id", deleteTodo);

export default router;