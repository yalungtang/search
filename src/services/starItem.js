const starItem = (result) => {

  return fetch(`http://localhost:3001/search/${result.id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...result, starred: !result.starred }),
  })
    .then((response) => response.json())
    .then((data) => data);
};

export default starItem;
