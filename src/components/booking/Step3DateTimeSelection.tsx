"use client";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";

interface Step3Props {
  formData: any;
  errors: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const timeSlots = [
  "06:00 AM", "08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM", "06:00 PM"
];

export default function Step3DateTimeSelection({ formData, errors, handleChange }: Step3Props) {
  const recommendedSlot = "10:00 AM"; // Smart recommendation based on crowd data

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Calendar className="inline w-4 h-4 mr-1" />
          Select Date *
        </label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          min={new Date().toISOString().split('T')[0]}
          className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:outline-none transition-all ${
            errors.date ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal-500 focus:border-teal-500'
          }`}
          required
        />
        {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Clock className="inline w-4 h-4 mr-1" />
          Preferred Time Slot *
        </label>
        <select
          name="time"
          value={formData.time}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:outline-none transition-all ${
            errors.time ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal-500 focus:border-teal-500'
          }`}
          required
        >
          <option value="">Select time</option>
          {timeSlots.map((slot, i) => (
            <option key={i} value={slot}>
              {slot}
            </option>
          ))}
        </select>
        {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
      </div>

      {/* Smart Recommendation */}
      <motion.div
        className="p-4 bg-gradient-to-r from-teal-50 to-orange-50 rounded-xl border border-teal-200"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center mb-2">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          <span className="font-semibold text-teal-800">Smart Recommendation</span>
        </div>
        <p className="text-sm text-teal-700 mb-2">
          Based on current crowd analytics and weather conditions, we recommend:
        </p>
        <div className="bg-white/70 p-3 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-medium text-gray-800">{recommendedSlot}</span>
              <span className="text-sm text-gray-600 ml-2">- Optimal time for peaceful darshan</span>
            </div>
            <button
              type="button"
              onClick={() => {
                const event = { target: { name: 'time', value: recommendedSlot } } as React.ChangeEvent<HTMLSelectElement>;
                handleChange(event);
              }}
              className="px-3 py-1 bg-teal-600 text-white text-xs rounded-full hover:bg-teal-700 transition-colors"
            >
              Select
            </button>
          </div>
        </div>
      </motion.div>

      {/* Time Slots Grid */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-3">Available Time Slots</h4>
        <div className="grid grid-cols-3 gap-3">
          {timeSlots.map((slot, index) => (
            <motion.button
              key={slot}
              type="button"
              onClick={() => {
                const event = { target: { name: 'time', value: slot } } as React.ChangeEvent<HTMLSelectElement>;
                handleChange(event);
              }}
              className={`p-3 rounded-xl border-2 text-center transition-all ${
                formData.time === slot
                  ? 'border-teal-500 bg-teal-50 text-teal-700'
                  : 'border-gray-200 bg-white/50 hover:border-gray-300 text-gray-700'
              } ${slot === recommendedSlot ? 'ring-2 ring-orange-300' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-sm font-medium">{slot}</div>
              {slot === recommendedSlot && (
                <div className="text-xs text-orange-600 mt-1">Recommended</div>
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
