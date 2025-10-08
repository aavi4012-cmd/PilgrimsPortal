import React, { useState, useEffect } from 'react';
import { Bell, AlertTriangle, Camera, Settings, Send, Volume2, VolumeX, MapPin, Clock, User } from 'lucide-react';

interface SafetyAlert {
  id: string;
  type: 'Emergency' | 'Warning' | 'Info';
  title: string;
  message: string;
  source: 'Camera' | 'Sensor' | 'Manual' | 'AI';
  location: string;
  timestamp: string;
  priority: 'High' | 'Medium' | 'Low';
  acknowledged: boolean;
}

const alertTypeColors = {
  Emergency: 'bg-red-100 border-red-500 text-red-700',
  Warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
  Info: 'bg-blue-100 border-blue-500 text-blue-700',
};

const priorityColors = {
  High: 'text-red-600',
  Medium: 'text-yellow-600',
  Low: 'text-green-600',
};

const mockAlerts: SafetyAlert[] = [
  {
    id: 'ALT-001',
    type: 'Emergency',
    title: 'Crowd Surge Detected',
    message: 'AI camera detected unusual crowd movement near Gate 3. Potential stampede risk.',
    source: 'Camera',
    location: 'Entrance Gate #3',
    timestamp: '2 min ago',
    priority: 'High',
    acknowledged: false,
  },
  {
    id: 'ALT-002',
    type: 'Warning',
    title: 'Medical Alert',
    message: 'Elderly pilgrim reported feeling dizzy in the courtyard.',
    source: 'Manual',
    location: 'Temple Courtyard',
    timestamp: '5 min ago',
    priority: 'Medium',
    acknowledged: true,
  },
  {
    id: 'ALT-003',
    type: 'Info',
    title: 'Temperature Alert',
    message: 'Ambient temperature exceeded 35°C in Rest Area #2.',
    source: 'Sensor',
    location: 'Rest Area #2',
    timestamp: '10 min ago',
    priority: 'Low',
    acknowledged: true,
  },
  {
    id: 'ALT-004',
    type: 'Emergency',
    title: 'Fire Alarm Triggered',
    message: 'Fire alarm activated in Kitchen Area. Evacuation protocol initiated.',
    source: 'Sensor',
    location: 'Kitchen Area',
    timestamp: '1 min ago',
    priority: 'High',
    acknowledged: false,
  },
];

export const AdminDashboardSafetyAlerts: React.FC = () => {
  const [alerts, setAlerts] = useState<SafetyAlert[]>(mockAlerts);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [filterType, setFilterType] = useState<string>('All');
  const [selectedCamera, setSelectedCamera] = useState<number | null>(null);

  const filteredAlerts = alerts.filter(alert => {
    if (filterType !== 'All' && alert.type !== filterType) return false;
    return true;
  });

  const unacknowledgedCount = alerts.filter(a => !a.acknowledged).length;

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate new alert every 30 seconds
      if (Math.random() > 0.95) {
        const newAlert: SafetyAlert = {
          id: `ALT-${Date.now()}`,
          type: 'Info',
          title: 'Motion Detected',
          message: 'Unusual movement detected in restricted area.',
          source: 'Camera',
          location: 'Service Area',
          timestamp: 'Just now',
          priority: 'Low',
          acknowledged: false,
        };
        setAlerts(prev => [newAlert, ...prev.slice(0, 9)]); // Keep only 10 alerts
      }
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleAcknowledge = (id: string) => {
    setAlerts(prev => prev.map(alert =>
      alert.id === id ? { ...alert, acknowledged: true } : alert
    ));
  };

  const handleSendNotification = (alert: SafetyAlert) => {
    console.log('Sending notification for alert:', alert.id);
    // TODO: Implement notification sending logic
  };

  const handleSettings = () => {
    console.log('Open notification settings');
    // TODO: Open settings modal
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'Emergency': return <AlertTriangle className="w-5 h-5 text-red-600" />;
      case 'Warning': return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
      case 'Info': return <Bell className="w-5 h-5 text-blue-600" />;
      default: return <Bell className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 shadow-xl space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center bg-white rounded-lg p-6 shadow-md">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Bell className="w-8 h-8 text-orange-500" />
            {unacknowledgedCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-bounce">
                {unacknowledgedCount}
              </span>
            )}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Safety Alerts & Notifications</h2>
            <p className="text-sm text-gray-600">Real-time monitoring and alert management</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
              soundEnabled
                ? 'bg-green-500 text-white hover:bg-green-600 shadow-lg'
                : 'bg-gray-500 text-white hover:bg-gray-600 shadow-lg'
            }`}
          >
            {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            <span className="font-medium">Sound</span>
          </button>
          <button
            onClick={handleSettings}
            className="flex items-center space-x-2 bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition-all duration-200 shadow-lg"
          >
            <Settings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-red-400 to-red-600 p-6 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-6 h-6" />
                <span className="font-semibold text-lg">Emergency</span>
              </div>
              <div className="text-3xl font-bold mt-2">
                {alerts.filter(a => a.type === 'Emergency').length}
              </div>
            </div>
            <div className="text-red-200">
              <AlertTriangle className="w-12 h-12" />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-6 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-6 h-6" />
                <span className="font-semibold text-lg">Warning</span>
              </div>
              <div className="text-3xl font-bold mt-2">
                {alerts.filter(a => a.type === 'Warning').length}
              </div>
            </div>
            <div className="text-yellow-200">
              <AlertTriangle className="w-12 h-12" />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <Bell className="w-6 h-6" />
                <span className="font-semibold text-lg">Info</span>
              </div>
              <div className="text-3xl font-bold mt-2">
                {alerts.filter(a => a.type === 'Info').length}
              </div>
            </div>
            <div className="text-blue-200">
              <Bell className="w-12 h-12" />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-400 to-green-600 p-6 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <Camera className="w-6 h-6" />
                <span className="font-semibold text-lg">Camera</span>
              </div>
              <div className="text-3xl font-bold mt-2">
                {alerts.filter(a => a.source === 'Camera').length}
              </div>
            </div>
            <div className="text-green-200">
              <Camera className="w-12 h-12" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg p-4 shadow-md">
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-gray-700">Filter by Type:</span>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
          >
            <option value="All">All Types</option>
            <option value="Emergency">Emergency</option>
            <option value="Warning">Warning</option>
            <option value="Info">Info</option>
          </select>
        </div>
      </div>

      {/* Alerts List */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="font-semibold text-xl text-gray-800 mb-4 flex items-center space-x-2">
          <Bell className="w-6 h-6 text-indigo-600" />
          <span>Recent Alerts ({filteredAlerts.length})</span>
        </h3>
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {filteredAlerts.map((alert, index) => (
            <div
              key={alert.id}
              className={`border-l-4 rounded-lg p-5 space-y-3 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
                alert.acknowledged ? 'bg-gray-50 border-gray-300' : 'bg-white shadow-md'
              } ${alertTypeColors[alert.type]}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getAlertIcon(alert.type)}
                  <span className="font-bold text-lg text-gray-800">{alert.title}</span>
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full ${priorityColors[alert.priority]} bg-white shadow-sm`}>
                    {alert.priority}
                  </span>
                  {!alert.acknowledged && (
                    <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full animate-pulse shadow-lg">
                      New
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{alert.timestamp}</span>
                  </div>
                  <span className="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-medium">
                    {alert.source}
                  </span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{alert.message}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span className="font-medium">{alert.location}</span>
                </div>
                <div className="flex space-x-3">
                  {!alert.acknowledged && (
                    <button
                      onClick={() => handleAcknowledge(alert.id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      Acknowledge
                    </button>
                  )}
                  <button
                    onClick={() => handleSendNotification(alert)}
                    className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>Notify</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Camera Monitoring */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h3 className="font-semibold text-xl text-gray-800 mb-6 flex items-center space-x-2">
          <Camera className="w-6 h-6 text-green-600" />
          <span>Live Camera Monitoring</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((cam) => (
            <div
              key={cam}
              onClick={() => setSelectedCamera(selectedCamera === cam ? null : cam)}
              className={`relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-4 flex flex-col items-center justify-center h-40 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                selectedCamera === cam ? 'ring-4 ring-indigo-500 shadow-2xl' : ''
              }`}
            >
              <div className="absolute top-2 right-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <Camera className={`w-10 h-10 mb-3 ${selectedCamera === cam ? 'text-indigo-600' : 'text-gray-500'}`} />
              <p className={`text-sm font-medium ${selectedCamera === cam ? 'text-indigo-700' : 'text-gray-600'}`}>
                Camera {cam}
              </p>
              <p className="text-xs text-gray-500">Live Feed Active</p>
              {selectedCamera === cam && (
                <div className="absolute inset-0 bg-indigo-500 bg-opacity-10 rounded-xl flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 px-3 py-1 rounded-lg text-sm font-medium text-indigo-700">
                    Viewing Camera {cam}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 mb-2">
            Real-time camera feeds with AI-powered anomaly detection
          </p>
          <div className="flex justify-center space-x-4 text-xs text-gray-500">
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Active</span>
            </span>
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span>Warning</span>
            </span>
            <span className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span>Alert</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
