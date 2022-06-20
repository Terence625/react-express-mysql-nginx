const { Router } = require("express");
const db = require("../database");

const router = Router();

router.put("/:id", async (req, res, next) => {
  const personId = req.params.id;
  const { name, phone, email } = req.body;
  const sql = `UPDATE person_info SET name = "${name}", phone = "${phone}", email = "${email}" WHERE person_id = "${personId}"`;
  try {
    await db.pool.promise().query(sql);
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
