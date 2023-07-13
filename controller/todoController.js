const Todo = require("../model/TodoModel");

// Controller function to create a new todo
const createTodo = async (req, res) => {
  try {
    // Create a new todo instance with the data from the request body
    const newTodo = await Todo.create(req.body);

    // Save the new todo to the database
    const savedTodo = await newTodo.save();

    // Return a success response with the saved todo data
    res.status(200).json({ success: true, data: savedTodo });
  } catch (error) {
    console.log(error);
    // Return an error response if there's an error during the process
    res.status(500).json({ success: false, message: error.message });
  }
};

// Controller function to retrieve all todo
const allTodo = async (req, res) => {
  try {
    // Find all todo in the database
    const allTodo = await Todo.find({});

    // Return a success response with the retrieved todo data
    res.status(200).json({ success: true, data: allTodo });
  } catch (error) {
    console.log(error);
    // Return an error response if there's an error during the process
    res.status(500).json({ success: false, message: error.message });
  }
};

const editTodo = async (req, res) => {
  try {
    const { id } = req.params;

    req.body.lastModified = Date.now();
    req.body.isComplete = false;

    // Find the todo by ID in the database
    const updateTodo = await Todo.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    if (!updateTodo) {
      return res.status(400).json({ message: "Todo not found" });
    }
    res.status(200).json({ success: true, data: updateTodo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const updateCompleat = async (req, res) => {
  try {
    const { id } = req.params;
    req.body.completedDate = Date.now();

    // Find the todo by ID in the database
    const updateTodo = await Todo.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    if (!updateTodo) {
      return res.status(400).json({ message: "Todo not found" });
    }
    res.status(200).json({ success: true, data: updateTodo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await Todo.findOneAndDelete({ _id: id });
    res.status(200).json({ success: true, data: deletedTodo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = { allTodo, createTodo, editTodo, deleteTodo, updateCompleat };
