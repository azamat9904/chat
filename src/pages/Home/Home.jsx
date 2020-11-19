import React from "react";
import * as Icon from "@ant-design/icons";

import { Status } from "../../components/index";
import { Dialogs, Messages, ChatInput } from "../../containers";
import "./Home.scss";

const Home = () => {
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
            <div className="chat__dialog-center">
              <b className="chat__dialog-fullname">Гай Юлий Цезарь</b>
              <Status online={true} />
            </div>
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
