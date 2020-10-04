import React, { useState } from "react";
import * as Icon from "@ant-design/icons";
import { Input, Button } from "antd";
import "./ChatInput.scss";

const ChatInput = () => {
  const [value, setValue] = useState("");

  return (
    <div className="chat-input">
      <div className="chat-input__smile-btn">
        <Icon.SmileOutlined />
      </div>
      <Input
        onChange={(e) => setValue(e.target.value)}
        placeholder="Введите текст"
        size="large"
      />
      <div className="chat-input__actions">
        <Button icon={<Icon.CameraOutlined />} type="text" />
        {value ? (
          <Button icon={<Icon.CheckCircleOutlined />} type="text" />
        ) : (
          <Button icon={<Icon.AudioOutlined />} type="text" />
        )}
      </div>
    </div>
  );
};

export default ChatInput;
