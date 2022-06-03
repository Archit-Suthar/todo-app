const express = require("express");
const cors = require("cors");
const PORT = 5000;
const connectToMongo = require("./db");
const router = require("./routes/todos");
const app = express();

connectToMongo();

app.use(express.json());
app.use(cors());
app.use("/", router);
app.use("/addnote", router);
app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
