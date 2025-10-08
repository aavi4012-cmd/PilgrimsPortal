import React from 'react';
import { Users, Settings, BarChart3, Bell, Shield, Database } from 'lucide-react';

interface OptionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
}

const OptionCard: React.FC<OptionCardProps> = ({ icon, title, description, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg p-4 shadow hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center space-x-3 mb-2">
        <div className="text-blue-600">{icon}</div>
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export const AdminDashboardOptions: React.FC = () => {
  const handleOptionClick = (option: string) => {
    console.log(`Clicked on ${option}`);
    // TODO: Implement navigation or modal for each option
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow space-y-4">
      <h2 className="font-semibold text-lg flex items-center space-x-2">
        <Settings className="w-6 h-6 text-gray-600" />
        <span>Admin Options</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <OptionCard
          icon={<Users className="w-6 h-6" />}
          title="User Management"
          description="Manage pilgrims, staff, and admin accounts"
          onClick={() => handleOptionClick('User Management')}
        />
        <OptionCard
          icon={<Settings className="w-6 h-6" />}
          title="System Settings"
          description="Configure temple settings, capacity limits, and policies"
          onClick={() => handleOptionClick('System Settings')}
        />
        <OptionCard
          icon={<BarChart3 className="w-6 h-6" />}
          title="Reports & Analytics"
          description="View detailed reports and analytics on pilgrim flow and incidents"
          onClick={() => handleOptionClick('Reports & Analytics')}
        />
        <OptionCard
          icon={<Bell className="w-6 h-6" />}
          title="Notifications"
          description="Manage alerts, announcements, and emergency notifications"
          onClick={() => handleOptionClick('Notifications')}
        />
        <OptionCard
          icon={<Shield className="w-6 h-6" />}
          title="Security & Access"
          description="Configure security settings and access controls"
          onClick={() => handleOptionClick('Security & Access')}
        />
        <OptionCard
          icon={<Database className="w-6 h-6" />}
          title="Data Management"
          description="Backup, restore, and manage system data"
          onClick={() => handleOptionClick('Data Management')}
        />
      </div>
    </div>
  );
};
