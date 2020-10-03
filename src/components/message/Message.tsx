import React, { FunctionComponent } from "react";
import classNames from "classnames";
import "./Message.scss";
import { Time, MessageStatus, MessageAudio } from "../index";

type Props = {
  avatar: string;
  text?: string;
  date?: Date;
  user?: any;
  isMe?: boolean;
  isReaded?: boolean;
  attachments?: any;
  isTyping?: boolean;
  audio?: string;
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
  audio,
}) => {
  const classes = classNames("message", {
    "message--me": isMe,
    "message--typing": isTyping,
    "message--image": attachments && attachments.length === 1,
    "message--audio": audio,
  });

  return (
    <div className={classes}>
      <div className="message__avatar">
        <img src={avatar} alt={`Avatar ${user?.fullname}`} />
      </div>
      <div className="message__content">
        <MessageStatus isMe={isMe} isReaded={isReaded} />
        <div className="message__info">
          {(text || isTyping || audio) && (
            <div className="message__bubble">
              {text && <p className="message__text">{text}</p>}
              {isTyping && (
                <div className="message__typing">
                  <span />
                  <span />
                  <span />
                </div>
              )}
              {audio && <MessageAudio audio={audio} />}
            </div>
          )}
          {attachments && (
            <div className="message__attachments">
              {attachments.map((item: any, index: number) => {
                return (
                  <div className="message__attachments-item" key={index}>
                    <img src={item.url} alt={item.filename} />
                  </div>
                );
              })}
            </div>
          )}
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
