const express = require("express");
const UserRouter = require("./router/user");

const app = express();

app.use(express.json());

const port = 8000;

app.use(UserRouter);

// app.use("/users", UserRouter);
// app.use("/users/user", UserRouter);

app.listen(port, () => {
  console.log(`server running at a http://localhost:${port}/`);
});

// app.get("/", (request, response) => {
//   response.send("hello i am server");
// });

// app.listen(port, () => {
//   console.log(`Server listening on port http://localhost:${port}`);
// });
