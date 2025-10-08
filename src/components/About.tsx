import { motion } from "motion/react";
import { Card } from "./ui/card";
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-[#F8FAFC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-[#F59E0B] to-[#0EA5A4] bg-clip-text text-transparent">
            What is PilgrimSafe?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-[#111827]/80 leading-relaxed">
              PilgrimSafe is a revolutionary platform that transforms the spiritual journey experience 
              through intelligent crowd management and safety technology. We bridge the gap between 
              ancient traditions and modern convenience, ensuring every pilgrim can focus on their 
              spiritual connection while we handle the logistics.
            </p>
            
            <p className="text-lg text-[#111827]/80 leading-relaxed">
              Our mission is to preserve the sanctity of pilgrimage while providing unprecedented 
              safety, convenience, and peace of mind. From real-time crowd monitoring to seamless 
              digital darshan booking, we're here to make your spiritual journey more meaningful.
            </p>

            {/* Trust indicator */}
            <Card className="p-6 bg-gradient-to-r from-[#F59E0B]/10 to-[#0EA5A4]/10 border-none">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-[#0EA5A4] rounded-full animate-pulse"></div>
                <span className="text-[#111827] font-medium">
                  Trusted by thousands of pilgrims every day
                </span>
                <div className="w-3 h-3 bg-[#F59E0B] rounded-full animate-pulse"></div>
              </div>
            </Card>
          </motion.div>

          {/* Mock Device Screens */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto max-w-sm">
              {/* Phone mockup */}
              <div className="relative bg-[#111827] rounded-[2.5rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1694878981815-d643689e51fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBtb2NrdXB8ZW58MXx8fHwxNzU5NzMwNDM2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="PilgrimSafe app interface"
                    className="w-full h-96 object-cover"
                  />
                  
                  {/* App overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F59E0B]/80 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <div className="text-sm opacity-90 mb-1">Live Status</div>
                      <div className="font-semibold">Temple Queue: 45 min</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dashboard preview */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl p-4"
              >
                <div className="text-center">
                  <div className="text-[#F59E0B] text-xl font-bold">12K+</div>
                  <div className="text-xs text-[#111827]/70">Active Users</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl p-4"
              >
                <div className="text-center">
                  <div className="text-[#0EA5A4] text-xl font-bold">48</div>
                  <div className="text-xs text-[#111827]/70">Temples</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}