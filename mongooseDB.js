const mongoose = require("mongoose");

// function to connect MongoDB must be imported to App.js and invoked
const mongooseConnect = async () => {
  try {
    // Connect to MongoDB using ATLAS URI
    await mongoose.connect(process.env.ATLAS_URI);
    console.log("Connected to MongoDB ✅");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { mongooseConnect };
