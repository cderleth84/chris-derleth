const express = require("express");
const app = express();

app.use(express.static("dervelopment"));

app.get("./dervelopment", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
