const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");

const TodoSchema = new mongoose.Schema({
  _id: { type: String, default: uuid }, // Unique ID generated using uuid
  title: { type: String, required: true }, // Title of the todo (required)
  description: { type: String, required: true },
  isComplete: { type: Boolean, default: false },
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium",
  }, // Content of the blog (required)
  creationDate: { type: Date, default: Date.now, required: true },
  lastModified: { type: Date, default: Date.now, required: true }, // Timestamp for last modification (default: current date/time)
  completedDate: { type: Date },
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
