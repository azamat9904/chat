import React from "react";
import { generateAvatar } from "../../util/helpers/index";
import "./Avatar.scss";


const Avatar = ({ _id, fullname, avatar }) => {
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
