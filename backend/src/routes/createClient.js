const { Router } = require("express");
const db = require("../database");

const router = Router();

router.post("/", async (req, res) => {
  const { name, phone, email } = req.body;
  const createClientResult = await db.pool
    .promise()
    .query(
      `INSERT INTO client_info (name, phone, email) VALUES ("${name}", "${phone}", "${email}")`,
    );
  console.log(createClientResult);
  res.status(200).send({clientId: createClientResult[0].insertId});
});

module.exports = router;
