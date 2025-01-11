const mongoose = require("mongoose");

const db_url =
  "mongodb+srv://amitkkumar414:amit265@namastenode.58zqp.mongodb.net/?retryWrites=true&w=majority&appName=namastenode";
const connectDB = async () => {
  await mongoose.connect(db_url);
};

module.exports = connectDB;
