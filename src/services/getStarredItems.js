const getStarredItems = () => {
  return fetch("http://localhost:3001/search?starred=true")
    .then((response) => response.json())
    .then((data) => data);
};

export default getStarredItems;
