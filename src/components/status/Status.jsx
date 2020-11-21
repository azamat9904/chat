import React from "react";
import classNames from "classnames";

import "./Status.scss";

const Status = ({ online, fullname }) => {
  const classes = classNames("status", { "status--online": online });

  const getStatus = (isOnline) => {
    switch (isOnline) {
      case true:
        return 'Онлайн';
      case false:
        return 'Офлайн';
      default:
        return '';
    }
  }

  return (
    <div className="chat__dialog-center">
      <b className="chat__dialog-fullname">{fullname}</b>
      <div className="status-wrapper">
        {online !== null && <span className={classes}>{getStatus(online)}</span>}
      </div>
    </div>
  );
};

export default Status;
