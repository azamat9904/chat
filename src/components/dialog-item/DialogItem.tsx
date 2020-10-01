import React, { FunctionComponent } from "react";
import { Time, MessageStatus } from "../index";
import "./DialogItem.scss";
import classNames from "classnames";
import { userDialog } from "../../types/interfaces";

type Props = {
  user: userDialog;
  message?: string;
  unreaded?: number;
};

const getAvatar = (avatar?: string, fullname?: string) => {
  if (avatar) return <img src={avatar} alt={`${fullname} avatar`} />;
};

const DialogItem: FunctionComponent<Props> = ({ user, message, unreaded }) => {
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
          {/* <Time date={new Date()} /> */}
          <span>13:03</span>
        </div>
        <div className="dialogs__item-info-bottom">
          <p>{message}</p>
          <MessageStatus isMe={user?.isMe} isReaded={user?.isReaded} />
          {unreaded && unreaded > 0 && (
            <div className="dialogs__item-info-bottom-count">
              {unreaded > 9 ? "+9" : unreaded}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DialogItem;
