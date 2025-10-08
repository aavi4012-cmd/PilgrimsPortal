import React from 'react';
import { User, Clock, AlertTriangle, ShieldCheck } from 'lucide-react';

interface SummaryCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  trend?: {
    direction: 'up' | 'down';
    value: string;
  };
  badgeText?: string;
  badgeColor?: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ icon, title, value, trend, badgeText, badgeColor }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow flex flex-col space-y-2 w-48">
      <div className="flex items-center justify-between">
        <div className="text-gray-500">{icon}</div>
        {badgeText && (
          <div
            className={`text-xs font-semibold px-2 py-1 rounded-full ${badgeColor || 'bg-blue-500 text-white'}`}
          >
            {badgeText}
          </div>
        )}
      </div>
      <div className="text-sm text-gray-400">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
      {trend && (
        <div
          className={`text-xs font-semibold inline-flex items-center space-x-1 ${
            trend.direction === 'up' ? 'text-green-600' : 'text-red-600'
          }`}
        >
          <span>{trend.direction === 'up' ? '↑' : '↓'}</span>
          <span>{trend.value}</span>
        </div>
      )}
    </div>
  );
};

export const AdminDashboardSummary: React.FC = () => {
  return (
    <div className="flex space-x-4 mb-6">
      <SummaryCard
        icon={<User className="w-6 h-6 text-blue-600" />}
        title="Total Pilgrims"
        value="12,847"
        trend={{ direction: 'up', value: '+8.2%' }}
      />
      <SummaryCard
        icon={<User className="w-6 h-6 text-teal-400" />}
        title="Currently Inside"
        value="3,245"
        trend={{ direction: 'up', value: '+12' }}
      />
      <SummaryCard
        icon={<Clock className="w-6 h-6 text-yellow-400" />}
        title="Avg Wait Time"
        value="23 minutes"
        trend={{ direction: 'down', value: '-5 min' }}
      />
      <SummaryCard
        icon={<AlertTriangle className="w-6 h-6 text-red-400" />}
        title="Active Incidents"
        value="2"
        badgeText="Low"
        badgeColor="bg-gray-200 text-gray-700"
      />
      <SummaryCard
        icon={<ShieldCheck className="w-6 h-6 text-green-400" />}
        title="Safety Score"
        value="94%"
        trend={{ direction: 'up', value: '+2%' }}
      />
    </div>
  );
};
