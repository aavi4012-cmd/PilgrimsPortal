"use client";
import { motion } from "framer-motion";
import { Users, AlertTriangle, Phone } from "lucide-react";

const temples = [
  { name: "Kedarnath Temple", crowd: "High", level: 85 },
  { name: "Badrinath Temple", crowd: "Low", level: 25 },
  { name: "Vaishno Devi", crowd: "Moderate", level: 60 },
  { name: "Golden Temple", crowd: "Low", level: 30 },
];

export default function BookingSidebar() {
  const getCrowdColor = (crowd: string) => {
    switch (crowd) {
      case "High": return "bg-red-500";
      case "Moderate": return "bg-yellow-500";
      default: return "bg-green-500";
    }
  };

  return (
    <motion.div
      className="w-80 bg-white/70 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/30"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
    >
      {/* Crowd Insights */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <Users className="w-5 h-5 mr-2 text-teal-600" />
          Crowd Insights
        </h3>
        <div className="space-y-3">
          {temples.map((temple, index) => (
            <motion.div
              key={temple.name}
              className="flex items-center justify-between p-3 bg-white/50 rounded-xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${getCrowdColor(temple.crowd)}`}></div>
                <span className="text-sm font-medium text-gray-700">{temple.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${getCrowdColor(temple.crowd)}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${temple.level}%` }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 1 }}
                  />
                </div>
                <span className="text-xs text-gray-500">{temple.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Safety Tips */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <AlertTriangle className="w-5 h-5 mr-2 text-orange-600" />
          Safety Tips
        </h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-start">
            <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Maintain social distance in queues
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Wear masks and follow hygiene protocols
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Stay hydrated and plan for weather
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Keep emergency contacts handy
          </li>
        </ul>
      </div>

      {/* Emergency Helpline */}
      <div className="p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-200">
        <h4 className="text-md font-semibold text-red-800 mb-2 flex items-center">
          <Phone className="w-4 h-4 mr-2" />
          Emergency Helpline
        </h4>
        <p className="text-sm text-red-700 mb-3">
          For immediate assistance during your pilgrimage
        </p>
        <div className="space-y-1">
          <p className="text-lg font-bold text-red-800">112</p>
          <p className="text-xs text-red-600">24/7 Emergency Services</p>
        </div>
      </div>
    </motion.div>
  );
}
