const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("../dervelopment"));
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
