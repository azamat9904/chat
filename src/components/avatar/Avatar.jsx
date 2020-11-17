import React from "react";
import { generateAvatar } from "../../util/helpers/index";
import "./Avatar.scss";


const Avatar = ({ user }) => {
  const colors = generateAvatar(user._id);
  const firstChar = user.fullname.charAt(0).toUpperCase();
  const { color, colorLighten } = colors;

  return user.avatar ? (
    <img src={user.avatar} alt={`${user.fullname} avatar`} />
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
