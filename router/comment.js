const express = require("express");
const { getComments } = require("../controller/comments/getComments");

const commentRouter = express.Router();

commentRouter.get("/comments", getComments);
module.exports = commentRouter;
