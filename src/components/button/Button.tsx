import React, { FunctionComponent } from "react";
import { Button as BaseButton } from "antd";

type Props = {
  children: React.ReactNode;
  className?: string;
  block?: boolean;
  danger?: boolean;
  disabled?: boolean;
  type?: "primary" | "dashed" | "link";
  href?: string;
  size?: "large" | "middle" | "small";
  shape?: "circle" | "round";
  icon?: React.ReactNode;
};

const Button: FunctionComponent<Props> = ({
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
