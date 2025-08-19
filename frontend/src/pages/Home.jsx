import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="max-w-5xl mx-auto py-16 text-center">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
        Build & Manage Your AI ChatBots
      </h1>
      <p className="mt-5 text-gray-600 text-lg">
        A clean SaaS starter: analytics, bots, messages, and a beautiful UI.
      </p>
      <div className="mt-8 flex items-center justify-center gap-4">
        <Link to="/signup" className="px-6 py-3 rounded-xl bg-primary text-white hover:bg-secondary transition">
          Get Started
        </Link>
        <Link to="/dashboard" className="px-6 py-3 rounded-xl bg-white shadow-soft hover:shadow-lg">
          View Dashboard
        </Link>
      </div>
    </section>
  );
}
