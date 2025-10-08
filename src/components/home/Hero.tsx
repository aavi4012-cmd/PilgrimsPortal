import { Button } from "../ui/button";
import { Shield, MapPin, Users, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1744979324655-520e1be34f4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW1wbGUlMjBzdW5yaXNlJTIwc2lsaG91ZXR0ZSUyMGluZGlhfGVufDF8fHx8MTc1OTc1NDIxM3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Temple at sunrise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/80 via-[#F59E0B]/40 to-[#0EA5A4]/60"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Experience a Safer, Smarter, and More{" "}
            <span className="bg-gradient-to-r from-[#F59E0B] to-white bg-clip-text text-transparent">
              Peaceful Pilgrimage
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join PilgrimSafe to book digital darshan passes, view live crowd data, 
            and receive safety alerts for a truly serene spiritual journey.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#D97706] hover:to-[#B45309] text-white px-8 py-4 text-lg shadow-2xl"
            >
              🕉️ Book My Darshan
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg"
            >
              Learn More
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              🏠 Home
            </Button>
          </div>

          {/* Animated Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center items-center space-x-8 text-white/80"
          >
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center"
            >
              <Shield className="w-8 h-8 mb-2" />
              <span className="text-sm">Safety</span>
            </motion.div>
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="flex flex-col items-center"
            >
              <MapPin className="w-8 h-8 mb-2" />
              <span className="text-sm">Navigation</span>
            </motion.div>
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="flex flex-col items-center"
            >
              <Users className="w-8 h-8 mb-2" />
              <span className="text-sm">Crowd Info</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
      >
        <Sparkles className="w-6 h-6" />
      </motion.div>
    </section>
  );
}