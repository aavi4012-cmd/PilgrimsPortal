"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
// import { SignupPage } from "./sign/SignupModal";
import { Link } from "react-router-dom";
import CrowdPredictor from "./CrowdPredictor";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ---------- LOGO ---------- */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#F59E0B] to-[#0EA5A4] rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white text-lg">🕉️</span>
            </div>
            <span className="text-xl font-semibold text-[#111827] tracking-wide">
              PilgrimSafe
            </span>
          </div>

          {/* ---------- DESKTOP NAV ---------- */}
          <nav className="hidden md:flex space-x-8 items-center relative">
            <Link
              to="/"
              className="text-[#111827] hover:text-[#F59E0B] transition-colors"
            >
              Home
            </Link>
            <Link
              to="/booking"
              className="text-[#111827] hover:text-[#F59E0B] transition-colors"
            >
              Booking
            </Link>
            <Link
              to="/crowd-predictor"
              className="text-[#111827] hover:text-[#F59E0B] transition-colors"
            >
              Crowd Predictor
            </Link>

            <a
              href="#gallery"
              className="text-[#111827] hover:text-[#F59E0B] transition-colors"
            >
              Gallery
            </a>

            {/* ---------- ADMIN DROPDOWN ---------- */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsAdminOpen(true)}
                onClick={() => setIsAdminOpen(!isAdminOpen)}
                className="flex items-center space-x-1 text-[#111827] hover:text-[#F59E0B] transition-colors"
              >
                <span>Admin</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {isAdminOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-60 bg-white border border-gray-200 shadow-xl rounded-xl overflow-hidden z-50"
                    onMouseEnter={() => setIsAdminOpen(true)}
                    onMouseLeave={() => setIsAdminOpen(false)}
                  >
                    <Link
                      to="/admin/dashboard"
                      className="block px-4 py-2.5 text-[#111827] hover:bg-[#F59E0B]/10 transition-colors"
                    >
                      🧭 Admin Dashboard
                    </Link>
                    <Link
                      to="/admin/incidents"
                      className="block px-4 py-2.5 text-[#111827] hover:bg-[#F59E0B]/10 transition-colors"
                    >
                      🚨 Incident Management
                    </Link>
                    <Link
                      to="/admin/notifications"
                      className="block px-4 py-2.5 text-[#111827] hover:bg-[#F59E0B]/10 transition-colors"
                    >
                      ⚠️ Safety Alerts & Notifications
                    </Link>
                    <Link
                      to="/admin/cameras"
                      className="block px-4 py-2.5 text-[#111827] hover:bg-[#F59E0B]/10 transition-colors"
                    >
                      🎥 Camera Monitoring
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#contact"
              className="text-[#111827] hover:text-[#F59E0B] transition-colors"
            >
              Contact Us
            </a>
          </nav>

          {/* ---------- DESKTOP BUTTONS ---------- */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/sign/SignupModal"
            >
            <Button
              variant="outline"
              className="border-[#0EA5A4] text-[#0EA5A4] hover:bg-[#0EA5A4] hover:text-white"
              // onClick={() => setIsSignupOpen(true)}
            >
            SignUp
            </Button>
            <Button className="bg-gradient-to-r from-[#F59E0B] to-[#0EA5A4] hover:from-[#D97706] hover:to-[#0D9488] shadow-md">
              Get Started
            </Button>
            </Link>  
          </div>

          {/* ---------- MOBILE MENU BUTTON ---------- */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[#111827]" />
            ) : (
              <Menu className="w-6 h-6 text-[#111827]" />
            )}
          </button>
        </div>

        {/* ---------- MOBILE NAV MENU ---------- */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm rounded-lg mt-2 border border-white/20 shadow-sm">
              <Link
                to="/"
                className="block px-3 py-2 text-[#111827] hover:text-[#F59E0B]"
              >
                Home
              </Link>
              <Link
                to="/booking"
                className="block px-3 py-2 text-[#111827] hover:text-[#F59E0B]"
              >
                Booking
              </Link>
              <a
                href="#gallery"
                className="block px-3 py-2 text-[#111827] hover:text-[#F59E0B]"
              >
                Gallery
              </a>

              {/* --- MOBILE ADMIN DROPDOWN --- */}
              <details className="px-3 py-2">
                <summary className="cursor-pointer text-[#111827] hover:text-[#F59E0B]">
                  Admin
                </summary>
                <div className="ml-4 mt-1 space-y-1">
                  <Link
                    to="/admin/dashboard"
                    className="block text-sm text-gray-700 hover:text-[#F59E0B]"
                  >
                    Admin Dashboard
                  </Link>
                  <Link
                    to="/admin/incidents"
                    className="block text-sm text-gray-700 hover:text-[#F59E0B]"
                  >
                    Incident Management
                  </Link>
                  <Link
                    to="/admin/notifications"
                    className="block text-sm text-gray-700 hover:text-[#F59E0B]"
                  >
                    Safety Alerts & Notifications
                  </Link>
                  <Link
                    to="/admin/cameras"
                    className="block text-sm text-gray-700 hover:text-[#F59E0B]"
                  >
                    Camera Monitoring
                  </Link>
                </div>
              </details>

              <a
                href="#contact"
                className="block px-3 py-2 text-[#111827] hover:text-[#F59E0B]"
              >
                Contact Us
              </a>

              <div className="flex flex-col space-y-2 px-3 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#0EA5A4] text-[#0EA5A4]"
                >
                  <Link 
                  to="/sign/SignupModal">
                    SignUp
                  </Link>
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-[#F59E0B] to-[#0EA5A4]"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ---------- SIGNUP MODAL ---------- */}
      
    </header>
  );
}
