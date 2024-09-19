const users = [
  { id: 1, firstName: "John", lastName: "Doe" },
  { id: 2, firstName: "James", lastName: "Bond" },
];

exports.updateUser = (request, response) => {
  const { id } = request.params;
  //   const { body } = request;

  //   const updatedUser = users.map((user) => {
  //     if (user.id === Number(id)) return (user.firstName = body.firstName), user;
  //   });

  if (id) {
    response.status(200).send(users);
  } else {
    response.status(400).send(`user ${id} update failed `);
  }
};
