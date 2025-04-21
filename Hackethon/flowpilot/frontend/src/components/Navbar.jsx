import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="w-48 bg-gray-900 text-white h-screen p-4 space-y-4 fixed">
      <h2 className="text-xl font-bold">FlowPilot</h2>
      <nav className="flex flex-col space-y-2">
        <Link to="/" className="hover:text-blue-400">Dashboard</Link>
        <Link to="/insights" className="hover:text-blue-400">Insights</Link>
        <Link to="/rewards" className="hover:text-blue-400">Rewards</Link>
      </nav>
    </div>
  );
}
