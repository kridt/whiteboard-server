const express = require("express");
const app = express();
const port = 3030;
const cors = require("cors");

app.use(cors());

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
