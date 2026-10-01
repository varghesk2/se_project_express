require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes");
const { NOT_FOUND } = require("./utils/errors");

const app = express();

const { PORT = 3001, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI || "mongodb://localhost:27017/wtwr_db")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(cors());
app.use(express.json());

app.use(router);

app.use((req, res) => {
  res.status(NOT_FOUND).send({
    message: "Requested resource not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});