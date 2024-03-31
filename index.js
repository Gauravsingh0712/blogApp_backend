const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT;

//middleware
app.use(express.json());

const blog = require("./routes/blog");

//mounting
app.use("/api/v1", blog);

//database connection
const connectWithDb = require("./config/Database");
connectWithDb();

app.listen(port, () => {
  console.log(`App is running on ${port} port`);
});

app.get("/", (req, res) => {
  res.send(`<h1> This is HOMEPAGE </h1>`);
  console.log("this is homescreen baby");
});
