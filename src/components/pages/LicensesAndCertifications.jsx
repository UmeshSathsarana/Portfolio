import { motion as Motion } from "framer-motion";
import { FaCertificate, FaAward, FaMedal } from "react-icons/fa";
import img12 from "../../assets/12.jpg";
import img13 from "../../assets/13.jpg";


function LicensesAndCertifications() {
  const certifications = [
    {
      title: "BACHELOR OF SCIENCE WITH HONOURS IN SOFTWARE ENGINEERING",
      issuer: "CARDIFF METROPOLITAN UNIVERSITY",
      year: "2025",
      // description: "Fundamental knowledge of AWS Cloud concepts, services, and terminology.",
      icon: <FaCertificate />,

      image: img12, // Add your AWS certification image path here

    },
    {
      title: "ADVANCED INFORMATION TECHNOLOGY",
      issuer: "SIBA CAMPUS",
      year: "2019",
      // description: "Comprehensive IT support skills including troubleshooting, customer service, and networking.",
      icon: <FaAward />,

      image: img13,
    },
    // {
    //   title: "Microsoft Certified: Azure Fundamentals",
    //   issuer: "Microsoft",
    //   year: "2023",
    //   description: "Understanding of cloud services and Azure platform fundamentals.",
    //   icon: <FaMedal />,
    //   image: "", // Add your Azure certification image path here
    // },
    // Add more certifications as needed
  ];

  return (
    <div id="licenses" className="relative min-h-screen bg-black text-white py-20 px-6 overflow-hidden scroll-mt-28">

      {/* 🔥 Animated Glow Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
        Licenses & Certifications
      </h1>

      {/* Certifications Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
        {certifications.map((cert, index) => (
          <Motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-500"
          >
            {/* Image - only show if image exists */}
            {cert.image && (
              <div className="h-48 overflow-hidden relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              </div>
            )}

            {/* Content */}
            <div className="p-6">
              {/* Icon */}
              <div className="text-4xl mb-4 text-pink-500 group-hover:rotate-12 group-hover:scale-125 transition-all duration-500">
                {cert.icon}
              </div>

              {/* Year */}
              <span className="text-sm text-purple-400 font-semibold">
                {cert.year}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold mt-2 mb-2 break-words">
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="text-pink-400 font-medium mb-4">
                {cert.issuer}
              </p>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {cert.description}
              </p>
            </div>
          </Motion.div>
        ))}
      </div>
    </div>
  );
}

export default LicensesAndCertifications;
