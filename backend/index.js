const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("<h2>Hi There</h2>");
});

const port = process.env.PORT || 3001;

app. listen(port, () => console.log(`listening on port ${port}`));

