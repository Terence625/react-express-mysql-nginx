const { Router } = require("express");
const db = require("../database");

const { check, validationResult } = require("express-validator");
const router = Router();

router.use((req, res, next) => {
  console.log("Request made to /USERS ROUTE");
  next();
});

router.get("/", async (req, res) => {
  if (req.user) {
    console.log(req.user);
    const results = await db.pool.promise().query(`SELECT * FROM user_account`);
    res.status(200).send(results[0]);
  } else {
    res.status(403).send({ msg: "Not Authenticated" });
  }
});

router.get("/posts", (req, res) => {
  res.json({ route: "Posts" });
});

router.post(
  "/",
  [
    check("username").notEmpty().withMessage("username cannot be empty"),
    check("password").notEmpty().withMessage("password cannot be empty"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, password } = req.body;
    if (username && password) {
      db.pool.query(
        `INSERT INTO user_account (id, username, password) VALUES ("1", "${username}", "${password}")`,
        (err) => {
          if (err) throw err;
          res.status(201).send({ msg: "Create User" });
        },
      );
    }
  },
);

module.exports = router;
