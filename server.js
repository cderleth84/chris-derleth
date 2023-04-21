// Imports
const express = require("express");
const app = express();
const path = require("path");

// Static Files
// app.use(express.static("dervelopment"));
// app.use(express.static("public"));
// app.use(express.static("public/css"));
// app.use(express.static("public/img"));

// Use this when wanting to get different website pages
// app.use("/", express.static(path.join(__dirname + "dervelopment")));

// Use this when serving files from a different directory
// app.use(express.static(path.join(__dirname, "dervelopment")));

// 404 Error Message
app.use((req, res) => {
  res.status(404);
  res.send("<h1>Error 404: Resource not found</h1>");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));
app.use(express.static(path.join(__dirname, "public/img")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});
