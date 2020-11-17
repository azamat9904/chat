import React from "react";
import { Button as BaseButton } from "antd";

const Button = ({
  children,
  className,
  ...props
}) => {
  return (
    <BaseButton className={className} {...props}>
      {children}
    </BaseButton>
  );
};

export default Button;
