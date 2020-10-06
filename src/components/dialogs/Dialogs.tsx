import React, { FunctionComponent } from "react";
import orderBy from "lodash/orderBy";
import { Empty } from "antd";

import { DialogItem } from "../index";
import { message } from "../../types/interfaces";
import { Search } from "../../components/index";

type Props = {
  items: message[];
  inputValue: string;
  onSearch: (value: string) => void;
  onSelectDialog: (id: string) => void;
};

const Dialogs: FunctionComponent<Props> = ({
  items,
  inputValue,
  onSearch,
  onSelectDialog,
}) => {
  return (
    <div className="dialogs">
      <Search value={inputValue} onSearch={onSearch} />
      <div className="dialogs__list">
        {items.length !== 0 ? (
          orderBy(items, ["created_at", "desc"]).map((item, index) => (
            <DialogItem onSelect={onSelectDialog} key={index} message={item} />
          ))
        ) : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="Ничего не найдено"
          />
        )}
      </div>
    </div>
  );
};

export default Dialogs;
