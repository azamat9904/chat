import React from "react";
import orderBy from "lodash/orderBy";
import { Empty } from "antd";

import { DialogItem } from "../index";
import { Search } from "../index";

const Dialogs = ({
  dialogs,
  globalUsers,
  inputValue,
  onSearch,
  onSelectDialog,
  currentDialogId,
  myId
}) => {
  const myFriendsList = dialogs.length !== 0 ?
    orderBy(dialogs, ["created_at", "desc"]).map((dialog, index) => (
      <DialogItem
        onSelect={onSelectDialog}
        key={index}
        message={dialog}
        isSelected={dialog._id === currentDialogId}
        myId={myId}
        globalUser={false}
      />
    )) : null;


  const otherUserLists = globalUsers.length !== 0 ?
    orderBy(globalUsers).map((dialog, index) => (
      <DialogItem
        onSelect={onSelectDialog}
        key={index}
        message={dialog}
        isSelected={dialog._id === currentDialogId}
        myId={myId}
        globalUser={true}
      />
    )) : null;


  return (
    <div className="dialogs">
      <Search value={inputValue} onSearch={onSearch} />
      <div className="dialogs__list">
        {dialogs.length !== 0 ? (
          orderBy(dialogs, ["created_at", "desc"]).map((dialog, index) => (
            <DialogItem
              user={dialog.buddy}
              onSelect={onSelectDialog}
              messageCreatedAt={dialog.lastMessage.createdAt}
              messageText={dialog.lastMessage.text}
              messageIsReaded={dialog.lastMessage.isReaded}
              messageUnreaded={dialog.lastMessage.unreaded}
              key={index}
              isSelected={dialog._id === currentDialogId}
              myId={myId}
              messageId={dialog._id}
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
