const express = require("express");
const userRouter = require("./router/user");
const app = express();

app.use(express.json());

const port = 8000;

app.use(userRouter);

app.listen(port, () => {
  console.log(`server running at a http://localhost:${port}/`);
});
