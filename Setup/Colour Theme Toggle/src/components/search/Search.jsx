import React, { useState } from "react";
import "./search.css";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  const [searchWord, setSearchWord] = useState("");

  const handleChange = (e) => {
    setSearchWord(e.target.value);
  };
  return (
    <>
      <div className="container search-container">
        <h1>Where do you want to go?</h1>
        <header>
          <div className="filter-options">
            <div className="search">
              <form action="">
                <div>
                  <AiOutlineSearch />
                  <input
                    placeholder="Search place"
                    type="text"
                    spellCheck={false}
                    onChange={handleChange}
                    value={searchWord}
                  />
                  <button className="btn">search</button>
                </div>
              </form>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Search;
