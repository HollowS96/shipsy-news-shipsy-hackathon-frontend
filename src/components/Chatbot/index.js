import React, { useState } from "react";
import "./index.scss";

const Chatbot = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatBot = () => setShowChatbot(!showChatbot);

  return (
    <div className="chatbot">
      <button
        className={`chatbot-btn ${showChatbot ? "close" : ""}`}
        onClick={toggleChatBot}
      >
        <span>
          <i className="fas fa-comment-dots"></i>
        </span>
        <span>
          <i className="fas fa-times"></i>
        </span>
      </button>
      <iframe
        className={`chatbot-window ${showChatbot ? "appear" : ""}`}
        allow="microphone;"
        width="350"
        height="550"
        src="https://console.dialogflow.com/api-client/demo/embedded/75f38a7a-60f4-4394-b572-ccfdcc3d3dc8"
      ></iframe>
    </div>
  );
};

export default Chatbot;
