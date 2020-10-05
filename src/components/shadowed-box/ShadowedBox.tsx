import React, { FunctionComponent } from "react";
import classNames from "classnames";

import "./ShadowedBox.scss";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const ShadowedBox: FunctionComponent<Props> = ({ children, className }) => {
  const classesList = classNames("shadowedbox", className);
  return <div className={classesList}>{children}</div>;
};

export default ShadowedBox;
