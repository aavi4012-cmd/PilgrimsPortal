import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      rating: 5,
      text: "PilgrimSafe made our Kedarnath yatra so much smoother! The real-time crowd updates helped us plan our darshan perfectly.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612c88e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi, NCR",
      rating: 5,
      text: "The digital passes saved us hours of waiting. The safety alerts during our Char Dham yatra were incredibly helpful.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Anita Devi",
      location: "Varanasi, UP",  
      rating: 5,
      text: "Being able to navigate through the temple complex with clear directions made our spiritual journey stress-free and meaningful.",
      avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150&h=150&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-br from-white to-[#F8FAFC] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#F59E0B] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#0EA5A4] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-[#F59E0B] to-[#0EA5A4] bg-clip-text text-transparent">
            Pilgrims' Experiences
          </h2>
          <p className="text-lg text-[#111827]/70 max-w-2xl mx-auto">
            Hear from fellow devotees who have transformed their spiritual journeys with PilgrimSafe
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-white/30 shadow-2xl">
              <CardContent className="p-8 sm:p-12 text-center">
                <Quote className="w-12 h-12 text-[#F59E0B]/30 mx-auto mb-6" />
                
                <p className="text-lg sm:text-xl text-[#111827]/80 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="flex items-center justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#F59E0B] fill-current" />
                  ))}
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-[#F59E0B]/20">
                    <img 
                      src={testimonials[currentIndex].avatar} 
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-[#111827]">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-sm text-[#111827]/60">
                      {testimonials[currentIndex].location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Navigation dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#F59E0B] scale-125' 
                    : 'bg-[#111827]/20 hover:bg-[#111827]/40'
                }`}
              />
            ))}
          </div>

          {/* Side testimonials preview */}
          <div className="hidden lg:block">
            {/* Previous testimonial */}
            <motion.div
              animate={{ opacity: 0.6, scale: 0.8 }}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2"
            >
              <Card className="w-64 bg-white/60 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <img 
                      src={testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].avatar}
                      alt="Testimonial"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="font-medium text-sm">
                        {testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].name}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[#111827]/70 line-clamp-3">
                    {testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].text}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Next testimonial */}
            <motion.div
              animate={{ opacity: 0.6, scale: 0.8 }}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2"
            >
              <Card className="w-64 bg-white/60 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <img 
                      src={testimonials[(currentIndex + 1) % testimonials.length].avatar}
                      alt="Testimonial"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="font-medium text-sm">
                        {testimonials[(currentIndex + 1) % testimonials.length].name}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[#111827]/70 line-clamp-3">
                    {testimonials[(currentIndex + 1) % testimonials.length].text}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}