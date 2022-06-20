const { Router } = require("express");
const db = require("../database");

const router = Router();

router.post("/", async (req, res, next) => {
  const { name, phone, email } = req.body;
  try {
    const createPersonResult = await db.pool
      .promise()
      .query(
        `INSERT INTO person_info (name, phone, email) VALUES ("${name}", "${phone}", "${email}")`,
      );
    res.status(200).send({ personId: createPersonResult[0].insertId });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
