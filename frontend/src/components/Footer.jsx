import React from "react";

export default function Footer() {
  return (
    <footer className="mt-8 border-t bg-white">
      <div className="max-w-7xl mx-auto py-6 text-center text-gray-500">
        © {new Date().getFullYear()} ChatBot SaaS — Built with 💜
      </div>
    </footer>
  );
}
