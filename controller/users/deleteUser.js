const users = [
  { id: 1, firstname: "John", lastname: "Joe" },
  { id: 2, firstname: "James", lastname: "Doakes" },
];

exports.deleteUser = (request, response) => {
  const { id } = request.params;
  users.splice(Number(id - 1), Number(id));
  response.status(200).send(users);
};
