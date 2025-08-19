import React, { useState } from "react";

export default function ConfigureBot() {
  const [botName, setBotName] = useState("Fashion Sales Bot");
  const [welcomeMessage, setWelcomeMessage] = useState("Welcome to our Fashion Store 👗✨");
  const [category, setCategory] = useState("Sales");
  const [botImage, setBotImage] = useState(null);

  const handleImageUpload = (e) => {
    setBotImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSave = () => {
    // yaha backend API call kareinge (baad me)
    alert("✅ Bot configuration saved successfully!");
  };

  return (
    <div className="p-8 max-w-xl mx-auto bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">⚙️ Configure Bot</h2>

      {/* Bot Profile */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Bot Name</label>
        <input
          type="text"
          value={botName}
          onChange={(e) => setBotName(e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>

      {/* Bot Image */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Bot Profile Picture</label>
        <input type="file" onChange={handleImageUpload} />
        {botImage && <img src={botImage} alt="Bot" className="mt-2 h-20 w-20 rounded-full object-cover" />}
      </div>

      {/* Welcome Message */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Welcome Message</label>
        <textarea
          value={welcomeMessage}
          onChange={(e) => setWelcomeMessage(e.target.value)}
          className="w-full border rounded p-2"
        />
      </div>

      {/* Category */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border rounded p-2"
        >
          <option value="Sales">Sales</option>
          <option value="Support">Support</option>
          <option value="FAQ">FAQ</option>
        </select>
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="bg-purple-600 text-white px-4 py-2 rounded-xl w-full hover:bg-purple-700 transition"
      >
        Save Configuration
      </button>
    </div>
  );
}
