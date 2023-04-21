// Imports
const express = require("express");
const app = express();
const path = require("path");

// Static Files
app.use(express.static("dervelopment"));
app.use(express.static("public"));
app.use(express.static("public/css"));
app.use(express.static("public/img"));

// Use this when wanting to get different website pages
// app.use("/", express.static(path.join(__dirname + "dervelopment")));

// Use this when serving files from a different directory
// app.use(express.static(path.join(__dirname, "dervelopment")));

app.use("/home", express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/img")));
// app.use(express.static(path.join(__dirname, "public/js")));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public/views/index.html"));
// });

app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome to root URL of Server");
});

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/views/index.html");
//   console.log(res.sendFile(__dirname + "/views/index.html"));
// });

app.get("/hello", (req, res) => {
  res.set("Content-Type", "text/html");
  res.status(200).send("<h1>Hello GFG Learner!</h1>");
});

app.use(express.json());
app.post("/", (req, res) => {
  const { name } = req.body;
  res.send(`Welcome ${name}`);
});

// 404 Error Message
app.use((req, res) => {
  res.status(404);
  res.send("<h1>Error 404: Resource not found!</h1>");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
