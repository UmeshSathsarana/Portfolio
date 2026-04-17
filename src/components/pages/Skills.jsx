import { FaReact, FaNodeJs, FaGitAlt, FaFigma, FaHtml5, FaCss3, FaPython, FaJava, FaPhp } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiTailwindcss, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";
import { FaR } from "react-icons/fa6";

function Skills() {
  const skillGroups = [
    {
      title: "Programming Languages",
      description: "Core languages I use for web, data, and software work.",
      skills: [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Python", icon: <FaPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "PHP", icon: <FaPhp /> },
        { name: "R", icon: <FaR /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3 /> },
      ],
    },
    {
      title: "Frameworks & Libraries",
      description: "Modern tools for building interactive user experiences.",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      ],
    },
    {
      title: "Databases & Tools",
      description: "Backend, version control, and design tools I rely on.",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "SQL", icon: <SiMysql /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Figma", icon: <FaFigma /> },
      ],
    },
  ];

  return (
    <div id="Skills" className="relative min-h-screen bg-black text-white py-20 px-4 md:px-6 overflow-hidden">

      {/* 🔥 Animated Glow Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
        Skills & Technologies
      </h1>

      <div className="grid gap-10 max-w-6xl mx-auto relative z-10 md:grid-cols-3">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={groupIndex}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: groupIndex * 0.15 }}
            className="group bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-7 hover:border-pink-500/40 hover:shadow-2xl hover:shadow-pink-500/15 transition-all duration-500"
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold">{group.title}</h2>
                <p className="mt-2 text-sm text-white/70">{group.description}</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {group.skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 hover:bg-pink-500/5 transition-colors duration-300"
                >
                  <div className="text-3xl text-pink-400">{skill.icon}</div>
                  <span className="font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;