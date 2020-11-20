import React from "react";
import * as Icon from "@ant-design/icons";

import { Dialogs, Messages, ChatInput, Status } from "../../containers";
import "./Home.scss";

const Home = (props) => {

  return (
    <section className="home">
      <div className="chat">
        <div className="chat__sidebar">
          <div className="chat__sidebar-header">
            <div>
              <Icon.TeamOutlined />
              <span>Список диалогов</span>
            </div>
            <Icon.FormOutlined />
          </div>
          <div className="chat__sidebar-dialogs">
            <Dialogs />
          </div>
        </div>
        <div className="chat__dialog">
          <div className="chat__dialog-header">
            <div />
            <Status online={true} />
            <Icon.EllipsisOutlined style={{ fontSize: "20px" }} />
          </div>
          <Messages />
          <ChatInput />
        </div>
      </div>
    </section>
  );
};

export default Home;
