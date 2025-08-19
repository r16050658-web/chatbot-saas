import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

export default function Analytics() {
  const pieData = [
    { name: "Active Chats", value: 400 },
    { name: "Closed Chats", value: 300 },
    { name: "Pending Chats", value: 200 },
  ];

  const barData = [
    { name: "Mon", chats: 30 },
    { name: "Tue", chats: 45 },
    { name: "Wed", chats: 20 },
    { name: "Thu", chats: 60 },
    { name: "Fri", chats: 35 },
    { name: "Sat", chats: 50 },
    { name: "Sun", chats: 40 },
  ];

  const COLORS = ["#4F46E5", "#F59E0B", "#10B981"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      {/* Pie Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-lg font-semibold mb-4">Chat Status Distribution 📊</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-lg font-semibold mb-4">Chats per Day 📅</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="chats" fill="#4F46E5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
