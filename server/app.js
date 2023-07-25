require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 3000;

const data = [{ id: 1, name: "Item 1" }];

//middlewares
app.use(express.json());
app.use(cors());

app.get("/api/v1/data", (req, res) => {
  res.send(data);
});

app.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});
