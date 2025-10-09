import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogTrigger, DialogContent } from "../ui/dialog";
import Ddesign from "../Ddesign";

const Gallery = () => {
  const images = [
    "src/assets/temple/temple1.jpg",
    "src/assets/temple/temple2.jpg",
    "src/assets/temple/temple3.jpg",
    "src/assets/temple/temple4.jpg",
    "src/assets/temple/temple5.jpg",
    "src/assets/temple/temple6.jpg",
    "src/assets/temple/temple7.jpg",
    "src/assets/temple/temple8.jpg",
  ];

  // 🧭 Corresponding Sketchfab embed URLs for each image
  const embedLinks = [
    "https://sketchfab.com/models/b0e8659fe64a42008e1f6fc758c9b053/embed", // model 1
    "https://sketchfab.com/models/059169f965a84d4abfc9bc6d415c0f43/embed", // model 2
    "https://sketchfab.com/models/7370565d936e4bad8682c73c645f2f54/embed", // model 3
    "ttps://sketchfab.com/models/a42268a0e2a54500a6b2ed58a7e4410c/embed", // model 4
    "https://sketchfab.com/models/c7dce6d8ea7b4c4c94bc727f11ff4e17/embed", // model 5
    "https://sketchfab.com/models/21e88c30b4a24e11b894d5b3d2b442d4/embed", // model 6
    "https://sketchfab.com/models/9e92f15c424d429985a28f79985b91b0/embed", // model 7
    "https://sketchfab.com/models/665a7f8547b34a9fa5c68c1caa5b8ab5/embed", // model 8
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ⏪ Navigate between models if needed (optional)
  const prevModel = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextModel = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  // 🎹 Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "ArrowLeft") prevModel();
      if (e.key === "ArrowRight") nextModel();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex]);

  return (
    <section className="bg-gray-900 text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mb-24">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-10 tracking-tight">
          Discover Our Collection
        </h2>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {images.map((src, index) => (
              <DialogTrigger asChild key={index}>
                <motion.div
                  className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsOpen(true);
                  }}
                >
                  <img
                    src={src}
                    alt={`Temple image ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transform transition-all duration-500 ease-in-out grayscale group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <p className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                      View {index + 1}
                    </p>
                  </div>
                </motion.div>
              </DialogTrigger>
            ))}
          </div>

          {/* 💠 Dynamic 3D Model Viewer */}
          <DialogContent className="w-full h-screen p-0 bg-black flex justify-center items-center">
            <Ddesign embedUrl={embedLinks[currentIndex]} />
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
