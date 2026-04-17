import img5 from "../../assets/5.jpg";
import img4 from "../../assets/4.jpg";
import img3 from "../../assets/3.jpg";
import img23 from "../../assets/23.jpg";

function Projects() {
  const projects = [
    {
      title: "FitZone Fitness Center – Web Application",
      description:
        "A responsive, user-friendly web platform designed for a modern gym and fitness center.",
      image: img5,
      tech: ["HTML5", "CSS", "mySql"],
      github: "https://github.com/UmeshSathsarana/GYM-web-site",
      demo: "https://fitzone12.infinityfreeapp.com/",
    },
    {
      title: "Sri Lankan Tourism – Web Application",
      description:
        "A responsive, dark-themed web platform promoting Sri Lanka’s nature, wildlife, adventure activities, and cultural tours.",
      image: img4,
      tech: ["HTML5", "CSS", "Bootstrap", "PHP", "mySql"],
      github: "https://github.com/UmeshSathsarana/final-group-project",
      demo: "#",
    },
    {
      title: "Smart Construction System",
      description:
        "A comprehensive web-based construction management platform designed to streamline construction project operations from planning through completion. This system provides end-to-end management capabilities for construction companies, including project management, resource allocation, worker management, and financial tracking",
      image: "",
      tech: ["React", "Node js", "Express js", "Mongo DB"],
      github: "https://github.com/UmeshSathsarana/Constriction-Management-system",
      demo: "#",
    },
    {
      title: "library management system",
      description:
        "This is a Library Management System implemented as a Java-based web application",
      image: img3,
      tech: ["JAVA", "PEO Java", "HTML", "Boostrap", "CSS"],
      github: "https://github.com/UmeshSathsarana/library-management-system",
      demo: "#",
    },
    {
      title: "My Portfolio Website",
      description:
        "this is a personal portfolio website built using React, showcasing my projects, skills, and experience in web development. It features a modern design with smooth animations and responsive layout to provide an engaging user experience across all devices.",
      image: img23,
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      github:"https://github.com/UmeshSathsarana/Portfolio",
      demo: "https://umeshsathsarana.github.io/Portfolio/",
    },

    
  ];

  return (
    <div id="projects" className="min-h-screen bg-black text-white py-16 md:py-20 px-4 sm:px-6 scroll-mt-24">

      {/* Title */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 leading-tight">
          Featured Projects
        </h1>

        <div className="w-28 h-1 mx-auto mt-4 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-full"></div>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          A selection of projects that showcase my skills and passion for development.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8 max-w-7xl mx-auto w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-[#111] border border-white/10 rounded-2xl overflow-hidden 
            hover:border-pink-500/40 transition duration-500"
          >
            {/* Image */}
            <div className="h-56 overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col">
              <h2 className="text-xl font-semibold mb-4 group-hover:text-pink-400 transition">
                {project.title}
              </h2>

              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full 
                    bg-gradient-to-r from-red-500/20 via-pink-500/20 to-purple-500/20 
                    border border-pink-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center py-2 rounded-lg border 
                  border-pink-500/40 hover:bg-gradient-to-r 
                  hover:from-red-500 hover:via-pink-500 hover:to-purple-500 
                  hover:text-white transition"
                >
                  Code
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center py-2 rounded-lg 
                  bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 
                  hover:opacity-90 transition"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;