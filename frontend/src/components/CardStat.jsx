import React from "react";

export default function CardStat({ title, value, hint, icon, className = "" }) {
  return (
    <div className={`bg-white rounded-2xl shadow-soft p-5 ${className}`}>
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <div className="text-sm text-gray-500">{title}</div>
          <div className="text-2xl font-extrabold mt-1">{value}</div>
          {hint && <div className="text-xs text-gray-400 mt-1">{hint}</div>}
        </div>
      </div>
    </div>
  );
}
