import React from "react";
import classNames from "classnames";

import { Time, MessageStatus, MessageAudio, Avatar } from "../index";
import "./Message.scss";

const Message = ({ message }) => {
  const classes = classNames("message", {
    "message--me": message.user.isMe,
    "message--typing": message.isTyping,
    "message--image": message.attachments && message.attachments.length === 1,
    "message--audio": message.audio,
  });

  return (
    <div className={classes}>
      <div className="message__avatar">
        <Avatar user={message.user} />
      </div>
      <div className="message__content">
        <MessageStatus isMe={message.user.isMe} isReaded={message.isReaded} />
        <div className="message__info">
          {(message.text || message.isTyping || message.audio) && (
            <div className="message__bubble">
              {message.text && <p className="message__text">{message.text}</p>}
              {message.isTyping && (
                <div className="message__typing">
                  <span />
                  <span />
                  <span />
                </div>
              )}
              {message.audio && <MessageAudio audio={message.audio} />}
            </div>
          )}
          {message.attachments && (
            <div className="message__attachments">
              {message.attachments.map((item, index) => {
                return (
                  <div className="message__attachments-item" key={index}>
                    <img src={item.url} alt={item.filename} />
                  </div>
                );
              })}
            </div>
          )}
          {message.date && (
            <p className="message__date">
              <Time date={message.date} />
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
