"use client";
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

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

      {/* Login card */}
      <div className="relative z-10 bg-white/50 backdrop-blur-xl p-8 rounded-3xl shadow-2xl w-md border border-white/30">
        <h2 className="text-3xl font-bold text-center text-[#0EA5A4] mb-1">
          Welcome Back
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Sign in to <span className="font-semibold text-[#F59E0B]">PilgrimSafe</span> — 
          your smart darshan companion.
        </p>

        {/* Form */}
        <form className="space-y-4">
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white/70">
            <Mail className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="email"
              placeholder="Email Address"
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

          {/* Forgot Password */}
          <div className="text-right">
            <a href="#" className="text-[#0EA5A4] hover:underline text-sm">
              Forgot Password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#0EA5A4] text-white font-semibold shadow-md hover:scale-105 transition-transform"
          >
            Sign In
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
          Don't have an account?{" "}
          <Link to="/sign/SignupModal" className="text-[#F59E0B] hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}
