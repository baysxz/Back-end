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

exports.updateComment = (request, response) => {
  const { commentId } = request.params;
  const { body } = request;

  const updatedComment = comments.map((comment) => {
    if (comment.commentId === Number(commentId)) {
      comment.like = body.like;
      comment.message = body.message;
      return comment;
    }
  });
  if (updatedComment) {
    response.status(200).json({ comments: updatedComment, message: "UPDATED" });
  } else {
    response.status(400).send(`comment ${commentId} failed`);
  }
};
