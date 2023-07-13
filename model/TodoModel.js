const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");

const TodoSchema = new mongoose.Schema({
  _id: { type: String, default: uuid },
  title: { type: String, required: true },
  description: { type: String, required: true },
  isComplete: { type: Boolean, default: false },
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium",
  },
  creationDate: { type: Date, default: Date.now, required: true },
  lastModified: { type: Date },
  completedDate: { type: Date },
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
