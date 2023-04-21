const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("../dervelopment"));

// app.get("/", (req, res) => {
// res.sendFile(__dirname + "/index.html");
// });

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
