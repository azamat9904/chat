import React, { FunctionComponent } from "react";
import { DialogItem } from "../index";
import { dialog } from "../../types/interfaces";
import orderBy from "lodash/orderBy";

type Props = {
  items: dialog[];
};

const Dialogs: FunctionComponent<Props> = ({ items }) => {
  return (
    <div className="dialogs">
      {orderBy(items, ["created_at", "desc"]).map((item, index) => (
        <DialogItem key={index} user={item.user} message={item.message} />
      ))}
    </div>
  );
};

export default Dialogs;
