const search = (search = '') => {
  const formattedSearch = encodeURIComponent(search.trim());

  return fetch(`http://localhost:3001/search?q=${formattedSearch}&_limit=10`)
    .then((response) => response.json())
    .then((data) => data);
};

export default search;
