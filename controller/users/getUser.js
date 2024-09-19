const { response } = require("express");

const users = [
  { id: 1, firstname: "John", lastname: "Joe" },
  { id: 2, firstname: "James", lastname: "Doakes" },
];
exports.getUser = (request, response) => {
  const { id } = request.params;
  const user = users.find((user) => user.id === Number(id));

  if (user) {
    response.status(200).json({
      user,
    });
  } else {
    response.status(400).send(`User: ${id} non existence`);
  }
};
