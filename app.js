const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const logger = require("./middleware/logger.js");
const members = require("./Members.js");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

//API call
{
  app.get("/api/members", (req, res) => {
    res.json(members.data);
  });

  app.get("/api/members/:name", (req, res) => {
    res.json(members.data.filter(item => item.name === req.params.name));
  });
}
//
app.use(logger.logger);
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
