const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const members = require("./Members.js");
const logger = require("./middleware/logger.js");

const app = express();

app.use(logger.logger);

app.get("/api/members", (req, res) => {
  res.json(members.data);
});

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
