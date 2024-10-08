const comments = [
  {
    commentId: 1,
    postId: 1,
    like: 33,
    message: "pm",
    createdTime: "Fri Sep 20 2024 09:02:22",
  },

  {
    commentId: 2,
    postId: 22,
    like: 44,
    message: "hi",
    createdTime: "Sat Sep 21 2024 09:02:22",
  },
  {
    commentId: 3,
    postId: 13,
    like: 55,
    message: "ugluuning",
    createdTime: "Sat Sep 21 2024 09:06:22",
  },
];

// exports.deleteComments = (request, response) => {
//   const { commentId } = request.params;
//   comments.splice(Number(commentId - 1), Number(commentId));
//   response.status(200).send(comments);
// };

// filter ashiglaj hiih
exports.deleteComments = (request, response) => {
  const { commentId } = request.params;
  const newComments = comments.filter(
    (comment) => comment.commentId !== Number(commentId)
  );
  response.status(200).json(newComments);
};
