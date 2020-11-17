import React from "react";
import classNames from "classnames";

import "./ShadowedBox.scss";


const ShadowedBox = ({ children, className }) => {
  const classesList = classNames("shadowedbox", className);
  return <div className={classesList}>{children}</div>;
};

export default ShadowedBox;
