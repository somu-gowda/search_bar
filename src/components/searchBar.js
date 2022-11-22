import React, { useState } from "react";
var data = require("../searchData.json");

const SearchBar = () => {
  // State
  const [value, setValue] = useState("");

  // Onchange
  const onChange = (event) => {
    setValue(event.target.value);
  };

  //   Onsearch
  const onSearch = (searchTerm) => {
    setValue(searchTerm);
  };

  return (
    <div className="App">
      <h1>Search</h1>

      <div className="search-container">
        <div className="search-inner">
          <input type="text" value={value} onChange={onChange} />
          <button onClick={() => onSearch(value)}> Search </button>
        </div>
        <div className="dropdown">
          {data &&
            data.fields
              .filter((item) => {
                const searchTerm = value.toLowerCase();
                const fullName = item.label.toLowerCase();

                return (
                  searchTerm &&
                  fullName.startsWith(searchTerm) &&
                  fullName !== searchTerm
                );
              })
              .slice(0, 10)
              .map((item) => (
                <div
                  onClick={() => onSearch(item.label)}
                  className="dropdown-row"
                  key={item.key}
                >
                  {item.label}
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
