const users = [
  { id: 1, firstname: "John", lastname: "Joe" },
  { id: 2, firstname: "James", lastname: "Doakes" },
];

exports.getUsers = (request, response) => {
  response.status(200).json({
    users: users,
  });
};
