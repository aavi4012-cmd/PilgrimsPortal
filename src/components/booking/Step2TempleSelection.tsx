"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

interface Step2Props {
  formData: any;
  errors: any;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  setCrowdLevel: (level: string) => void;
}

const temples = [
  { name: "Kedarnath Temple", density: "High", description: "One of the twelve Jyotirlingas", image: "🏔️" },
  { name: "Badrinath Temple", density: "Low", description: "Home to Lord Vishnu", image: "🏛️" },
  { name: "Vaishno Devi", density: "Moderate", description: "Popular cave temple", image: "🕳️" },
  { name: "Golden Temple", density: "Low", description: "Sikh pilgrimage site", image: "🕌" },
];

export default function Step2TempleSelection({ formData, errors, handleChange, setCrowdLevel }: Step2Props) {
  const getCrowdColor = (density: string) => {
    switch (density) {
      case "High": return "bg-red-500";
      case "Moderate": return "bg-yellow-500";
      default: return "bg-green-500";
    }
  };

  const handleTempleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleChange(e);
    const selected = temples.find((temple) => temple.name === e.target.value);
    setCrowdLevel(selected?.density || "Moderate");
  };

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <MapPin className="inline w-4 h-4 mr-1" />
          Select Temple *
        </label>
        <select
          name="location"
          value={formData.location}
          onChange={handleTempleChange}
          className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:outline-none transition-all ${
            errors.location ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-orange-500 focus:border-orange-500'
          }`}
          required
        >
          <option value="">Choose your destination</option>
          {temples.map((temple, i) => (
            <option key={i} value={temple.name}>
              {temple.image} {temple.name} - {temple.description}
            </option>
          ))}
        </select>
        {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
      </div>

      {formData.location && (
        <motion.div
          className="p-4 bg-white/50 rounded-xl border border-gray-200"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center space-x-3 mb-2">
            <div className={`w-4 h-4 rounded-full ${getCrowdColor(temples.find(t => t.name === formData.location)?.density || "Moderate")}`}></div>
            <span className="font-semibold text-gray-800">
              Current Crowd Level: {temples.find(t => t.name === formData.location)?.density}
            </span>
          </div>
          <p className="text-sm text-gray-600">
            {temples.find(t => t.name === formData.location)?.description}
          </p>
          <div className="mt-3 text-xs text-gray-500">
            💡 <strong>Smart Recommendation:</strong> Based on current crowd levels, this temple offers a peaceful experience today.
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-2 gap-4">
        {temples.map((temple, index) => (
          <motion.div
            key={temple.name}
            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
              formData.location === temple.name
                ? 'border-orange-500 bg-orange-50'
                : 'border-gray-200 bg-white/50 hover:border-gray-300'
            }`}
            onClick={() => {
              const event = { target: { name: 'location', value: temple.name } } as React.ChangeEvent<HTMLSelectElement>;
              handleTempleChange(event);
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-2xl mb-2">{temple.image}</div>
            <h4 className="font-semibold text-sm text-gray-800">{temple.name}</h4>
            <p className="text-xs text-gray-600 mt-1">{temple.description}</p>
            <div className="flex items-center mt-2">
              <div className={`w-2 h-2 rounded-full mr-2 ${getCrowdColor(temple.density)}`}></div>
              <span className="text-xs text-gray-500">{temple.density} Crowd</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
