import React from 'react';
import { AdminDashboardSummary } from './admin/AdminDashboardSummary';
import { AdminDashboardQueue } from './admin/AdminDashboardQueue';
import { AdminDashboardIncidents } from './admin/AdminDashboardIncidents';
import { AdminDashboardSafetyAlerts } from './admin/AdminDashboardSafetyAlerts';
import { AdminDashboardOptions } from './admin/AdminDashboardOptions';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '08:00', pilgrims: 500 },
  { time: '09:00', pilgrims: 900 },
  { time: '10:00', pilgrims: 1200 },
  { time: '11:00', pilgrims: 1800 },
  { time: '12:00', pilgrims: 2100 },
  { time: '13:00', pilgrims: 1750 },
  { time: '14:00', pilgrims: 1600 },
  { time: '15:00', pilgrims: 1850 },
  { time: 'Now', pilgrims: 2300 },
];

const AdminDashboard: React.FC = () => {
  return (
    <div className="p-6 min-h-screen space-y-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <AdminDashboardSummary />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Hourly Pilgrim Flow Chart */}
        <div className="bg-white rounded-lg p-4 shadow">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-semibold text-lg">Hourly Pilgrim Flow</h2>
            <span className="text-green-500 text-sm font-medium">Live</span>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data}>
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="pilgrims" stroke="#1E40AF" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Area Occupancy */}
        <div className="bg-white rounded-lg p-4 shadow space-y-4">
          <h2 className="font-semibold text-lg mb-2">Area Occupancy</h2>
          <div>
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-3-3.87"></path><path d="M7 21v-2a4 4 0 0 1 3-3.87"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <span>Main Darshan Hall</span>
              </div>
              <span className="text-red-600 font-semibold bg-red-100 px-2 py-0.5 rounded-full text-xs">High</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-blue-700 h-3 rounded-full" style={{ width: '85%' }}></div>
            </div>
            <div className="text-sm text-gray-500 mt-1">425/500 - 85% of capacity</div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-3-3.87"></path><path d="M7 21v-2a4 4 0 0 1 3-3.87"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <span>Temple Courtyard</span>
              </div>
              <span className="text-yellow-600 font-semibold bg-yellow-100 px-2 py-0.5 rounded-full text-xs">Medium</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-yellow-600 h-3 rounded-full" style={{ width: '65%' }}></div>
            </div>
            <div className="text-sm text-gray-500 mt-1">520/800 - 65% of capacity</div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-3-3.87"></path><path d="M7 21v-2a4 4 0 0 1 3-3.87"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <span>Entrance Gate</span>
              </div>
              <span className="text-green-600 font-semibold bg-green-100 px-2 py-0.5 rounded-full text-xs">Low</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-green-600 h-3 rounded-full" style={{ width: '45%' }}></div>
            </div>
            <div className="text-sm text-gray-500 mt-1">90/200 - 45% of capacity</div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-3-3.87"></path><path d="M7 21v-2a4 4 0 0 1 3-3.87"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <span>Exit Gate</span>
              </div>
              <span className="text-yellow-600 font-semibold bg-yellow-100 px-2 py-0.5 rounded-full text-xs">Medium</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-yellow-600 h-3 rounded-full" style={{ width: '72%' }}></div>
            </div>
            <div className="text-sm text-gray-500 mt-1">108/150 - 72% of capacity</div>
          </div>
        </div>
      </div>

      {/* Virtual Queue Management */}
      <div className="bg-white rounded-lg p-4 shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-lg">Virtual Queue Management</h2>
          <button className="text-sm font-semibold text-gray-600 hover:text-gray-800 flex items-center space-x-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4v5h.582"></path><path d="M20 20v-5h-.581"></path><path d="M20 9a9 9 0 1 0-16.001 0"></path><path d="M12 5v7"></path><path d="M9 8h6"></path></svg>
            <span>Refresh</span>
          </button>
        </div>
        <AdminDashboardQueue />
      </div>

      {/* Incident Management */}
      <AdminDashboardIncidents />

      {/* Safety Alerts & Notifications */}
      <AdminDashboardSafetyAlerts />

      {/* Admin Options */}
      <AdminDashboardOptions />
    </div>
  );
};

export default AdminDashboard;
