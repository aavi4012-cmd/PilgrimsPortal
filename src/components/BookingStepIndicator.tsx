"use client";
import { motion } from "framer-motion";
import { MapPin, User, Calendar, CheckCircle } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
}

const steps = [
  { label: "Personal Details", icon: User },
  { label: "Temple Selection", icon: MapPin },
  { label: "Date & Time", icon: Calendar },
  { label: "Review & Confirm", icon: CheckCircle },
];

export default function BookingStepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      {steps.map(({ label, icon: Icon }, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;
        return (
          <div key={index} className="flex-1 flex flex-col items-center relative">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 cursor-default ${
                isCompleted ? "bg-gradient-to-r from-orange-500 to-teal-500 text-white shadow-lg" : ""
              } ${
                isActive ? "bg-white border-2 border-orange-500 text-orange-500 shadow-md" : "bg-gray-200 text-gray-500"
              }`}
            >
              <Icon className="w-5 h-5" />
            </div>
            <span
              className={`text-xs font-semibold text-center select-none ${
                isActive ? "text-orange-600" : "text-gray-500"
              }`}
            >
              {label}
            </span>
            {index < steps.length - 1 && (
              <motion.div
                className="absolute top-5 right-0 h-1 bg-gray-300 rounded-full"
                style={{ width: "100%", left: "50%", right: "-50%" }}
                initial={{ backgroundColor: "#D1D5DB" }}
                animate={{ backgroundColor: isCompleted ? "linear-gradient(90deg, #FF9933, #009688)" : "#D1D5DB" }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
