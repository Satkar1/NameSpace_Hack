import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate incoming stream
      const now = new Date().toLocaleTimeString();
      const focusScore = Math.floor(Math.random() * 100);
      setData(prev => [...prev.slice(-20), { time: now, score: focusScore }]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ml-52 p-6">
      <h1 className="text-2xl font-bold mb-4">Live Focus Score</h1>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="score" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
