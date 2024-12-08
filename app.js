const express = require("express");
const accounts = require("./accounts");
const accountsRouter = require("./apis/accounts/routers");

const app = express();
const port = 8000;
app.use(express.json());
app.use("/api/accouts", accountsRouter);

app.listen(port, () => {
  console.log(`server is running at port ${port} `);
});
