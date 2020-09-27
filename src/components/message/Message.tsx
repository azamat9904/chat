import React, { FunctionComponent } from "react";
import distanceInWordsToNow from "date-fns/formatDistanceToNow";
import ruLocal from "date-fns/locale/ru/index";
import classNames from "classnames";
import "./Message.scss";

import readSvg from "../../assets/img/readed.svg";
import noReadSvg from "../../assets/img/noreaded.svg";

type Props = {
  avatar: string;
  text: string;
  date: Date;
  user?: any;
  isMe: boolean;
  isReaded?: boolean;
  attachments?: any;
};

const Message: FunctionComponent<Props> = ({
  avatar,
  user,
  text,
  date,
  isMe,
  isReaded,
  attachments,
}) => {
  const classes = classNames("message", { "message--me": isMe });
  return (
    <div className={classes}>
      <div className="message__avatar">
        <img src={avatar} alt={`Avatar ${user?.fullname}`} />
      </div>
      <div className="message__content">
        {isMe && isReaded && (
          <img
            className="message__icon-readed"
            src={readSvg}
            alt="Readed icon"
          />
        )}
        {isMe && !isReaded && (
          <img
            className="message__icon-noreaded"
            src={noReadSvg}
            alt="No readed icon"
          />
        )}
        <div className="message__info">
          <div className="message__bubble">
            <p className="message__text">{text}</p>
          </div>
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
          <p className="message__date">
            {distanceInWordsToNow(date, { addSuffix: true, locale: ruLocal })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Message;
