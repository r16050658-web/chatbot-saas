import React from "react";

const data = [
  { id: 1, bot: "FAQ Bot", user: "Aqsa", text: "How to reset password?", time: "10:12" },
  { id: 2, bot: "Sales Bot", user: "Ali", text: "Pricing of Pro plan?", time: "11:05" }
];

export default function Messages() {
  return (
    <div>
      <h2 className="text-2xl font-extrabold text-primary mb-4">Recent Messages</h2>
      <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
        <table className="w-full">
          <thead className="bg-light text-left">
            <tr>
              <th className="p-3">Time</th>
              <th className="p-3">Bot</th>
              <th className="p-3">User</th>
              <th className="p-3">Message</th>
            </tr>
          </thead>
          <tbody>
            {data.map((m) => (
              <tr key={m.id} className="border-t">
                <td className="p-3 text-gray-500">{m.time}</td>
                <td className="p-3">{m.bot}</td>
                <td className="p-3">{m.user}</td>
                <td className="p-3">{m.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
