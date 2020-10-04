import React, { FunctionComponent } from "react";
import { userDialog } from "../../types/interfaces";
import { generateAvatar } from "../../util/helpers/index";
import "./Avatar.scss";

type Props = {
  user: userDialog;
};

const Avatar: FunctionComponent<Props> = ({
  user: { avatar, fullname, _id },
}) => {
  const colors = generateAvatar(_id);
  const firstChar = fullname.charAt(0).toUpperCase();
  const { color, colorLighten } = colors;

  return avatar ? (
    <img src={avatar} alt={`${fullname} avatar`} />
  ) : (
    <div
      className="avatar avatar--symbol"
      style={{
        background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)`,
      }}
    >
      {firstChar}
    </div>
  );
};
export default Avatar;
