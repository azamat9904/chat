import React from "react";
import { Input } from "antd";

import "./Search.scss";


const Search = ({ value, onSearch }) => {
  return (
    <div className="dialogs-search">
      <Input.Search
        placeholder="Поиск среди контактов"
        onChange={(e) => onSearch(e.target.value)}
        value={value}
      />
    </div>
  );
};

export default Search;
