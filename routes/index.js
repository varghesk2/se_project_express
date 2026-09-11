const router = require("express").Router();

const usersRouter = require("./user");
const itemsRouter = require("./items");

const { createUser, login } = require("../controllers/user");

router.post("/signup", createUser);
router.post("/signin", login);

router.use("/users", usersRouter);
router.use("/items", itemsRouter);

module.exports = router;
