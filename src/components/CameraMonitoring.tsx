import React, { useState, useEffect } from 'react';
import { Camera, AlertTriangle, MapPin, Settings, Activity, Users, Clock, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';

interface CameraFeed {
  id: string;
  name: string;
  location: string;
  status: 'active' | 'offline' | 'warning';
  crowdDensity: number;
  lastActivity: string;
  thumbnail: string;
}

const mockCameras: CameraFeed[] = [
  {
    id: 'CAM-001',
    name: 'Main Entrance Gate',
    location: 'North Gate',
    status: 'active',
    crowdDensity: 75,
    lastActivity: '2 min ago',
    thumbnail: '🏛️'
  },
  {
    id: 'CAM-002',
    name: 'Temple Courtyard',
    location: 'Central Area',
    status: 'active',
    crowdDensity: 85,
    lastActivity: '1 min ago',
    thumbnail: '🕉️'
  },
  {
    id: 'CAM-003',
    name: 'Darshan Hall',
    location: 'Main Hall',
    status: 'warning',
    crowdDensity: 92,
    lastActivity: '30 sec ago',
    thumbnail: '🙏'
  },
  {
    id: 'CAM-004',
    name: 'Service Area',
    location: 'East Wing',
    status: 'active',
    crowdDensity: 45,
    lastActivity: '5 min ago',
    thumbnail: '🏺'
  },
  {
    id: 'CAM-005',
    name: 'Rest Area',
    location: 'West Wing',
    status: 'offline',
    crowdDensity: 0,
    lastActivity: '1 hour ago',
    thumbnail: '🪑'
  },
  {
    id: 'CAM-006',
    name: 'Exit Gate',
    location: 'South Gate',
    status: 'active',
    crowdDensity: 60,
    lastActivity: '3 min ago',
    thumbnail: '🚪'
  }
];

export const CameraMonitoring: React.FC = () => {
  const [cameras, setCameras] = useState<CameraFeed[]>(mockCameras);
  const [selectedCamera, setSelectedCamera] = useState<string | null>(null);
  const [aiDetectionEnabled, setAiDetectionEnabled] = useState(true);
  const [alerts, setAlerts] = useState<string[]>([
    'High crowd density detected at Temple Courtyard',
    'Motion detected at Service Area',
    'Camera maintenance required at Rest Area'
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCameras(prev => prev.map(camera => ({
        ...camera,
        crowdDensity: Math.max(0, Math.min(100, camera.crowdDensity + (Math.random() - 0.5) * 10)),
        lastActivity: camera.status === 'active' ? 'Just now' : camera.lastActivity
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'offline': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getDensityColor = (density: number) => {
    if (density >= 90) return 'bg-red-500';
    if (density >= 70) return 'bg-yellow-500';
    if (density >= 40) return 'bg-green-500';
    return 'bg-blue-500';
  };

  const activeCameras = cameras.filter(c => c.status === 'active').length;
  const avgDensity = Math.round(cameras.reduce((sum, c) => sum + c.crowdDensity, 0) / cameras.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Header */}
      <div className="relative z-10 p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Camera Monitoring</h1>
              <p className="text-gray-600">Real-time surveillance and crowd management</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
              <Activity className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-gray-700">AI Detection</span>
              <button
                onClick={() => setAiDetectionEnabled(!aiDetectionEnabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  aiDetectionEnabled ? 'bg-green-500' : 'bg-gray-300'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  aiDetectionEnabled ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Camera Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {cameras.map((camera, index) => (
                <motion.div
                  key={camera.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                    selectedCamera === camera.id ? 'ring-2 ring-amber-400 shadow-amber-200' : ''
                  }`}
                  onClick={() => setSelectedCamera(selectedCamera === camera.id ? null : camera.id)}
                >
                  {/* Camera Status Indicator */}
                  <div className="absolute top-4 right-4 flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${camera.status === 'active' ? 'bg-green-400 animate-pulse' : camera.status === 'warning' ? 'bg-yellow-400' : 'bg-red-400'}`} />
                    <span className={`text-xs font-medium ${getStatusColor(camera.status)}`}>
                      {camera.status.toUpperCase()}
                    </span>
                  </div>

                  {/* Camera Feed */}
                  <div className="relative mb-4">
                    <div className="w-full h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-4xl shadow-inner">
                      {camera.thumbnail}
                    </div>
                    {selectedCamera === camera.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center"
                      >
                        <div className="text-white text-center">
                          <Eye className="w-8 h-8 mx-auto mb-2" />
                          <p className="text-sm font-medium">Live Feed Active</p>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Camera Info */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg">{camera.name}</h3>
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{camera.location}</span>
                      </div>
                    </div>

                    {/* Crowd Density */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Crowd Density</span>
                        <span className="text-sm font-medium text-gray-800">{camera.crowdDensity}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-500 ${getDensityColor(camera.crowdDensity)}`}
                          style={{ width: `${camera.crowdDensity}%` }}
                        />
                      </div>
                    </div>

                    {/* Last Activity */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        <span>{camera.lastActivity}</span>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-medium rounded-lg hover:from-amber-500 hover:to-orange-600 transition-all duration-200 shadow-md">
                        View Feed
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            {/* Real-time Alerts */}
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                <span>Real-time Alerts</span>
              </h3>
              <div className="space-y-3">
                {alerts.map((alert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="p-3 bg-amber-50 border border-amber-200 rounded-lg"
                  >
                    <p className="text-sm text-amber-800">{alert}</p>
                    <p className="text-xs text-amber-600 mt-1">2 min ago</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Crowd Heatmap Mini-widget */}
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-500" />
                <span>Crowd Heatmap</span>
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { zone: 'North', density: 75 },
                  { zone: 'Central', density: 85 },
                  { zone: 'South', density: 60 },
                  { zone: 'East', density: 45 },
                  { zone: 'West', density: 30 },
                  { zone: 'Main', density: 92 }
                ].map((zone, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-8 h-8 mx-auto rounded-lg ${getDensityColor(zone.density)} opacity-80`} />
                    <p className="text-xs text-gray-600 mt-1">{zone.zone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Analytics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{activeCameras}</div>
              <div className="text-sm text-gray-600">Active Cameras</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{avgDensity}%</div>
              <div className="text-sm text-gray-600">Avg. Crowd Density</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">{alerts.length}</div>
              <div className="text-sm text-gray-600">Active Alerts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">99.8%</div>
              <div className="text-sm text-gray-600">System Uptime</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
