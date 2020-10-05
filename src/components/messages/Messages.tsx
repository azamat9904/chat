import React, { FunctionComponent } from "react";
import { Empty } from "antd";

import { message } from "../../types/interfaces";
import { Message } from "../index";
import "./Messages.scss";

type Props = {
  items: message[];
};

export const Messages: FunctionComponent<Props> = ({ items }) => {
  return (
    <>
      {items.length !== 0 ? (
        items.map((item, index) => <Message message={item} key={index} />)
      ) : (
        <div className="dialog-empty">
          <Empty description="Откройте диалог" />
        </div>
      )}
    </>
  );
};

export default Messages;
