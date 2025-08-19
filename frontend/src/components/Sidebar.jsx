import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, MessageSquare, Boxes } from "lucide-react";

const linkClass =
  "flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white transition";

export default function Sidebar() {
  return (
    <aside className="hidden md:block w-64 p-4">
      <div className="bg-white rounded-2xl shadow-soft p-4 sticky top-4">
        <nav className="flex flex-col gap-2">
          <NavLink to="/dashboard" className={({isActive}) => `${linkClass} ${isActive ? "bg-light font-semibold" : ""}`}>
            <LayoutDashboard className="w-5 h-5 text-primary" />
            Overview
          </NavLink>
          <NavLink to="/bots" className={({isActive}) => `${linkClass} ${isActive ? "bg-light font-semibold" : ""}`}>
            <Boxes className="w-5 h-5 text-secondary" />
            Bots
          </NavLink>
          <NavLink to="/messages" className={({isActive}) => `${linkClass} ${isActive ? "bg-light font-semibold" : ""}`}>
            <MessageSquare className="w-5 h-5 text-accent" />
            Messages
          </NavLink>
        </nav>
      </div>
    </aside>
  );
}
