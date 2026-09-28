import Todo from "../models/todoModels";

// get all todos
export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch todos",
      error: error.message,
    });
  }
};
//post
export const createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    const todo = await Todo.create({
      title,
    });
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({
      message: "Failed to Create todo",
      error: error.message,
    });
  }
};
//update
export const UpdateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;
    const todo = await Todo.findByIdAndUpdate(id, {
      title,
      completed,
    });
    if (!todo) {
      return res.status(404).json({
        message: "No Todo Found",
        error: error.message,
      });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({
      message: "Failed to Update Todo",
      error: error.message,
    });
  }
};
export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
      return res.status(404).json({
        message: "No Todo Found",
        error: error.message,
      });
    }
    res.status(200).json({
      message: "Todo Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete Todo",
      error: error.message,
    });
  }
};
