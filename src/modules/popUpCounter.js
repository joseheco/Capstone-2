const commentsApi = async (id) => {
  const comments = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YVelr1C6jXi1hzKriDIQ/comments?item_id=${id}`;
  const response = await fetch(comments);
  const result = await response.json();
  return result;
};

const counterComment = async (id) => {
  const comments = await commentsApi(id);
  return comments.length;
};

const renderCounter = async (element, id) => {
  const numberCounter = await counterComment(id);
    element.innerHTML = `(${numberCounter}) Comments`;
};

export { commentsApi, renderCounter };