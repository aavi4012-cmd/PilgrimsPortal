"use client";
import { motion } from "framer-motion";
import { Users, Calendar, Clock, MapPin, User, Mail, Phone, CheckCircle } from "lucide-react";

interface Step4Props {
  formData: any;
  handleSubmit: (e: React.FormEvent) => void;
  loading: boolean;
}

export default function Step4ReviewConfirm({ formData, handleSubmit, loading }: Step4Props) {
  const temples = {
    "Kedarnath Temple": { image: "🏔️", description: "One of the twelve Jyotirlingas" },
    "Badrinath Temple": { image: "🏛️", description: "Home to Lord Vishnu" },
    "Vaishno Devi": { image: "🕳️", description: "Popular cave temple" },
    "Golden Temple": { image: "🕌", description: "Sikh pilgrimage site" },
  };

  const selectedTemple = temples[formData.location as keyof typeof temples];

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Review Your Booking</h3>
        <p className="text-gray-600">Please confirm your details before proceeding</p>
      </div>

      {/* Booking Summary Card */}
      <motion.div
        className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center mb-4">
          <div className="text-3xl mr-3">{selectedTemple?.image}</div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800">{formData.location}</h4>
            <p className="text-sm text-gray-600">{selectedTemple?.description}</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center">
            <User className="w-4 h-4 text-teal-600 mr-3" />
            <span className="text-sm text-gray-700">{formData.name}</span>
          </div>
          <div className="flex items-center">
            <Mail className="w-4 h-4 text-teal-600 mr-3" />
            <span className="text-sm text-gray-700">{formData.email}</span>
          </div>
          <div className="flex items-center">
            <Phone className="w-4 h-4 text-teal-600 mr-3" />
            <span className="text-sm text-gray-700">{formData.mobile}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 text-orange-600 mr-3" />
            <span className="text-sm text-gray-700">{formData.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 text-orange-600 mr-3" />
            <span className="text-sm text-gray-700">{formData.time}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 text-orange-600 mr-3" />
            <span className="text-sm text-gray-700">{formData.pilgrims} Pilgrim{formData.pilgrims > 1 ? 's' : ''}</span>
          </div>
        </div>
      </motion.div>

      {/* Terms and Conditions */}
      <motion.div
        className="bg-yellow-50 border border-yellow-200 rounded-xl p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex items-start">
          <CheckCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <h5 className="font-medium text-yellow-800 mb-1">Important Notes</h5>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Please arrive 15 minutes before your scheduled time</li>
              <li>• Carry valid ID proof and booking confirmation</li>
              <li>• Follow all safety and hygiene protocols</li>
              <li>• Weather-appropriate clothing recommended</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Book Now Button */}
      <motion.button
        type="button"
        onClick={handleSubmit}
        disabled={loading}
        className="w-full py-4 bg-gradient-to-r from-orange-500 to-teal-500 hover:from-orange-600 hover:to-teal-600 text-white font-semibold rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
            Processing Booking...
          </div>
        ) : (
          "Confirm & Book Now 🕉️"
        )}
      </motion.button>
    </motion.div>
  );
}
