import React from "react";
import classNames from "classnames";
import { format } from "date-fns";
import isToday from "date-fns/isToday";

import { MessageStatus, Avatar } from "../index";
import "./DialogItem.scss";

const getMessageTime = (created_at) => {
  const date = new Date(created_at);

  if (isToday(date)) {
    return format(date, "k:m");
  }
  return format(date, "dd.MM.yy");
};


const DialogItem = ({
  user,
  onSelect,
  isSelected,
  messageCreatedAt,
  messageText,
  messageIsReaded,
  messageUnreaded,
  messageId,
  isMe
}) => {
  const classes = classNames("dialogs__item", {
    "dialogs__item--online": user.isOnline,
    "active": isSelected,
  });

  return (
    <div className={classes} onClick={() => onSelect(messageId)}>
      <div className="dialogs__item-avatar">
        <Avatar user={user} />
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>{user.fullname}</b>
          <span>{getMessageTime(messageCreatedAt)}</span>
        </div>
        <div className="dialogs__item-info-bottom">
          <p>{messageText}</p>
          <MessageStatus isMe={isMe} isReaded={messageIsReaded} />
          {messageUnreaded && messageUnreaded > 0 && (
            <div className="dialogs__item-info-bottom-count">
              {messageUnreaded > 9 ? "+9" : messageUnreaded}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DialogItem;
