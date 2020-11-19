import React from "react";
import orderBy from "lodash/orderBy";
import { Empty } from "antd";

import { DialogItem } from "../index";
import { Search } from "../index";
import user from "../../util/services/user";

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
        user={dialog.buddy}
        onSelect={onSelectDialog}
        messageCreatedAt={dialog.lastMessage.createdAt}
        messageText={dialog.lastMessage.text}
        messageIsReaded={dialog.lastMessage.read}
        messageUnreaded={dialog.lastMessage.unreaded}
        key={index}
        isSelected={dialog._id === currentDialogId}
        messageId={dialog._id}
        isMe={myId === dialog.lastMessage.user._id}
      />
    )) : null;


  const otherUserLists = globalUsers.length !== 0 ?
    orderBy(globalUsers).map((user, index) => (
      <DialogItem
        user={user}
        onSelect={onSelectDialog}
        messageCreatedAt={user.createdAt}
        messageText={null}
        messageIsReaded={null}
        messageUnreaded={null}
        key={index}
        isSelected={false}
        messageId={'id'}
        isMe={false}
      />
    )) : null;



  return (
    <div className="dialogs">
      <Search value={inputValue} onSearch={onSearch} />
      <div className="dialogs__list">
        {
          myFriendsList && myFriendsList
        }
        {
          otherUserLists && <div className="dialogs__global-search">Global search</div>
        }
        {
          otherUserLists && otherUserLists
        }
        {
          !myFriendsList && !otherUserLists && <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description="Ничего не найдено"
          />
        }
      </div>
    </div>
  );
};

export default Dialogs;
