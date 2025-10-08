import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Smartphone, Users, Download } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

export function DownloadSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F59E0B]/10 to-[#0EA5A4]/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#F59E0B]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#0EA5A4]/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#F59E0B]/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-[#F59E0B] to-[#0EA5A4] bg-clip-text text-transparent">
              Plan your visit. Stay informed. Travel with peace of mind.
            </h2>
            
            <p className="text-lg text-[#111827]/70 mb-8 max-w-lg">
              Download the PilgrimSafe app and transform your spiritual journey with intelligent 
              crowd management, digital darshan passes, and real-time safety updates.
            </p>

            {/* Features list */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-2 h-2 bg-[#F59E0B] rounded-full"></div>
                <span className="text-[#111827]/70">Instant darshan booking</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-2 h-2 bg-[#0EA5A4] rounded-full"></div>
                <span className="text-[#111827]/70">Live crowd monitoring</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-2 h-2 bg-[#F59E0B] rounded-full"></div>
                <span className="text-[#111827]/70">Smart navigation & safety alerts</span>
              </div>
            </div>

            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#D97706] hover:to-[#B45309] text-white px-8 py-4 shadow-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download App
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-[#0EA5A4] text-[#0EA5A4] hover:bg-[#0EA5A4] hover:text-white px-8 py-4"
              >
                <Users className="w-5 h-5 mr-2" />
                Join as Admin
              </Button>
            </div>

            {/* App store badges */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 bg-black text-white px-4 py-3 rounded-lg cursor-pointer"
              >
                <div className="text-2xl">📱</div>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 bg-black text-white px-4 py-3 rounded-lg cursor-pointer"
              >
                <div className="text-2xl">🤖</div>
                <div>
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto max-w-sm lg:max-w-md">
              {/* Main phone */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative bg-[#111827] rounded-[3rem] p-3 shadow-2xl"
              >
                <div className="bg-gradient-to-br from-[#F59E0B]/20 to-[#0EA5A4]/20 rounded-[2.5rem] overflow-hidden">
                  <div className="relative h-96 bg-white">
                    {/* App screen mockup */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/10 to-[#0EA5A4]/10">
                      <div className="p-6">
                        {/* Status bar */}
                        <div className="flex justify-between items-center mb-6">
                          <div className="text-sm font-medium">PilgrimSafe</div>
                          <div className="text-sm">9:41 AM</div>
                        </div>
                        
                        {/* App content */}
                        <div className="space-y-4">
                          <div className="bg-white rounded-xl p-4 shadow-sm">
                            <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 bg-[#F59E0B] rounded-lg flex items-center justify-center">
                                <Smartphone className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <div className="font-medium">Kedarnath Temple</div>
                                <div className="text-sm text-gray-500">Queue: 25 min</div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="bg-white rounded-xl p-4 shadow-sm">
                            <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 bg-[#0EA5A4] rounded-lg flex items-center justify-center">
                                <Users className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <div className="font-medium">Live Status</div>
                                <div className="text-sm text-gray-500">Moderate crowd</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating notification */}
              <motion.div
                animate={{ x: [-5, 5, -5], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-[#F59E0B]/20"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[#F59E0B] rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium">New Alert</span>
                </div>
              </motion.div>

              {/* Floating stats */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-[#0EA5A4]/20"
              >
                <div className="text-center">
                  <div className="text-[#0EA5A4] font-bold">4.8★</div>
                  <div className="text-xs text-gray-500">Rating</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}