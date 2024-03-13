const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const UserRouter = require("./routes/route.user");
const port = 3000;

app.use(bodyParser.json());
app.use("/api", UserRouter);

app.listen(port, () => {
  console.log("Server aktif");
  console.log(`http://localhost:${port}`);
});
