 import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen bg-black flex items-center justify-center px-4 md:px-6 overflow-hidden scroll-mt-16">

      {/* 🔥 Soft Glow Background */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            Let’s{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-md">
            I’m always open to discussing new projects, creative ideas,
            or opportunities to build something impactful.
          </p>

          {/* Modern Quote Card */}
          <div className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-pink-500/30 transition duration-500">
            <p className="text-gray-300 italic text-lg">
              “Code is not just logic — it’s creativity structured.”
            </p>
            <span className="block mt-4 text-pink-500 font-semibold">
              — Software Engineer
            </span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* Email Card */}
          <a
            href="mailto:umeshsathsarana62@gmail.com"
            className="group flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-6 py-6 backdrop-blur-xl hover:scale-105 hover:border-pink-500/40 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-500"
          >
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-2xl text-pink-500" />
              <div>
                <h3 className="text-white text-xl font-semibold">Email</h3>
                <p className="text-gray-400">umeshsathsarana62@gmail.com</p>
              </div>
            </div>
            <span className="text-pink-500 text-xl group-hover:translate-x-2 transition">
              →
            </span>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/umesh-sathsarana-80936533b/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-6 py-6 backdrop-blur-xl hover:scale-105 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-500"
          >
            <div className="flex items-center gap-4">
              <FaLinkedin className="text-2xl text-purple-500" />
              <div>
                <h3 className="text-white text-xl font-semibold">LinkedIn</h3>
                <p className="text-gray-400">Professional Profile</p>
              </div>
            </div>
            <span className="text-purple-500 text-xl group-hover:translate-x-2 transition">
              →
            </span>
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/UmeshSathsarana"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-6 py-6 backdrop-blur-xl hover:scale-105 hover:border-pink-500/40 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-500"
          >
            <div className="flex items-center gap-4">
              <FaGithub className="text-2xl text-pink-500" />
              <div>
                <h3 className="text-white text-xl font-semibold">GitHub</h3>
                <p className="text-gray-400">Code & Projects</p>
              </div>
            </div>
            <span className="text-pink-500 text-xl group-hover:translate-x-2 transition">
              →
            </span>
            
          

           </a>
           <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-6 py-6 backdrop-blur-xl hover:scale-105 hover:border-pink-500/40 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-500"
          >
            <div className="flex items-center gap-4">
              <FaGithub className="text-2xl text-pink-500" />
              <div>
                <h3 className="text-white text-xl font-semibold">Phone Number</h3>
                <p className="text-gray-400">078-1210939</p>
              </div>
            </div>
            <span className="text-pink-500 text-xl group-hover:translate-x-2 transition">
              →
            </span>
            
          

           </a>

        </div>

      </div>
    </section>
  );
}