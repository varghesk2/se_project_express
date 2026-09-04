require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const usersRouter = require("./routes/user");
const itemsRouter = require("./routes/items");

const { createUser, login } = require("./controllers/user");

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

app.post("/signup", createUser);

app.post("/signin", login);

app.use("/users", usersRouter);

app.use("/items", itemsRouter);

app.use((req, res) => {
  res.status(NOT_FOUND).send({
    message: "Requested resource not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
