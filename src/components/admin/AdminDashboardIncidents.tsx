import React, { useState } from 'react';
import { AlertTriangle, MapPin, Plus, Filter, BarChart3, Bell } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface Incident {
  id: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Active' | 'In Progress' | 'Resolved';
  title: string;
  description: string;
  location: string;
  assignedTo: string;
  timeAgo: string;
  coordinates?: { lat: number; lng: number };
}

const priorityColors = {
  High: 'bg-red-600 text-white',
  Medium: 'bg-yellow-500 text-white',
  Low: 'bg-green-600 text-white',
};

const statusColors = {
  Active: 'bg-red-200 text-red-700',
  'In Progress': 'bg-blue-200 text-blue-700',
  Resolved: 'bg-green-200 text-green-700',
};

const incidents: Incident[] = [
  {
    id: 'INC-001',
    priority: 'High',
    status: 'Active',
    title: 'Medical Emergency',
    description: 'Elderly pilgrim feeling unwell near main hall',
    location: 'Main Darshan Hall - Section A',
    assignedTo: 'Dr. Sharma',
    timeAgo: '5 min ago',
  },
  {
    id: 'INC-002',
    priority: 'Medium',
    status: 'In Progress',
    title: 'Crowd Pressure',
    description: 'Heavy congestion at entrance gate #2',
    location: 'Entrance Gate #2',
    assignedTo: 'Crowd Control Team A',
    timeAgo: '12 min ago',
  },
  {
    id: 'INC-003',
    priority: 'High',
    status: 'Resolved',
    title: 'Lost Person',
    description: 'Child separated from family',
    location: 'Temple Courtyard',
    assignedTo: 'Safety Officer Patel',
    timeAgo: '1 h ago',
  },
  {
    id: 'INC-004',
    priority: 'Low',
    status: 'Active',
    title: 'Facility Issue',
    description: 'Water dispenser not working',
    location: 'Rest Area #3',
    assignedTo: 'Maintenance Team',
    timeAgo: '35 min ago',
  },
];

export const AdminDashboardIncidents: React.FC = () => {
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [filterPriority, setFilterPriority] = useState<string>('All');

  const filteredIncidents = incidents.filter(incident => {
    if (filterStatus !== 'All' && incident.status !== filterStatus) return false;
    if (filterPriority !== 'All' && incident.priority !== filterPriority) return false;
    return true;
  });

  const activeIncidents = incidents.filter(i => i.status === 'Active').length;
  const resolvedIncidents = incidents.filter(i => i.status === 'Resolved').length;
  const totalIncidents = incidents.length;

  const analyticsData = [
    { name: 'Medical', count: 2 },
    { name: 'Crowd', count: 1 },
    { name: 'Lost Person', count: 1 },
    { name: 'Facility', count: 1 },
  ];

  const handleCreateIncident = () => {
    console.log('Create new incident');
    // TODO: Open modal for creating incident
  };

  const handleNotificationClick = () => {
    console.log('Show notifications');
    // TODO: Show notification panel
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-xl flex items-center space-x-2">
          <AlertTriangle className="w-6 h-6 text-red-600" />
          <span>Central Control Hub</span>
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={handleNotificationClick}
            className="flex items-center space-x-1 bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
          >
            <Bell className="w-4 h-4" />
            <span>Alerts</span>
          </button>
          <button
            onClick={handleCreateIncident}
            className="flex items-center space-x-1 bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600"
          >
            <Plus className="w-4 h-4" />
            <span>Create Incident</span>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Incident Resolution Progress</span>
          <span>{resolvedIncidents}/{totalIncidents} Resolved</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-green-600 h-3 rounded-full"
            style={{ width: `${(resolvedIncidents / totalIncidents) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex space-x-4">
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4" />
          <span className="text-sm font-medium">Filters:</span>
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 text-sm"
        >
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
        <select
          value={filterPriority}
          onChange={(e) => setFilterPriority(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 text-sm"
        >
          <option value="All">All Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Incidents List */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Active Incidents ({filteredIncidents.length})</h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {filteredIncidents.map((incident) => (
              <div key={incident.id} className="border border-gray-200 rounded-lg p-4 space-y-2 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${priorityColors[incident.priority]}`}>
                      {incident.priority}
                    </span>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${statusColors[incident.status]}`}>
                      {incident.status}
                    </span>
                    <span className="text-xs text-gray-500">{incident.id}</span>
                  </div>
                  <span className="text-xs text-gray-500">{incident.timeAgo}</span>
                </div>
                <div className="font-semibold">{incident.title}</div>
                <div className="text-sm text-gray-600">{incident.description}</div>
                <div className="flex items-center space-x-1 text-xs text-gray-400">
                  <MapPin className="w-3 h-3" />
                  <span>{incident.location}</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-xs text-gray-500">Assigned to: {incident.assignedTo}</div>
                  <div className="flex space-x-2">
                    <button className="text-xs font-semibold text-blue-600 hover:underline">View Details</button>
                    <button className="text-xs font-semibold text-blue-600 hover:underline">Contact</button>
                    <select className="text-xs border border-gray-300 rounded px-1 py-0.5">
                      <option>Reassign</option>
                      <option>Dr. Sharma</option>
                      <option>Crowd Control Team A</option>
                      <option>Safety Officer Patel</option>
                      <option>Maintenance Team</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Live Incident Map</h3>
          <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Interactive Map Integration</p>
              <p className="text-sm text-gray-400">Google Maps / Mapbox API</p>
              <p className="text-xs text-gray-400 mt-2">Shows live incident locations with severity colors</p>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics */}
      <div className="space-y-4">
        <h3 className="font-semibold text-lg flex items-center space-x-2">
          <BarChart3 className="w-5 h-5" />
          <span>Incident Analytics</span>
        </h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={analyticsData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#1E40AF" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
