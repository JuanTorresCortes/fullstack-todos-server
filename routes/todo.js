const express = require("express");
const router = express.Router();
// logic from controller
const {
  allTodo,
  createTodo,
  editTodo,
  deleteTodo,
} = require("../controller/todoController");

// Endpoint to retrieve all todo
router.get("/all-todo", allTodo);

// Endpoint to create a new todo
router.post("/new-todo", createTodo);

// Endpoint to retrieve todo by id
router.put("/edit/:id", editTodo);

router.delete("/delete/:id", deleteTodo);

module.exports = router;
