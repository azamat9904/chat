import React, { FunctionComponent } from "react";
import distanceInWordsToNow from "date-fns/formatDistanceToNow";
import ruLocal from "date-fns/locale/ru/index";

type Props = {
  date: Date;
};

const Time: FunctionComponent<Props> = ({ date }) => {
  return (
    <span>
      {distanceInWordsToNow(date, { addSuffix: true, locale: ruLocal })}
    </span>
  );
};
export default Time;
