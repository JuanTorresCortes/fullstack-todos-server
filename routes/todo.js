const express = require("express");
const router = express.Router();
// logic from controller
const {
  allTodo,
  createTodo,
  editTodo,
  deleteTodo,
  updateCompleat,
} = require("../controller/todoController");

// Endpoint to retrieve all todo
router.get("/all-todo", allTodo);

// Endpoint to create a new todo
router.post("/create-one", createTodo);

// Endpoint to retrieve todo by id and update
router.put("/update-one/:id", editTodo);
router.put("/update-Completed/:id", updateCompleat);

router.delete("/delete-one/:id", deleteTodo);

module.exports = router;
