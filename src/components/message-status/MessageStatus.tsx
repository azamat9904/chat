import React, { FunctionComponent } from "react";
import readSvg from "../../assets/img/readed.svg";
import noReadSvg from "../../assets/img/noreaded.svg";

type Props = {
  isMe?: boolean;
  isReaded?: boolean;
};

const MessageStatus: FunctionComponent<Props> = ({ isMe, isReaded }) => {
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
