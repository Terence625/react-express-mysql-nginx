const { Router } = require("express");
const db = require("../database");

const router = Router();

router.get("/", async (req, res, next) => {
  const { name } = req.query;
  try {
    const searchPersonResult = await db.pool
      .promise()
      .query(`SELECT * FROM person_info WHERE name LIKE "%${name}%"`);
    res.status(200).json({ personList: searchPersonResult[0] });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
