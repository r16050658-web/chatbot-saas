import React, { useState } from "react";
import { Send } from "lucide-react";

export default function Chatbox() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello 👋, I’m your Smart Assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    setMessages([...messages, newMessage]);

    // Fake bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Got it! I’ll process your request. ✅" },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="flex flex-col h-[500px] bg-white shadow-lg rounded-2xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 font-semibold">
        Smarted Chatbot 🤖
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg max-w-xs ${
              msg.sender === "user"
                ? "bg-primary text-white self-end ml-auto"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="p-3 flex items-center border-t border-gray-200">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="ml-2 bg-primary text-white p-2 rounded-lg hover:bg-secondary transition"
        >
          <Send size={18} />
        </button>
      </form>
    </div>
  );
}
