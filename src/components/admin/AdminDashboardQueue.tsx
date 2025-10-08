import React from 'react';

interface QueueCardProps {
  title: string;
  waitTime: string;
  inQueue: number;
  nowServing: string;
  progress: number;
  status: 'Active' | 'Paused';
  statusColor: string;
}

const QueueCard: React.FC<QueueCardProps> = ({ title, waitTime, inQueue, nowServing, progress, status, statusColor }) => {
  return (
    <div className={`rounded-lg p-4 shadow flex flex-col space-y-2 w-56 ${status === 'Paused' ? 'bg-yellow-50' : 'bg-green-50'}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-3-3.87"></path><path d="M7 21v-2a4 4 0 0 1 3-3.87"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span className="font-semibold">{title}</span>
        </div>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${statusColor}`}>{status}</span>
      </div>
      <div className="text-sm">
        <div>Wait Time: <span className="font-semibold">{waitTime}</span></div>
        <div>In Queue: <span className="font-semibold">{inQueue}</span></div>
        <div>Now Serving: <span className="font-semibold">{nowServing}</span></div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div className="bg-blue-600 h-3 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
      <button className={`mt-2 w-full rounded-md py-1 text-sm font-semibold flex items-center justify-center space-x-2 ${status === 'Paused' ? 'bg-yellow-200 text-yellow-800' : 'bg-green-200 text-green-800'}`}>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7"></path></svg>
        <span>Manage</span>
      </button>
    </div>
  );
};

export const AdminDashboardQueue: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow space-x-4 flex">
      <QueueCard title="General Darshan" waitTime="25 min" inQueue={142} nowServing="A-087" progress={62} status="Active" statusColor="bg-green-200 text-green-800" />
      <QueueCard title="VIP Darshan" waitTime="8 min" inQueue={23} nowServing="V-012" progress={85} status="Active" statusColor="bg-green-200 text-green-800" />
      <QueueCard title="Special Puja" waitTime="45 min" inQueue={67} nowServing="P-034" progress={38} status="Active" statusColor="bg-green-200 text-green-800" />
      <QueueCard title="Senior Citizen" waitTime="12 min" inQueue={18} nowServing="S-023" progress={90} status="Paused" statusColor="bg-yellow-200 text-yellow-800" />
    </div>
  );
};
