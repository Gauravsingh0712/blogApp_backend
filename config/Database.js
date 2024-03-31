const mongoose = require("mongoose");

// load environment variables from a .env file into process.env
require("dotenv").config();

//function for database connection
const connectWithDb = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("db connection successfully"))
    .catch((error) => {
      console.log("db is facing connection issue");
      console.error(error);
      process.exit(1);
    });
};
module.exports = connectWithDb;
