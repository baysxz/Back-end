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

exports.getComments = (request, response) => {
  response.status(200).json({
    messages: "all comments",
    comments: comments,
  });
};
