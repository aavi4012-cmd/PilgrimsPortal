import { motion } from "motion/react";
import { Users, Building2, Shield, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      setCount(Math.floor(end * progress));
      
      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [end, duration, isVisible]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true }}
    >
      {count.toLocaleString()}
    </motion.div>
  );
}

export function Stats() {
  const stats = [
    {
      icon: Users,
      value: 12340,
      label: "Active Pilgrims",
      suffix: "",
      color: "text-[#F59E0B]"
    },
    {
      icon: Building2,
      value: 48,
      label: "Temples Covered",
      suffix: "",
      color: "text-[#0EA5A4]"
    },
    {
      icon: Shield,
      value: 3,
      label: "Safety Alerts Today",
      suffix: "",
      color: "text-[#F59E0B]"
    },
    {
      icon: TrendingUp,
      value: 99,
      label: "Satisfaction Rate",
      suffix: "%",
      color: "text-[#0EA5A4]"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[#F59E0B]/5 to-[#0EA5A4]/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
                className="w-12 h-12 mx-auto mb-4 bg-white rounded-xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow"
              >
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </motion.div>
              
              <div className={`text-3xl sm:text-4xl font-bold ${stat.color} mb-2`}>
                <CountUp end={stat.value} />
                {stat.suffix}
              </div>
              
              <div className="text-sm text-[#111827]/70 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}