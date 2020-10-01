import React, { FunctionComponent } from "react";
import classNames from "classnames";
import "./Message.scss";
import { Time, MessageStatus } from "../index";

type Props = {
  avatar: string;
  text?: string;
  date?: Date;
  user?: any;
  isMe?: boolean;
  isReaded?: boolean;
  attachments?: any;
  isTyping?: boolean;
};

const Message: FunctionComponent<Props> = ({
  avatar,
  user,
  text,
  date,
  isMe,
  isReaded,
  attachments,
  isTyping,
}) => {
  const classes = classNames("message", {
    "message--me": isMe,
    "message--typing": isTyping,
    "message--image": attachments && attachments.length === 1,
  });

  return (
    <div className={classes}>
      <div className="message__avatar">
        <img src={avatar} alt={`Avatar ${user?.fullname}`} />
      </div>
      <div className="message__content">
        <MessageStatus isMe={isMe} isReaded={isReaded} />
        <div className="message__info">
          {(text || isTyping) && (
            <div className="message__bubble">
              {text && <p className="message__text">{text}</p>}
              {isTyping && (
                <div className="message__typing">
                  <span />
                  <span />
                  <span />
                </div>
              )}
            </div>
          )}
          <div className="message__attachments">
            {attachments &&
              attachments.map((item: any) => {
                return (
                  <div className="message__attachments-item">
                    <img src={item.url} alt={item.filename} />
                  </div>
                );
              })}
          </div>
          {date && (
            <p className="message__date">
              <Time date={date} />
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
