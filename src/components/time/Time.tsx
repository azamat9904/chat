import React, { FunctionComponent } from "react";
import distanceInWordsToNow from "date-fns/formatDistanceToNow";
import ruLocal from "date-fns/locale/ru/index";

type Props = {
  date: string;
};

const Time: FunctionComponent<Props> = ({ date }) => {
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
