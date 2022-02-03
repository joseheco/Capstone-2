const commentsAPi = [{"creation_date":"2022-02-02",
"username":"Jose","comment":"Great Food"},
{"comment":"Great Food","username":"Jose",
"creation_date":"2022-02-02"},{"comment":
"I dont like it","creation_date":"2022-02-02",
"username":"Fernando"},{"username":"Jose",
"comment":"i want this plate","creation_date":"2022-02-02"},
{"comment":"ok","username":"Raul","creation_date":"2022-02-02"},
{"comment":"First time I try this food, I liked it a lot, I think I will try it again very soon.",
"username":"Raul","creation_date":"2022-02-02"}]

const counterComment = () => {
  const comment = commentsAPi;
  return comment.length;
};

module.exports = counterComment;
