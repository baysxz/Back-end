const { request, response } = require("express");

const users = [
  { id: 1, firstname: "Jenn", lastname: "Im" },
  { id: 2, firstname: "James", lastname: "Bond" },
];

exports.createUser = (request, response) => {
  users.push({ ...request.body });
  response.status(200).json({ message: "Succesfully created user", users });
};
