const app = require("./app");
const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://tryconnect:5dZch%24epw%40bs!.z@cluster0.fuqz6wh.mongodb.net/";
const PORT = 3000;
// const { MONGO_URL, PORT = 3000 } = process.env;
mongoose.set("strictQuery", true);

mongoose
  .connect(MONGO_URL)

  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
