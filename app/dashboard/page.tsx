'use client'; // Client component to handle the fetch

import { logout } from '@/lib/auth';
import { useState } from 'react';

export default function Dashboard() {
  const [data, setData] = useState<string>('Click to fetch secrets...');

  const fetchSecret = async () => {
    const res = await fetch('/api/secrets');
    const json = await res.json();
    if (res.ok) {
      setData(json.secret);
    } else {
      setData(`Error: ${json.error}`);
    }
  };

  return (
    <div className="min-h-screen p-10 bg-white text-gray-900">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="border border-gray-200 p-6 rounded-lg bg-gray-50 mb-8 shadow-sm">
        <h2 className="font-semibold text-lg mb-2">API Test Zone</h2>
        <p className="mb-4 text-sm text-gray-600">Test the Role-Based Access Control:</p>
        
        <button onClick={fetchSecret} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition">
          Fetch Secret Data
        </button>
        
        <div className="mt-4 p-4 bg-gray-900 text-green-400 rounded font-mono text-sm">
          {data}
        </div>
      </div>

      <form>
        <button formAction={logout} className="text-red-600 underline hover:text-red-800">
          Log Out
        </button>
      </form>
    </div>
  );
}