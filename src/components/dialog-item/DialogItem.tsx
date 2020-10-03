import React, { FunctionComponent } from "react";
import { MessageStatus } from "../index";
import "./DialogItem.scss";
import classNames from "classnames";
import { dialog } from "../../types/interfaces";
import { format } from "date-fns";
import isToday from "date-fns/isToday";

const getMessageTime = (created_at: string) => {
  const date = new Date(created_at);
  if (isToday(date)) {
    return format(date, "k:m");
  }
  return format(date, "dd.MM.yy");
};

const getAvatar = (avatar?: string, fullname?: string) => {
  if (avatar) return <img src={avatar} alt={`${fullname} avatar`} />;
};

const DialogItem: FunctionComponent<dialog> = ({ user, message }) => {
  const classes = classNames("dialogs__item", {
    "dialogs__item--online": user?.online,
  });

  return (
    <div className={classes}>
      <div className="dialogs__item-avatar">
        {getAvatar(user?.avatar, user.fullname)}
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>{user.fullname}</b>
          <span>{getMessageTime(message.created_at)}</span>
        </div>
        <div className="dialogs__item-info-bottom">
          <p>{message?.text}</p>
          <MessageStatus isMe={user?.isMe} isReaded={message?.isReaded} />
          {message?.unreaded && message?.unreaded > 0 && (
            <div className="dialogs__item-info-bottom-count">
              {message?.unreaded > 9 ? "+9" : message?.unreaded}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DialogItem;
