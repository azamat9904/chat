import React from "react";

import readSvg from "../../assets/img/readed.svg";
import noReadSvg from "../../assets/img/noreaded.svg";


const MessageStatus = ({ isMe, isReaded }) => {
  return (
    <>
      {isMe &&
        (isReaded ? (
          <img
            className="message__icon-readed"
            src={readSvg}
            alt="Readed icon"
          />
        ) : (
            <img
              className="message__icon-noreaded"
              src={noReadSvg}
              alt="No readed icon"
            />
          ))}
    </>
  );
};

export default MessageStatus;
