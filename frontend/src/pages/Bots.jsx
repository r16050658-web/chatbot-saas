import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Bots() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    // 👇 yahan API call hogi backend se bots fetch karne ke liye
    // abhi dummy data dal dete hain example ke liye
    setBots([
      { id: 1, name: "Fashion Sales Bot", description: "Helps with clothing and sales." },
      { id: 2, name: "Food Ordering Bot", description: "Takes food orders." },
    ]);
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Your Bots</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bots.map((bot) => (
          <div
            key={bot.id}
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">{bot.name}</h2>
            <p className="text-gray-600 text-sm mb-4">{bot.description}</p>

            {/* Configure Button */}
            <Link
              to={`/configure/${bot.id}`}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Configure
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
