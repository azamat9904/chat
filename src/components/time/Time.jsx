import React from "react";
import distanceInWordsToNow from "date-fns/formatDistanceToNow";
import ruLocal from "date-fns/locale/ru/index";


const Time = ({ date }) => {
  return (
    <span>
      {distanceInWordsToNow(new Date(date), {
        addSuffix: true,
        locale: ruLocal,
      })}
    </span>
  );
};
export default Time;
