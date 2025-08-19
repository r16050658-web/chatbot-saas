import React, { useState } from "react";
import { login as loginUtil } from "../utils/auth";
// import api from "../api/axios";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // const res = await api.post("/auth/login/", form);
      // const { token, profile } = res.data;
      // loginUtil(token, profile);
      loginUtil("demo-token", { email: form.email, name: "Aqsa" });
      window.location.href = "/dashboard";
    } catch (err) {
      alert("Login failed (demo mode). Connect API to enable.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-10 rounded-2xl shadow-2xl mt-16 border border-gray-100">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-primary">Welcome Back 👋</h2>
      <form className="space-y-5" onSubmit={submit}>
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          value={form.email}
          onChange={(e)=>setForm({...form, email: e.target.value})}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          value={form.password}
          onChange={(e)=>setForm({...form, password: e.target.value})}
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-white py-3 rounded-lg hover:bg-secondary transition duration-300 transform hover:scale-105 disabled:opacity-60"
        >
          {loading ? "Please wait..." : "Login"}
        </button>
      </form>
    </div>
  );
}
