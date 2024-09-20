const users = [
  { id: 1, firstName: "John", lastName: "Doe" },
  { id: 2, firstName: "James", lastName: "Bond" },
];

exports.updateUser = (request, response) => {
  const { id } = request.params;
  const { body } = request;

  const updatedUser = users.map((user) => {
    if (user.id === Number(id)) {
      user.firstName = body.firstName;
      user.lastName = body.lastName;
      return user;
    }

    return user;
  });

  if (updatedUser) {
    response
      .status(200)
      .json({ users: updatedUser, message: "Succesfully updated" });
  } else {
    response.status(400).send(`user ${id} failed to update `);
  }
};
