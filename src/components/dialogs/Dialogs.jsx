import React from "react";
import orderBy from "lodash/orderBy";
import { Empty } from "antd";

import { DialogItem } from "../index";
import { Search } from "../index";

const Dialogs = ({
  items,
  inputValue,
  onSearch,
  onSelectDialog,
  currentDialogId,
  myId
}) => {
  return (
    <div className="dialogs">
      <Search value={inputValue} onSearch={onSearch} />
      <div className="dialogs__list">
        {items.length !== 0 ? (
          orderBy(items, ["created_at", "desc"]).map((item, index) => (
            <DialogItem
              onSelect={onSelectDialog}
              key={index}
              message={item}
              isSelected={item._id === currentDialogId}
              myId={myId}
            />
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
