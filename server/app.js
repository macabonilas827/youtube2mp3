require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");

const port = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(cors());

app.post("/api/v1/data", async (req, res) => {
  const videoID = req.body.data;
  const response = await axios.get(
    `https://youtube-mp36.p.rapidapi.com/dl?id=${videoID}`,
    {
      headers: {
        "X-RapidAPI-Key": process.env.API_KEY,
        "X-RapidAPI-Host": process.env.API_HOST,
      },
    }
  );
  const data = response.data;

  res.json({ success: true, data });
});

app.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});
