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
  message,
  onSelect,
  isSelected,
}) => {
  const classes = classNames("dialogs__item", {
    "dialogs__item--online": message.user.isOnline,
    "active": isSelected,
  });

  return (
    <div className={classes} onClick={() => onSelect(message._id)}>
      <div className="dialogs__item-avatar">
        <Avatar user={message.user} />
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>{message.user.fullname}</b>
          <span>{getMessageTime(message.date)}</span>
        </div>
        <div className="dialogs__item-info-bottom">
          <p>{message.text}</p>
          <MessageStatus isMe={message.user.isMe} isReaded={message.isReaded} />
          {message.unreaded && message.unreaded > 0 && (
            <div className="dialogs__item-info-bottom-count">
              {message.unreaded > 9 ? "+9" : message.unreaded}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DialogItem;
