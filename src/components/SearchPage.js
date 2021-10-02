import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import SearchInput from "./SearchInput";
import Results from "./Results";
import search from "../services/search";
import logo from "../searchlogo.png";
import starItem from "../services/starItem";
import getStarredItems from "../services/getStarredItems";

const SearchPage = () => {
  const [lastQuery, setLastQuery] = React.useState("");
  const [results, setResults] = React.useState([]);
  const [starredItems, setStarredItems] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showStarred, setShowStarred] = React.useState(false);

  const handleSearch = (query) => {
    setLoading(true);
    search(query)
      .then((result) => {
        setResults(result);
        setLastQuery(query);
        setLoading(false);
      })
      .catch(() => {
        setResults([
          {
            type: "error",
            message: "An error has ocurred, please try again later",
          },
        ]);
        setLoading(false);
      });
  };

  const handleStarredItems = () => {
    setLoading(true);
    getStarredItems().then((s) => {
      setStarredItems(s);
      setLoading(false);
    });
  };

  const handleOnStar = (starred) => {
    setLoading(true);
    starItem(starred)
      .then(() => {
        handleSearch(lastQuery);
        handleStarredItems();
        setLoading(false);
      })
      .catch(() => {
        setResults([
          {
            type: "error",
            message: "An error has ocurred, please try again later",
          },
        ]);
        setLoading(false);
      });
  };

  React.useEffect(() => {
    handleSearch();
    handleStarredItems();
  }, []);

  return (
    <main className="SearchPage">
      <header className="SearchPage__Header">
        <div className="SearchPage__TopBar">
          <div className="SearchPage__Branding">
            <img src={logo} alt="yalung's search logo" />
          </div>
          <SearchInput onSearch={(s) => {
            handleSearch(s);
            setShowStarred(false);
          }} />
        </div>
      </header>
      <section className="SearchPage__Content">
        {loading && (
          <div className="SearchPage__Overlay">
            <FontAwesomeIcon icon={faSpinner} />
          </div>
        )}
        <div className="SearchPage__StarCount" onClick={() => setShowStarred(!showStarred)}>
          <strong>{starredItems.length}</strong> items have been starred, so far
        </div>
        <Results results={showStarred ? starredItems : results} onStar={handleOnStar} resultTitle={showStarred ? 'Starred Items:' : 'Search Results:'} />
      </section>
      <footer className="SearchPage__Footer">
        Yalung Tang - All Rights Reserved 2021
      </footer>
    </main>
  );
};

export default SearchPage;
