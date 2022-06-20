const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const local = require("./strategies/local");
const authRoute = require("./routes/auth");
const createClinetRoute = require("./routes/createPerson");
const searchPersonRoute = require("./routes/searchPerson");
const updatePersonRoute = require("./routes/updatePerson");
const db = require("./database");
const store = new session.MemoryStore();

const app = express();

app.use(
  session({
    secret: "some secret",
    cookie: { maxAge: 30000 },
    resave: false,
    saveUninitialized: false,
    store,
  }),
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  console.log(`${req.method} - ${req.url}`);
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "*");
  next();
});
app.use(passport.initialize());
app.use(passport.session());
app.use("/auth", authRoute);
app.use("/createPerson", createClinetRoute);
app.use("/searchPerson", searchPersonRoute);
app.use("/updatePerson", updatePersonRoute);
app.get("/:id", async (req, res, next) => {
  const personId = req.params.id;
  try {
    const searchPersonResult = await db.pool
      .promise()
      .query("SELECT * FROM person_info WHERE person_id = ?", [personId]);
    res.status(200).json({ personInfo: searchPersonResult[0] });
  } catch (err) {
    next(err);
  }
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("internal server error");
});

const port = process.env.PORT || 3000;

db.init()
  .then(() => {
    app.listen(port, () => console.log(`listening on port ${port}`));
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

// const users = [
//     {name: "Terence", age: 28},
//     {name: "Jade", age: 23}
// ];

// const posts = [
//     {title: "post1", content: "content1"},
//     {title: "post1", content: "content1"}
// ]

// app.get("/", (req, res) => {
//     res.send("<h2>Hi There!</h2>");
// });

// app.get("/users", (req, res) => {
//     res.send(users)
// });

// app.get("/users/:name", (req, res) => {
//     const { name } = req.params;
//     const user = users.find((user) => user.name === name);
//     if (user) res.status(200).send(user)
//     else res.status(404).send("Not Found");
// });

// app.get("/posts", (req, res) => {
//     const { title } = req.query;
//     if (title) {
//         const post = posts.find((post) => post.title === title);
//         if (post) res.status(200).send(post);
//         else res.status(404).send("Not Found")
//     }
//     res.status(200).send(posts);
// });

// app.post("/", (req, res) => {
//     console.log(req.body);
//     res.status(201).send("Create user");
// });

// function validateAuthToken(req, res, next) {
//     console.log("Inside Validate Auth Token");
//     console.log(req.headers);
//     const { authroization } = req.headers;
//     if (authroization && authroization === "123") {
//         next();
//     } else {
//         res.status(403).send({ msg: "Forbidden. Incorrect Credentials"});
//     }
// }

// app.post("/posts", validateAuthToken, (req, res) => {
//     const post = req.body;
//     posts.push(post);
//     res.status(201).send(post);
// });

// function validateCookie(req, res, next) {
//     const { cookies } = req;
//     if ("session_id" in cookies) {
//         console.log("Session ID Exists");
//         if (cookies.session_id === "12345") next();
//         else res.status(403).send({ msg: "Not Authenticated" });
//     } else res.status(403).send({ msg: "Not Authenticated" });
// }

// app.get("/signin", (req, res) => {
//     res.cookie("session_id", "12345");
//     res.status(200).send({ msg: "Logged In" });
// });

// app.get("/protected", validateCookie, (req, res) => {
//     res.status(200).send({ msg: "You are Authroized" });
// });

// app.post("/login", (req, res) => {
//     console.log(req.sessionID);
//     const { username, password } = req.body;
//     if (username && password) {
//         if (req.session.authenticated) {
//             res.json(req.session);
//         } else {
//             if (password === "123") {
//                 req.session.authenticated = true;
//                 req.session.user = {
//                     username, password
//                 };
//                 res.json(req.session);
//             } else {
//                 res.status(403).json({ msg: "Bad Credentials" });
//             }
//         }
//     } else res.status(403).json({ msg: "Bad Credentials" });
// });
