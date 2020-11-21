import React from "react";
import * as Icon from "@ant-design/icons";
import { Picker } from 'emoji-mart'
import { Input, Button } from "antd";

import "./ChatInput.scss";

const ChatInput = ({
  value,
  setValue,
  enterPressedHandler,
  showSmiles,
  setShowSmiles,
  addEmoji
}) => {
  return (
    <div className="chat-input">
      <div className="chat-input__smile-container" onMouseEnter={() => setShowSmiles(true)} onMouseLeave={() => setShowSmiles(false)}>
        <div className="chat-input__smile-btn">
          <Icon.SmileOutlined />
        </div>
        {
          showSmiles ? <div className="chat-input__smile-list">
            <Picker set='apple' onSelect={addEmoji} />
          </div> : null
        }
      </div>
      <Input
        onChange={(e) => setValue(e.target.value)}
        placeholder="Введите текст"
        size="large"
        value={value}
        onKeyDown={(e) => enterPressedHandler(e)}
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
