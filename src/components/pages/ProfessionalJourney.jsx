import { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaAward, FaUserGraduate } from "react-icons/fa";

function ProfessionalJourney() {
  const [activeTab, setActiveTab] = useState("journey"); // "journey" or "licenses"

  // Listen for URL hash changes to toggle tabs from Navbar links
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#licenses") {
        setActiveTab("licenses");
        const element = document.getElementById("journey");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else if (window.location.hash === "#journey") {
        setActiveTab("journey");
      }
    };

    // Check hash on mount
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const journey = [
    {
      year: "2022 - 2025",
      title: "BACHELOR OF SCIENCE WITH HONOURS IN SOFTWARE ENGINEERING",
      place: "Cardiff Metropolitan University",
      description: "Specialized in Software Engineering principles, architecture, modern web development, and cloud computing.",
      icon: <FaGraduationCap />,
    },
    {
      year: "2019",
      title: "Advanced Information Technology",
      place: "Siba Campus",
      description: "Covered core computer systems, networking, foundational programming, and hardware architectures.",
      icon: <FaGraduationCap />,
    },
    {
      year: "2021",
      title: "GCE A/L Examination",
      place: "Swarnajothi National College, Kiribathkumbura",
      description: "Technology stream - Engineering Technology",
      icon: <FaUserGraduate />,
    },
    {
      year: "2018",
      title: "GCE O/L Examination",
      place: "Sri Dheerananda College - Pilimathalawa",
      description: "Completed secondary education with focused performance in science and mathematics.",
      icon: <FaUserGraduate />,
    },
  ];

  const certifications = [
    {
      year: "2025",
      title: "BACHELOR OF SCIENCE WITH HONOURS IN SOFTWARE ENGINEERING",
      issuer: "CARDIFF METROPOLITAN UNIVERSITY",
      description: "Successfully completed degree program with focus on modern software engineering paradigms and practical applications.",
      icon: <FaCertificate />,
    },
    {
      year: "2019",
      title: "ADVANCED INFORMATION TECHNOLOGY",
      issuer: "SIBA CAMPUS",
      description: "Gained comprehensive training in systems administration, programming languages, database structures, and network setups.",
      icon: <FaAward />,
    },
  ];

  return (
    <div id="journey" className="relative min-h-screen bg-black text-white py-20 px-4 md:px-6 scroll-mt-16 overflow-hidden">
      
      {/* 🔥 Animated Glow Background */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-10 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-10 animate-pulse pointer-events-none"></div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
        Professional Journey
      </h1>

      {/* Tab Switcher - Super Premium Neon Design */}
      <div className="flex justify-center mb-20 relative z-20">
        <div className="flex bg-zinc-950/90 backdrop-blur-xl p-1.5 rounded-full border border-white/10 shadow-[0_0_30px_rgba(236,72,153,0.03)] relative">
          
          <button
            onClick={() => {
              setActiveTab("journey");
              window.location.hash = "#journey";
            }}
            className="relative px-6 py-3 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase transition-all duration-300 z-10 flex items-center gap-2 cursor-pointer"
            style={{ color: activeTab === "journey" ? "#fff" : "#71717a" }}
          >
            {activeTab === "journey" && (
              <Motion.div
                layoutId="activeTabPill"
                className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-full -z-10 shadow-[0_0_20px_rgba(236,72,153,0.4)]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <FaUserGraduate className="text-sm" />
            <span>Work & Edu</span>
          </button>
          
          <button
            onClick={() => {
              setActiveTab("licenses");
              window.location.hash = "#licenses";
            }}
            className="relative px-6 py-3 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase transition-all duration-300 z-10 flex items-center gap-2 cursor-pointer"
            style={{ color: activeTab === "licenses" ? "#fff" : "#71717a" }}
          >
            {activeTab === "licenses" && (
              <Motion.div
                layoutId="activeTabPill"
                className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-full -z-10 shadow-[0_0_20px_rgba(236,72,153,0.4)]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <FaCertificate className="text-sm" />
            <span>Certifications</span>
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="relative max-w-5xl mx-auto z-10">
        <AnimatePresence mode="wait">
          {activeTab === "journey" ? (
            /* ==================== WORK & EDUCATION TIMELINE ==================== */
            <Motion.div
              key="journey"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-4xl mx-auto pl-8 md:pl-0"
            >
              {/* Vertical Line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-red-500 via-pink-500 to-purple-500"></div>

              {journey.map((item, index) => (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative mb-16 flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Timeline Node with Icon */}
                  <div className="absolute left-[-1.5rem] md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-zinc-950 border-2 border-pink-500/80 flex items-center justify-center text-pink-400 z-10 shadow-lg shadow-pink-500/10">
                    <span className="text-xs">{item.icon}</span>
                  </div>

                  {/* Card */}
                  <div className="bg-zinc-900/30 border border-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 w-full md:w-[45%] ml-4 md:ml-0 hover:border-pink-500/20 hover:scale-[1.02] hover:shadow-xl hover:shadow-pink-500/5 transition duration-500 flex flex-col justify-between">
                    <div>
                      <span className="text-xs bg-pink-500/10 text-pink-400 font-bold px-3 py-1 rounded-full border border-pink-500/20 tracking-wider">
                        {item.year}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold mt-4 leading-snug break-words">
                        {item.title}
                      </h3>
                      <p className="text-purple-400 mt-1.5 font-medium text-sm">
                        {item.place}
                      </p>
                    </div>
                    {item.description && (
                      <p className="text-zinc-400 text-sm mt-4 break-words leading-relaxed border-t border-white/5 pt-3">
                        {item.description}
                      </p>
                    )}
                  </div>
                </Motion.div>
              ))}
            </Motion.div>
          ) : (
            /* ==================== LICENSES & CERTIFICATIONS TIMELINE ==================== */
            <Motion.div
              key="licenses"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-4xl mx-auto pl-8 md:pl-0"
            >
              {/* Vertical Line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-red-500 via-pink-500 to-purple-500"></div>

              {certifications.map((item, index) => (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative mb-16 flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Timeline Node with Icon */}
                  <div className="absolute left-[-1.5rem] md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-zinc-950 border-2 border-pink-500/80 flex items-center justify-center text-pink-400 z-10 shadow-lg shadow-pink-500/10">
                    <span className="text-xs">{item.icon}</span>
                  </div>

                  {/* Card */}
                  <div className="bg-zinc-900/30 border border-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 w-full md:w-[45%] ml-4 md:ml-0 hover:border-pink-500/20 hover:scale-[1.02] hover:shadow-xl hover:shadow-pink-500/5 transition duration-500 flex flex-col justify-between">
                    <div>
                      <span className="text-xs bg-purple-500/10 text-purple-300 font-bold px-3 py-1 rounded-full border border-purple-500/20 tracking-wider">
                        {item.year}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold mt-4 leading-snug break-words">
                        {item.title}
                      </h3>
                      <p className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 font-semibold text-xs tracking-wider uppercase mt-1.5">
                        {item.issuer}
                      </p>
                    </div>
                    {item.description && (
                      <p className="text-zinc-400 text-sm mt-4 break-words leading-relaxed border-t border-white/5 pt-3">
                        {item.description}
                      </p>
                    )}
                  </div>
                </Motion.div>
              ))}
            </Motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ProfessionalJourney;