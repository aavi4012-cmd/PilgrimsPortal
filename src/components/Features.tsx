import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { 
  Users, 
  Clock, 
  CreditCard, 
  Shield, 
  MapPin, 
  Globe,
  QrCode,
  Bell,
  Navigation
} from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Users,
      title: "Real-Time Crowd Tracking",
      description: "Monitor live crowd density and waiting times at temples and holy sites for better planning."
    },
    {
      icon: Clock,
      title: "Smart Queue Management",
      description: "Skip physical queues with intelligent slot booking and estimated waiting time predictions."
    },
    {
      icon: QrCode,
      title: "Digital Darshan Passes",
      description: "Book and manage your temple visits digitally with QR-based entry and seamless access."
    },
    {
      icon: Shield,
      title: "Safety & Emergency Alerts",
      description: "Receive instant notifications about crowd conditions, weather, and emergency situations."
    },
    {
      icon: Navigation,
      title: "Pilgrim Navigation & Maps",
      description: "Get turn-by-turn directions to temples, accommodations, and essential facilities."
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Access the platform in your preferred language with comprehensive regional support."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-[#F8FAFC] to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-[#F59E0B] to-[#0EA5A4] bg-clip-text text-transparent">
            Key Features
          </h2>
          <p className="text-lg text-[#111827]/70 max-w-2xl mx-auto">
            Comprehensive tools designed to enhance your spiritual journey while ensuring safety and convenience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="h-full bg-white/60 backdrop-blur-sm border-white/30 hover:shadow-xl hover:shadow-[#F59E0B]/10 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                    className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#F59E0B] to-[#0EA5A4] rounded-2xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#F59E0B]/25"
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl mb-4 text-[#111827] group-hover:text-[#F59E0B] transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-[#111827]/70 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional feature highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-[#F59E0B]/10 to-[#0EA5A4]/10 border-none">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Bell className="w-8 h-8 text-[#F59E0B] mr-3" />
                <h3 className="text-xl text-[#111827]">Smart Notifications</h3>
              </div>
              <p className="text-[#111827]/70">
                Stay informed with personalized alerts about optimal visit times, special events, 
                and important announcements from your selected temples.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}