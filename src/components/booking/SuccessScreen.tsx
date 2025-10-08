"use client";
import { motion } from "framer-motion";
import { CheckCircle, Download, Eye, QrCode } from "lucide-react";
import { useEffect, useState } from "react";

interface SuccessScreenProps {
  bookingId: string;
  formData: any;
  onDownloadPass: () => void;
  onViewBooking: () => void;
}

export default function SuccessScreen({ bookingId, formData, onDownloadPass, onViewBooking }: SuccessScreenProps) {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-teal-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Simple confetti animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-teal-400 rounded-full"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: -10,
                rotate: 0,
              }}
              animate={{
                y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 10,
                rotate: 360,
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                delay: Math.random() * 2,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      )}

      <motion.div
        className="max-w-md w-full bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/50 text-center relative z-10"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Success Animation */}
        <motion.div
          className="mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        >
          <motion.div
            className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <CheckCircle className="w-10 h-10 text-white" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Booking Confirmed! 🕉️</h2>
            <p className="text-gray-600">Your spiritual journey awaits</p>
          </motion.div>
        </motion.div>

        {/* Booking Details */}
        <motion.div
          className="bg-gray-50 rounded-2xl p-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="text-sm text-gray-600 mb-1">Booking ID</div>
          <div className="text-lg font-bold text-gray-800 font-mono">{bookingId}</div>
        </motion.div>

        {/* Temple Info */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="text-4xl mb-2">
            {formData.location === "Kedarnath Temple" && "🏔️"}
            {formData.location === "Badrinath Temple" && "🏛️"}
            {formData.location === "Vaishno Devi" && "🕳️"}
            {formData.location === "Golden Temple" && "🕌"}
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{formData.location}</h3>
          <p className="text-sm text-gray-600">{formData.date} at {formData.time}</p>
          <p className="text-sm text-gray-600">{formData.pilgrims} Pilgrim{formData.pilgrims > 1 ? 's' : ''}</p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <button
            onClick={onDownloadPass}
            className="w-full flex items-center justify-center py-3 px-4 bg-gradient-to-r from-orange-500 to-teal-500 hover:from-orange-600 hover:to-teal-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
          >
            <QrCode className="w-5 h-5 mr-2" />
            Download Pass (QR)
          </button>

          <button
            onClick={onViewBooking}
            className="w-full flex items-center justify-center py-3 px-4 bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-xl shadow-sm transition-all duration-300"
          >
            <Eye className="w-5 h-5 mr-2" />
            View Booking Details
          </button>
        </motion.div>

        {/* Footer Message */}
        <motion.div
          className="mt-6 text-xs text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          A confirmation email has been sent to {formData.email}
        </motion.div>
      </motion.div>
    </div>
  );
}
