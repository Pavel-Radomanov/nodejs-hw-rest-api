const app = require("./app");
const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// dotenv.config({ path: "./.env" });

// console.log(process.env.MONGO_URL);
// mongoose
//   .connect(process.env.MONGO_URL)

//   .then(() => {
//     console.log("MongoDB successfuly connected");
//   })
//   .catch((err) => {
//     console.log(err);
//     process.exit(1);
//   });

const MONGO_URL =
  "mongodb+srv://tryconnect:5dZch%24epw%40bs!.z@cluster0.fuqz6wh.mongodb.net/";
mongoose.set("strictQuery", true);

mongoose
  .connect(MONGO_URL)

  .then(() => {
    console.log("Database connection successful");
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000");
// });
