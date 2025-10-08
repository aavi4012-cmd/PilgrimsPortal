"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BookingStepIndicator from "./BookingStepIndicator";
import AnimatedBackground from "./AnimatedBackground";
import BookingSidebar from "./BookingSidebar";
import Step1PersonalDetails from "./booking/Step1PersonalDetails";
import Step2TempleSelection from "./booking/Step2TempleSelection";
import Step3DateTimeSelection from "./booking/Step3DateTimeSelection";
import Step4ReviewConfirm from "./booking/Step4ReviewConfirm";
import SuccessScreen from "./booking/SuccessScreen";

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    location: "",
    date: "",
    time: "",
    pilgrims: 1,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [crowdLevel, setCrowdLevel] = useState("Moderate");
  const [bookingId, setBookingId] = useState("");

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};
    if (step === 0) {
      if (!formData.name.trim()) newErrors.name = "Full name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
      if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
      else if (!/^\d{10}$/.test(formData.mobile.replace(/\D/g, ''))) newErrors.mobile = "Enter valid 10-digit mobile number";
    } else if (step === 1) {
      if (!formData.location) newErrors.location = "Please select a temple";
    } else if (step === 2) {
      if (!formData.date) newErrors.date = "Please select a date";
      if (!formData.time) newErrors.time = "Please select a time slot";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(currentStep)) return;

    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    const id = "PS" + Date.now().toString().slice(-8);
    setBookingId(id);
    setLoading(false);
    setCurrentStep(4); // Show success screen
  };

  const handleDownloadPass = () => {
    // Simulate download
    alert("Downloading QR Pass...");
  };

  const handleViewBooking = () => {
    // Reset to step 0 or show booking details
    setCurrentStep(0);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <Step1PersonalDetails formData={formData} errors={errors} handleChange={handleChange} />;
      case 1:
        return <Step2TempleSelection formData={formData} errors={errors} handleChange={handleChange} setCrowdLevel={setCrowdLevel} />;
      case 2:
        return <Step3DateTimeSelection formData={formData} errors={errors} handleChange={handleChange} />;
      case 3:
        return <Step4ReviewConfirm formData={formData} handleSubmit={handleSubmit} loading={loading} />;
      case 4:
        return <SuccessScreen bookingId={bookingId} formData={formData} onDownloadPass={handleDownloadPass} onViewBooking={handleViewBooking} />;
      default:
        return null;
    }
  };

  if (currentStep === 4) {
    return <SuccessScreen bookingId={bookingId} formData={formData} onDownloadPass={handleDownloadPass} onViewBooking={handleViewBooking} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-teal-50 relative overflow-hidden">
      <AnimatedBackground />

      {/* Hero Section */}
      <motion.div
        className="text-center py-12 px-6 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-cinzel">
          🕉️ PilgrimSafe Booking
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-poppins">
          Experience divine peace with our AI-powered crowd management and seamless booking system
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 pb-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Booking Card */}
          <div className="flex-1">
            <motion.div
              className="bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-8 border border-white/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <BookingStepIndicator currentStep={currentStep} />

              <div className="mt-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {renderStepContent()}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Buttons */}
              {currentStep < 3 && (
                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="flex items-center px-6 py-3 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed text-gray-700 rounded-xl transition-all duration-300"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Previous
                  </button>

                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-teal-500 hover:from-orange-600 hover:to-teal-600 text-white rounded-xl shadow-lg transition-all duration-300"
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <BookingSidebar />
        </div>
      </div>
    </div>
  );
}
