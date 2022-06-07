const { Router } = require("express");
const db = require("../database");

const router = Router();

router.get("/", (req, res) => {
    res.sendStatus(200);
});

router.get("/posts", (req, res) => {
    res.json({ route: "Posts" });
});

router.post("/", (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        db.pool.query(`INSERT INTO user_account (id, username, password) VALUES ("1", "${username}", "${password}")`, err => {
            if (err) throw err;
            res.status(201).send({ msg: "Create User" });
        }); 
    }
});

module.exports = router;