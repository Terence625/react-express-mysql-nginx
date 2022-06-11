const { Router } = require("express");
const db = require("../database");

const router = Router();

router.post("/", async (req, res, next) => {
  const { name, phone, email } = req.body;
  try {
    const createClientResult = await db.pool
      .promise()
      .query(
        `INSERT INTO client_info (name, phone, email) VALUES ("${name}", "${phone}", "${email}")`,
      );
    res.status(200).send({ clientId: createClientResult[0].insertId });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
