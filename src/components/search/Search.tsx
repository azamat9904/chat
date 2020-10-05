import React, { FunctionComponent } from "react";
import { Input } from "antd";

import "./Search.scss";

type Props = {
  value: string;
  onSearch: (value: string) => void;
};

const Search: FunctionComponent<Props> = ({ value, onSearch }) => {
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
