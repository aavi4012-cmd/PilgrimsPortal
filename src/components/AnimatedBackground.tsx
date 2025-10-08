"use client";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF9933]/20 to-[#009688]/20"></div>

      {/* Floating mandala patterns */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 opacity-10"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="#FF9933" strokeWidth="1" fill="none" />
          <circle cx="50" cy="50" r="30" stroke="#009688" strokeWidth="1" fill="none" />
          <circle cx="50" cy="50" r="20" stroke="#FF9933" strokeWidth="1" fill="none" />
          <circle cx="50" cy="50" r="10" stroke="#009688" strokeWidth="1" fill="none" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-40 right-20 w-24 h-24 opacity-10"
        animate={{
          rotate: -360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="50,10 90,90 10,90" stroke="#009688" strokeWidth="1" fill="none" />
          <polygon points="50,20 80,80 20,80" stroke="#FF9933" strokeWidth="1" fill="none" />
          <polygon points="50,30 70,70 30,70" stroke="#009688" strokeWidth="1" fill="none" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-1/4 w-40 h-40 opacity-5"
        animate={{
          rotate: 360,
          y: [0, -20, 0],
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" stroke="#FF9933" strokeWidth="0.5" fill="none" />
          <circle cx="50" cy="50" r="35" stroke="#009688" strokeWidth="0.5" fill="none" />
          <circle cx="50" cy="50" r="25" stroke="#FF9933" strokeWidth="0.5" fill="none" />
          <circle cx="50" cy="50" r="15" stroke="#009688" strokeWidth="0.5" fill="none" />
          <circle cx="50" cy="50" r="5" stroke="#FF9933" strokeWidth="0.5" fill="none" />
        </svg>
      </motion.div>

      {/* Floating diyas */}
      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 opacity-20"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="50" cy="70" rx="20" ry="15" fill="#FF9933" />
          <rect x="45" y="55" width="10" height="15" fill="#8B4513" />
          <circle cx="50" cy="50" r="3" fill="#FFD700" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-20 w-12 h-12 opacity-15"
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="50" cy="70" rx="15" ry="10" fill="#009688" />
          <rect x="47" y="60" width="6" height="10" fill="#654321" />
          <circle cx="50" cy="55" r="2" fill="#FFD700" />
        </svg>
      </motion.div>
    </div>
  );
}
