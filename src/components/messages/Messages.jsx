import React from "react";
import { Empty, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import { Message } from "../index";
import "./Messages.scss";

export const Messages = ({ items, isLoading, myId }) => {
  const antIcon = <LoadingOutlined spin />;

  return (
    <>
      {isLoading ? (
        <div className="message-spinner">
          <Spin indicator={antIcon} tip="Загрузка сообщений..." size="large" />
        </div>
      ) : (
          <>
            {items.length !== 0 ? (
              items.map((item, index) =>
                <Message
                  message={item}
                  key={index}
                  isMe={item.user._id === myId}
                />)
            ) : (
                <div className="dialog-empty">
                  <Empty description="Откройте диалог" />
                </div>
              )}
          </>
        )}
    </>
  );
};

export default Messages;
