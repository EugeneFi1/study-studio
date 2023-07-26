const express = require("express");

const app = express();
const PORT = 3000;
const cors = require("cors");

app.use(cors());

app.use("/config", require("./controllers/config.js"));

app.listen(PORT, () => {
  console.log(`🚀 -> ${PORT}`);
});
