"use client";
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";
import { Link } from "react-router-dom";
export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      // style={{
      //   backgroundImage: `url(${new URL('../../assets/bg.png', import.meta.url).href})`,
      // }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#F59E0B]/60 to-[#0EA5A4]/60 mix-blend-overlay" />

      {/* Background icons */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-32 text-6xl text-white/60">📍</div>
        <div className="absolute top-1/3 right-40 text-7xl text-white/50">🕉️</div>
        <div className="absolute bottom-32 left-48 text-6xl text-white/60">🧘‍♂️</div>
        <div className="absolute bottom-20 right-56 text-5xl text-white/70">🛕</div>
      </div>

      {/* Signup card */}
      <div className="relative z-10 bg-white/50 backdrop-blur-xl p-8 rounded-3xl shadow-2xl w-md border border-white/30">
        <h2 className="text-3xl font-bold text-center text-[#0EA5A4] mb-1">
          Create Your Account
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Join <span className="font-semibold text-[#F59E0B]">PilgrimSafe</span> — 
          your smart darshan companion.
        </p>

        {/* Form */}
        <form className="space-y-4">
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white/70">
            <User className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-transparent focus:outline-none text-gray-800"
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white/70">
            <Mail className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent focus:outline-none text-gray-800"
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white/70">
            <Phone className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full bg-transparent focus:outline-none text-gray-800"
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white/70">
            <Lock className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full bg-transparent focus:outline-none text-gray-800"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-500"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white/70">
            <Lock className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full bg-transparent focus:outline-none text-gray-800"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="text-gray-500"
            >
              {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Terms */}
          <div className="flex items-start space-x-2 text-sm text-gray-600">
            <input type="checkbox" className="mt-1" />
            <p>
              I agree to the{" "}
              <span className="text-[#0EA5A4] cursor-pointer hover:underline">
                Terms & Conditions
              </span>{" "}
              and{" "}
              <span className="text-[#0EA5A4] cursor-pointer hover:underline">
                Privacy Policy
              </span>.
            </p>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#0EA5A4] text-white font-semibold shadow-md hover:scale-105 transition-transform"
          >
            Create Account
          </button>

          {/* Alternate logins */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <button className="flex-1 border border-gray-300 py-2 rounded-lg bg-white/60 hover:bg-white/80 transition">
              Continue with Google
            </button>
            <button className="flex-1 border border-gray-300 py-2 rounded-lg bg-white/60 hover:bg-white/80 transition">
              Continue with OTP
            </button>
          </div>
        </form>

        <p className="text-center text-gray-600 mt-5 text-sm">
          Already have an account?{" "}
          <Link to="/sign/login" className="text-[#F59E0B] hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
