const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", function(req, res) {
  res.send("<h1>Hello from local express server!!</h1>");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
