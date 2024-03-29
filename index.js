const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("app is running successfully");
});

app.get("/", (req, res) => {
  res.send(`<h1> This is HOMEPAGE </h1>`);
  console.log("this is homescreen baby");
});
