const { Router } = require("express");
const db = require("../database");

const router = Router();

router.get("/", async (req, res, next) => {
  const { name } = req.query;
  try {
    const searchClientResult = await db.pool
      .promise()
      .query(`SELECT * FROM client_info WHERE name LIKE "%${name}%"`);
    res.status(200).json({ clientInfo: searchClientResult[0] });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
