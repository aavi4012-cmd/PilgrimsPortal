import React, { useState, useEffect } from 'react';
import {
  AlertTriangle,
  Search,
  Bell,
  User,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Plus,
  Filter,
  Calendar,
  Camera,
  Users,
  Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Incident {
  id: string;
  type: 'Medical' | 'Crowd' | 'Safety' | 'Technical';
  location: string;
  severity: 'Low' | 'Medium' | 'Critical';
  status: 'Active' | 'In Progress' | 'Resolved';
  description: string;
  timestamp: string;
  assignedTo?: string;
  responseTime?: string;
  coordinates: { lat: number; lng: number };
}

const mockIncidents: Incident[] = [
  {
    id: 'INC-001',
    type: 'Medical',
    location: 'Main Darshan Hall',
    severity: 'Critical',
    status: 'In Progress',
    description: 'Elderly pilgrim experiencing chest pain near the main altar',
    timestamp: '2 minutes ago',
    assignedTo: 'Dr. Sharma',
    responseTime: '1 min',
    coordinates: { lat: 28.6139, lng: 77.2090 }
  },
  {
    id: 'INC-002',
    type: 'Crowd',
    location: 'North Entrance Gate',
    severity: 'Medium',
    status: 'Active',
    description: 'Heavy congestion with pilgrims waiting for entry',
    timestamp: '5 minutes ago',
    assignedTo: 'Crowd Control Team A',
    responseTime: '3 min',
    coordinates: { lat: 28.6140, lng: 77.2091 }
  },
  {
    id: 'INC-003',
    type: 'Safety',
    location: 'Temple Courtyard',
    severity: 'Low',
    status: 'Resolved',
    description: 'Lost child reunited with family',
    timestamp: '15 minutes ago',
    assignedTo: 'Safety Officer Patel',
    responseTime: '8 min',
    coordinates: { lat: 28.6138, lng: 77.2089 }
  },
  {
    id: 'INC-004',
    type: 'Technical',
    location: 'Audio System',
    severity: 'Medium',
    status: 'In Progress',
    description: 'Public address system malfunctioning',
    timestamp: '8 minutes ago',
    assignedTo: 'Technical Team',
    responseTime: '5 min',
    coordinates: { lat: 28.6141, lng: 77.2092 }
  }
];

const IncidentManagement: React.FC = () => {
  const [incidents, setIncidents] = useState<Incident[]>(mockIncidents);
  const [selectedIncident, setSelectedIncident] = useState<Incident | null>(null);
  const [showReportModal, setShowReportModal] = useState(false);
  const [filterType, setFilterType] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Animated counters
  const [counters, setCounters] = useState({
    total: 0,
    active: 0,
    avgResponse: 0,
    resolved: 0
  });

  useEffect(() => {
    const targetCounters = {
      total: incidents.length,
      active: incidents.filter(i => i.status === 'Active' || i.status === 'In Progress').length,
      avgResponse: Math.round(incidents.reduce((sum, i) => sum + (parseInt(i.responseTime || '0') || 0), 0) / incidents.length),
      resolved: incidents.filter(i => i.status === 'Resolved').length
    };

    const interval = setInterval(() => {
      setCounters(prev => {
        const newCounters = { ...prev };
        Object.keys(targetCounters).forEach(key => {
          const target = targetCounters[key as keyof typeof targetCounters];
          if (newCounters[key as keyof typeof newCounters] < target) {
            newCounters[key as keyof typeof newCounters] += Math.ceil((target - newCounters[key as keyof typeof newCounters]) / 10);
          }
        });
        return newCounters;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [incidents]);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'bg-red-500 text-white';
      case 'Medium': return 'bg-yellow-500 text-white';
      case 'Low': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Resolved': return 'text-green-500';
      case 'In Progress': return 'text-blue-500';
      case 'Active': return 'text-orange-500';
      default: return 'text-gray-500';
    }
  };

  const filteredIncidents = incidents.filter(incident => {
    const matchesType = filterType === 'All' || incident.type === filterType;
    const matchesSearch = incident.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         incident.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Header */}
      <div className="relative z-10 p-6 border-b border-white/20 bg-white/80 backdrop-blur-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-xl">🕉️</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Incident Management</h1>
              <p className="text-gray-600">Real-time monitoring and response coordination</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search incidents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <button className="p-2 bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/90 transition-colors">
              <Bell className="w-5 h-5 text-gray-600" />
            </button>

            <button className="p-2 bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/90 transition-colors">
              <User className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="relative z-10 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-amber-400 to-orange-500 p-6 rounded-2xl shadow-xl text-white"
          >
            <div className="flex items-center justify-between mb-4">
              <AlertTriangle className="w-8 h-8" />
              <TrendingUp className="w-5 h-5 opacity-80" />
            </div>
            <div className="text-3xl font-bold mb-1">{counters.total}</div>
            <div className="text-sm opacity-90">Total Incidents Today</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-red-400 to-pink-500 p-6 rounded-2xl shadow-xl text-white"
          >
            <div className="flex items-center justify-between mb-4">
              <AlertCircle className="w-8 h-8" />
              <Activity className="w-5 h-5 opacity-80" />
            </div>
            <div className="text-3xl font-bold mb-1">{counters.active}</div>
            <div className="text-sm opacity-90">Active / Critical</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-400 to-cyan-500 p-6 rounded-2xl shadow-xl text-white"
          >
            <div className="flex items-center justify-between mb-4">
              <Clock className="w-8 h-8" />
              <TrendingUp className="w-5 h-5 opacity-80" />
            </div>
            <div className="text-3xl font-bold mb-1">{counters.avgResponse}m</div>
            <div className="text-sm opacity-90">Avg Response Time</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-green-400 to-teal-500 p-6 rounded-2xl shadow-xl text-white"
          >
            <div className="flex items-center justify-between mb-4">
              <CheckCircle className="w-8 h-8" />
              <TrendingUp className="w-5 h-5 opacity-80" />
            </div>
            <div className="text-3xl font-bold mb-1">{counters.resolved}</div>
            <div className="text-sm opacity-90">Resolved Today</div>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel: Incident Feed */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Live Incident Feed</h2>
              <div className="flex items-center space-x-2">
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="px-3 py-1 bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg text-sm"
                >
                  <option value="All">All Types</option>
                  <option value="Medical">Medical</option>
                  <option value="Crowd">Crowd</option>
                  <option value="Safety">Safety</option>
                  <option value="Technical">Technical</option>
                </select>
              </div>
            </div>

            <div className="space-y-4 max-h-96 overflow-y-auto">
              {filteredIncidents.map((incident, index) => (
                <motion.div
                  key={incident.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setSelectedIncident(incident)}
                  className={`bg-white/80 backdrop-blur-lg p-4 rounded-2xl shadow-xl border border-white/20 cursor-pointer hover:shadow-2xl transition-all duration-300 ${
                    selectedIncident?.id === incident.id ? 'ring-2 ring-amber-400' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        incident.severity === 'Critical' ? 'bg-red-500' :
                        incident.severity === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                      }`} />
                      <div>
                        <h3 className="font-semibold text-gray-800">{incident.type} Incident</h3>
                        <div className="flex items-center space-x-1 text-sm text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span>{incident.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(incident.severity)}`}>
                        {incident.severity}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-3">{incident.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{incident.timestamp}</span>
                      </div>
                      <div className={`font-medium ${getStatusColor(incident.status)}`}>
                        {incident.status}
                      </div>
                    </div>
                    {incident.assignedTo && (
                      <div className="text-xs text-gray-500">
                        Assigned: {incident.assignedTo}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Panel: Incident Details */}
          <div className="space-y-6">
            {selectedIncident ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/20"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Incident Details</h3>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Type</label>
                    <p className="text-gray-800">{selectedIncident.type}</p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-600">Location</label>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-800">{selectedIncident.location}</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-600">Description</label>
                    <p className="text-sm text-gray-700">{selectedIncident.description}</p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-600">Assigned To</label>
                    <p className="text-gray-800">{selectedIncident.assignedTo || 'Unassigned'}</p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-600">Response Time</label>
                    <p className="text-gray-800">{selectedIncident.responseTime}</p>
                  </div>

                  {/* Mini Map Placeholder */}
                  <div className="bg-gray-100 rounded-lg h-32 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm">Map View</p>
                      <p className="text-xs">Location: {selectedIncident.coordinates.lat}, {selectedIncident.coordinates.lng}</p>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 bg-gradient-to-r from-green-400 to-teal-500 text-white py-2 px-4 rounded-lg font-medium hover:from-green-500 hover:to-teal-600 transition-all duration-200 shadow-lg">
                      Mark Resolved
                    </button>
                    <button className="flex-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white py-2 px-4 rounded-lg font-medium hover:from-amber-500 hover:to-orange-600 transition-all duration-200 shadow-lg">
                      Escalate
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/20 text-center">
                <AlertTriangle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Select an incident to view details</p>
              </div>
            )}

            {/* Report New Incident Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowReportModal(true)}
              className="w-full bg-gradient-to-r from-amber-400 to-orange-500 text-white py-4 px-6 rounded-2xl font-semibold shadow-xl hover:from-amber-500 hover:to-orange-600 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>Report New Incident</span>
            </motion.button>
          </div>
        </div>

        {/* Analytics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-white/20"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">Incident Analytics</h3>
            <div className="flex items-center space-x-2">
              <button className="flex items-center space-x-1 px-3 py-1 bg-gray-100 rounded-lg text-sm">
                <Calendar className="w-4 h-4" />
                <span>Last 7 days</span>
              </button>
              <button className="flex items-center space-x-1 px-3 py-1 bg-gray-100 rounded-lg text-sm">
                <Filter className="w-4 h-4" />
                <span>All Types</span>
              </button>
            </div>
          </div>

          {/* Simple Analytics Chart Placeholder */}
          <div className="h-48 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <TrendingUp className="w-12 h-12 mx-auto mb-2" />
              <p className="text-sm">Analytics Chart</p>
              <p className="text-xs">Incident trends visualization</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Report Incident Modal */}
      <AnimatePresence>
        {showReportModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowReportModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white/95 backdrop-blur-lg p-6 rounded-2xl shadow-2xl max-w-md w-full"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Report New Incident</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Incident Type</label>
                  <select className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400">
                    <option>Medical</option>
                    <option>Crowd</option>
                    <option>Safety</option>
                    <option>Technical</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Location</label>
                  <input
                    type="text"
                    placeholder="Enter location"
                    className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Description</label>
                  <textarea
                    placeholder="Describe the incident"
                    rows={3}
                    className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Priority</label>
                  <select className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>Critical</option>
                  </select>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => setShowReportModal(false)}
                    className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                  <button className="flex-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white py-2 px-4 rounded-lg font-medium hover:from-amber-500 hover:to-orange-600 transition-all duration-200">
                    Report Incident
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IncidentManagement;
