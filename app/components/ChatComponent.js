"use client";
import React, { useEffect, useRef } from "react";

const ChatComponent = ({ userMsg, opponentMsg, setUserMsg, sendMsg }) => {
  const messagesEndRef = useRef(null);
  const [messages, setMessages] = React.useState([]);

  // Add messages to the chat history
  useEffect(() => {
    if (opponentMsg && opponentMsg !== "") {
      setMessages(prev => [...prev, { sender: 'opponent', text: opponentMsg }]);
    }
  }, [opponentMsg]);

  // Scroll to the bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle send message
  const handleSendMessage = () => {
    if (userMsg.trim() === "") return;
    
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    sendMsg(userMsg);
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-lg">
      <div className="bg-gradient-to-r from-blue-800 to-indigo-800 px-4 py-3">
        <h3 className="text-white font-medium text-sm">Chat with Opponent</h3>
      </div>
      
      <div className="flex-grow p-4 overflow-y-auto h-60 sm:h-72 md:h-80 bg-gray-850 space-y-3">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-400 text-sm">Send a message to your opponent</p>
          </div>
        ) : (
          messages.map((msg, index) => (
            <div 
              key={index} 
              className={`max-w-[85%] px-3 py-2 rounded-lg ${
                msg.sender === 'user' 
                  ? 'bg-blue-600 text-white ml-auto rounded-tr-none' 
                  : 'bg-gray-700 text-gray-100 rounded-tl-none'
              }`}
            >
              {msg.text}
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-3 border-t border-gray-700 bg-gray-800">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full px-3 py-2 bg-gray-700 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={userMsg}
            onChange={(e) => setUserMsg(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors"
            onClick={handleSendMessage}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;