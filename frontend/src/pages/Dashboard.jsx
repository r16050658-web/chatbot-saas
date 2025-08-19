import React from "react";
import CardStat from "../components/CardStat";
import { Cpu, MessageSquare, Ticket, Settings } from "lucide-react";
import ChartArea from "../components/ChartArea";
import ChartBar from "../components/ChartBar";
import ChatWidget from "../features/ChatWidget";

const areaData = [
  { day: "Mon", count: 120 },
  { day: "Tue", count: 160 },
  { day: "Wed", count: 90 },
  { day: "Thu", count: 210 },
  { day: "Fri", count: 180 },
  { day: "Sat", count: 140 },
  { day: "Sun", count: 200 }
];

const barData = [
  { label: "FAQ Bot", value: 320 },
  { label: "Sales Bot", value: 210 },
  { label: "Support Bot", value: 410 },
];

export default function Dashboard() {
  // ✅ button click ka function
  const handleConfigure = () => {
    alert("⚙️ Configure button clicked! Yahan baad me backend se link hoga.");
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-6">
        <CardStat title="Total Bots" value="7" hint="Across all projects"
          icon={<Cpu className="text-primary" />} />
        <CardStat title="Messages" value="1,345" hint="Last 7 days"
          icon={<MessageSquare className="text-secondary" />} />
        <CardStat title="Tokens left" value="86,000" hint="Resets monthly"
          icon={<Ticket className="text-accent" />} />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ChartArea data={areaData} />
        </div>
        <ChartBar data={barData} title="Top Bots (messages)" />
      </div>

      {/* ✅ Configure Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleConfigure}
          className="flex items-center px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-primary/80 transition"
        >
          <Settings className="mr-2" /> Configure
        </button>
      </div>

      <ChatWidget />
    </div>
  );
}
