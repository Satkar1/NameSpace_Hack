// File: frontend/src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Insights from "./pages/Insights";
import Rewards from "./pages/Rewards";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <div className="flex">
        <Navbar />
        <main className="flex-1 p-4 overflow-y-auto h-screen">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/rewards" element={<Rewards />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
