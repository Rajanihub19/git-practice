const express = require("express");
const router = require("./apis/route/route");
const app = express();
app.use(express.json());
app.use("/api", router);
app.listen(8000, () => {
  console.log(".....server started at 8000");
});
