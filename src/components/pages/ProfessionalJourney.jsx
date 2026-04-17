import { motion as Motion } from "framer-motion";


function ProfessionalJourney() {
  const journey = [
    {
      year: "2022 - 2025",
      title: "BACHELOR OF SCIENCE WITH HONOURS IN SOFTWARE ENGINEERING",
      place: "Cardiff Metropolitan University",
      description:
        "",
    },
    {
      year: "2019 - Present",
      title: "Advanced Information Technology",
      place: "Siba Campus",
      description:
        "",
    },
    {
      year: "2021 - Present",
      title: "GCE A/L Examination",
      place: "Swarnajothi National College, Kiribathkumbura",
      description:
        "Technology stream - Engineering Technology",
    },
        {
      year: "2018 - Present",
      title: "GCE O/L Examination",
      place: "Sri Dheerananda College - Pilimathalawa",
      description:
        "",
    },
  ];

  return (
    <div id="journey" className="min-h-screen bg-black text-white py-20 px-4 md:px-6 scroll-mt-16">
      
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
        Professional Journey
      </h1>

      <div className="relative max-w-4xl mx-auto">
        
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500 via-pink-500 to-purple-500"></div>

        {journey.map((item, index) => (
          <Motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`relative mb-16 flex flex-col md:flex-row ${
              index % 2 === 0
                ? "md:justify-start"
                : "md:justify-end"
            }`}
          >
            {/* Circle */}
            <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 border-4 border-black"></div>

            {/* Card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-8 w-full md:w-5/12 ml-12 md:ml-0 hover:scale-105 transition duration-500 shadow-xl">
              
              <span className="text-sm text-pink-400 font-semibold">
                {item.year}
              </span>

              <h3 className="text-2xl font-bold mt-2 break-words">
                {item.title}
              </h3>

              <p className="text-purple-400 mt-1 font-medium">
                {item.place}
              </p>

              <p className="text-gray-300 mt-4 break-words">
                {item.description}
              </p>
            </div>
          </Motion.div>
        ))}
      </div>
    </div>
  );
}

export default ProfessionalJourney;