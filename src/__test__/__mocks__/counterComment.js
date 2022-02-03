const commentsApi = async () => {
  const comments = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YVelr1C6jXi1hzKriDIQ/comments?item_id=52933`;
  const response = comments;
  const result = await response.json();
  return result;
};

const counterComment = () => {
  const comments = commentsApi();
  return comments.length;
};


export { counterComment };