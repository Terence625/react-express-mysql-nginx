const { Router } = require("express");
const db = require("../database");

const router = Router();

router.put("/:id", async (req, res, next) => {
  const clientId = req.params.id;
  const { name, phone, email } = req.body;
  const sql = `UPDATE client_info SET name = "${name}", phone = "${phone}", email = "${email}" WHERE client_id = "${clientId}"`;
  try {
    await db.pool.promise().query(sql);
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
