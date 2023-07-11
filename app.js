var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// cors is imported to enable Cross-Origin Resource Sharing (CORS)
const cors = require("cors");

// dotenv is imported to load environment variables from .env file
require("dotenv").config();

// connect to MongoDB
const { mongooseConnect } = require("./mongooseDB");
// The mongooseConnect function is called to establish a connection to the MongoDB database.
mongooseConnect();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
// imports the router module for handling todo-related routes.
const todoRouter = require("./routes/todo");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// app.use(cors()) enables Cross-Origin Resource Sharing.
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
// sets the router for the '/blogs' path.
app.use("/todo", todoRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
