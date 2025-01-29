const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors());

app.get("/hire/nodejs-developers", (req, res) => {
  const current_datetime = new Date().toISOString(); //to get current datetime

  res.status(200).json({
    email: "chamberezigbo@gmail.com",
    current_datetime,
    github_url: "<https://github.com/yourusername/your-repo>",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
