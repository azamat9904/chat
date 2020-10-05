import React, { FunctionComponent } from "react";
import { DialogItem } from "../index";
import { dialog } from "../../types/interfaces";
import orderBy from "lodash/orderBy";
import { Search } from "../../components/index";

type Props = {
  items: dialog[];
  inputValue: string;
  onSearch: (value: string) => void;
};

const Dialogs: FunctionComponent<Props> = ({ items, inputValue, onSearch }) => {
  return (
    <div className="dialogs">
      <Search value={inputValue} onSearch={onSearch} />
      {orderBy(items, ["created_at", "desc"]).map((item, index) => (
        <DialogItem key={index} user={item.user} message={item.message} />
      ))}
    </div>
  );
};

export default Dialogs;
