import React, { useState } from "react";
import "./chat-button.css";
import ChatBotContainer from "./chatbot-container"; // Assuming 'message' is your ChatBot component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots,faX } from '@fortawesome/free-solid-svg-icons';
const ChatButton = () => {
  const [showChatBot, setShowChatBot] = useState(false);

  const toggleChatBot = () => {
    setShowChatBot(!showChatBot);
  };

  return (
    <>
      {showChatBot && (
        <div className="chat-bot-container">
          <ChatBotContainer />
        </div>
      )}
      <button className="chat-button" onClick={toggleChatBot}>

          <FontAwesomeIcon className="icon" icon={showChatBot?faX:faCommentDots} />
      </button>
    </>
  );
};

export default ChatButton;
