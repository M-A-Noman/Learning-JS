import React, { useState } from "react";
import ChatBot from "./chatbot-container"; // Assuming you have a ChatBot component
import "./App.css";
import ChatButton from "./chat-button";
const App = () => {
  return (
    <div className="main-content">
      
      <ChatButton></ChatButton>
    </div>
  );
};

export default App;
