import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-extrabold text-primary">404</h1>
      <p className="mt-2 text-gray-600">Page not found</p>
      <Link to="/" className="inline-block mt-6 px-5 py-3 rounded-xl bg-primary text-white hover:bg-secondary">Go Home</Link>
    </div>
  );
}
