import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export default function ChartArea({ data }) {
  return (
    <div className="bg-white rounded-2xl shadow-soft p-4">
      <h3 className="font-semibold mb-3">Messages (last 7 days)</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorMsgs" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366F1" stopOpacity={0.5}/>
                <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="count" stroke="#6366F1" fillOpacity={1} fill="url(#colorMsgs)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
