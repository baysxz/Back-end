const express = require("express");

const { getUsers } = require("../controller/users/getUsers");
const { getUser } = require("../controller/users/getUser");
const { createUser } = require("../controller/users/createUser");
const { deleteUser } = require("../controller/users/deleteUser");
const { updateUser } = require("../controller/users/updateUser");
const { getComments } = require("../controller/comments/getComments");
const {
  getCommentsByPostId,
} = require("../controller/comments/getCommentsByPostId");
const { updateComment } = require("../controller/comments/updateComment");
const { postComments } = require("../controller/comments/postComments");
const { deleteComments } = require("../controller/comments/deleteComments");

const userRouter = express.Router();

userRouter
  .get("/users", getUsers)
  .get("/users/:id", getUser)
  .post("/addUser", createUser)
  .delete("/deleteUser/:id", deleteUser)
  .put("/users/:id", updateUser)
  .get("/comments/getComments", getComments)
  .get("/post/:postId", getCommentsByPostId)
  .put("/comment/:commentId", updateComment)
  .post("/comment/postComments", postComments)
  .delete("/comment/deleteComment/:commentId", deleteComments);

module.exports = userRouter;
