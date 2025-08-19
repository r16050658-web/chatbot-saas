import React, { useState } from "react";
// import api from "../api/axios"; // hook to your backend later

export default function ChatWidget() {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! Ask me anything about your bots." }
  ]);
  const [input, setInput] = useState("");

  const sendMsg = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { role: "user", text: input.trim() };
    setMessages((m) => [...m, userMsg]);
    setInput("");

    // TODO: call backend API
    // const res = await api.post("/chat/", { message: userMsg.text });
    // const botText = res.data.reply;

    const botText = "This is a demo reply ✨ (wire it to your backend /chat/).";
    setMessages((m) => [...m, { role: "bot", text: botText }]);
  };

  return (
    <div className="bg-white rounded-2xl shadow-soft p-4 flex flex-col h-[28rem]">
      <div className="font-semibold mb-3">Chat Assistant</div>
      <div className="flex-1 overflow-auto space-y-3 pr-1">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`px-3 py-2 rounded-xl max-w-[80%] ${
              m.role === "user" ? "bg-primary text-white ml-auto" : "bg-light"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>
      <form onSubmit={sendMsg} className="mt-3 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button className="px-4 py-2 rounded-xl bg-primary text-white hover:bg-secondary transition">
          Send
        </button>
      </form>
    </div>
  );
}
