import React from "react";
import classNames from "classnames";

import "./Status.scss";

const Status = ({ online }) => {
  const classes = classNames("status", { "status--online": online });

  return (
    <div className="status-wrapper">
      <span className={classes}>{online ? "онлайн" : "офлайн"}</span>
    </div>
  );
};

export default Status;
