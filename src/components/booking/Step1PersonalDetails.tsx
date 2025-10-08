"use client";
import { motion } from "framer-motion";
import { Mail, User, Phone } from "lucide-react";

interface Step1Props {
  formData: any;
  errors: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Step1PersonalDetails({ formData, errors, handleChange }: Step1Props) {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <User className="inline w-4 h-4 mr-1" />
          Full Name *
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:outline-none transition-all ${
            errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal-500 focus:border-teal-500'
          }`}
          required
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Mail className="inline w-4 h-4 mr-1" />
          Email Address *
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:outline-none transition-all ${
            errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal-500 focus:border-teal-500'
          }`}
          required
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Phone className="inline w-4 h-4 mr-1" />
          Mobile Number *
        </label>
        <input
          type="tel"
          name="mobile"
          placeholder="Enter your mobile number"
          value={formData.mobile}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:outline-none transition-all ${
            errors.mobile ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal-500 focus:border-teal-500'
          }`}
          required
        />
        {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
      </div>
    </motion.div>
  );
}
