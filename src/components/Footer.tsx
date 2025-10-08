import { motion } from "motion/react";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Heart
} from "lucide-react";

export function Footer() {
  const links = {
    company: [
      { name: "About", href: "#about" },
      { name: "Features", href: "#features" },
      { name: "How it Works", href: "#" },
      { name: "Pricing", href: "#" }
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "#contact" },
      { name: "Safety Guidelines", href: "#" },
      { name: "FAQ", href: "#" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Disclaimer", href: "#" }
    ]
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" }
  ];

  return (
    <footer className="bg-gradient-to-br from-[#111827] to-[#1F2937] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F59E0B]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0EA5A4]/5 rounded-full blur-3xl"></div>
        
        {/* Subtle mandala pattern */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-8 right-8 w-24 h-24 opacity-10"
        >
          <div className="w-full h-full bg-gradient-to-r from-[#F59E0B] to-[#0EA5A4] rounded-full blur-sm"></div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#F59E0B] to-[#0EA5A4] rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🕉️</span>
                  </div>
                  <span className="text-2xl font-bold">PilgrimSafe</span>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Transforming spiritual journeys through intelligent technology, 
                  ensuring safety, convenience, and peace of mind for every pilgrim.
                </p>

                {/* Contact info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-4 h-4 text-[#F59E0B]" />
                    <span className="text-sm">support@pilgrimsafe.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-4 h-4 text-[#0EA5A4]" />
                    <span className="text-sm">+91 1800-PILGRIM</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-4 h-4 text-[#F59E0B]" />
                    <span className="text-sm">Mumbai, India</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Links sections */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Company */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold mb-6 text-[#F59E0B]">Company</h3>
                  <ul className="space-y-3">
                    {links.company.map((link) => (
                      <li key={link.name}>
                        <a 
                          href={link.href}
                          className="text-gray-300 hover:text-[#F59E0B] transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Support */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold mb-6 text-[#0EA5A4]">Support</h3>
                  <ul className="space-y-3">
                    {links.support.map((link) => (
                      <li key={link.name}>
                        <a 
                          href={link.href}
                          className="text-gray-300 hover:text-[#0EA5A4] transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Legal */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold mb-6 text-[#F59E0B]">Legal</h3>
                  <ul className="space-y-3">
                    {links.legal.map((link) => (
                      <li key={link.name}>
                        <a 
                          href={link.href}
                          className="text-gray-300 hover:text-[#F59E0B] transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-gray-300"
            >
              <span>© 2025 PilgrimSafe. All Rights Reserved.</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> for devotees
              </span>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="w-10 h-10 bg-gray-700 hover:bg-gradient-to-r hover:from-[#F59E0B] hover:to-[#0EA5A4] rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}