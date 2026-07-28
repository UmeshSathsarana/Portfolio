import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaCertificate, FaAward, FaSearchPlus, FaTimes } from "react-icons/fa";
import img12 from "../../assets/12.jpg";
import img13 from "../../assets/13.jpg";

function LicensesAndCertifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      title: "BACHELOR OF SCIENCE WITH HONOURS IN SOFTWARE ENGINEERING",
      issuer: "CARDIFF METROPOLITAN UNIVERSITY",
      year: "2025",
      icon: <FaCertificate />,
      image: img12,
    },
    {
      title: "ADVANCED INFORMATION TECHNOLOGY",
      issuer: "SIBA CAMPUS",
      year: "2019",
      icon: <FaAward />,
      image: img13,
    },
  ];

  return (
    <div id="licenses" className="relative min-h-screen bg-black text-white py-20 px-4 md:px-6 overflow-hidden scroll-mt-16">
      
      {/* 🔥 Animated Glow Background */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-10 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-10 animate-pulse pointer-events-none"></div>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
        Licenses & Certifications
      </h1>

      {/* Certifications Grid (Centered 2-Column for Perfect Symmetry) */}
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto relative z-10">
        {certifications.map((cert, index) => (
          <Motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group bg-zinc-900/30 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-pink-500/30 hover:scale-[1.02] hover:shadow-2xl hover:shadow-pink-500/5 transition-all duration-500 flex flex-col h-full"
          >
            {/* Aspect-Fit Certificate Frame */}
            {cert.image && (
              <div 
                className="relative h-60 md:h-64 bg-zinc-950 flex items-center justify-center p-4 overflow-hidden cursor-pointer"
                onClick={() => setSelectedCert(cert)}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="max-h-full max-w-full object-contain rounded drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)] group-hover:scale-[1.03] transition duration-500"
                />

                {/* Glassmorphic Gradient Overlay on Card Hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Motion.div 
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 bg-pink-600/90 text-white font-semibold px-4 py-2 rounded-full shadow-lg shadow-pink-600/30 backdrop-blur-sm"
                  >
                    <FaSearchPlus className="text-lg" />
                    <span className="text-sm tracking-wider uppercase">View Full Screen</span>
                  </Motion.div>
                </div>
              </div>
            )}

            {/* Content Area */}
            <div className="p-6 md:p-8 flex flex-col flex-grow border-t border-white/5">
              {/* Top Row: Icon & Year */}
              <div className="flex justify-between items-center mb-4">
                <div className="text-4xl text-pink-500 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                  {cert.icon}
                </div>
                <span className="text-xs bg-purple-500/10 text-purple-300 font-bold px-3 py-1 rounded-full border border-purple-500/20 tracking-wider">
                  {cert.year}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-pink-400 transition duration-300 leading-snug">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 font-medium tracking-wide uppercase text-xs mt-auto">
                {cert.issuer}
              </p>
            </div>
          </Motion.div>
        ))}
      </div>

      {/* 🖼️ Premium Full Screen Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white text-3xl cursor-pointer p-3 bg-zinc-900/80 rounded-full hover:bg-zinc-800 border border-white/10 transition-all z-[100000]"
              aria-label="Close modal"
            >
              <FaTimes />
            </button>

            {/* Modal Image Wrapper */}
            <Motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} // Prevent click-through closing
              className="relative max-w-4xl w-full max-h-[85vh] flex items-center justify-center"
            >
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
              />
              
              {/* Caption */}
              <div className="absolute -bottom-12 left-0 right-0 text-center px-4">
                <h4 className="text-white font-bold text-sm md:text-base tracking-wide line-clamp-1">
                  {selectedCert.title}
                </h4>
                <p className="text-zinc-400 text-xs mt-1">
                  Issued by {selectedCert.issuer} ({selectedCert.year})
                </p>
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LicensesAndCertifications;
