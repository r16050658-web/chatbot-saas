import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-primary to-accent text-white p-4 flex justify-between items-center shadow-lg">
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="h-8 w-8" />
        <span className="font-bold text-lg">Smarted</span>
      </div>
      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-200">Home</Link>
        <Link to="/dashboard" className="hover:text-gray-200">Dashboard</Link>
        <Link to="/login" className="hover:text-gray-200">Login</Link>
      </div>
    </nav>
  );
}
