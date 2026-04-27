import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen bg-black flex items-center justify-center px-4 py-12 sm:px-6 overflow-hidden scroll-mt-16">

      {/* 🔥 Soft Glow Background */}
      <div className="absolute top-[-50px] sm:top-[-100px] left-[-50px] sm:left-[-100px] w-48 sm:w-96 h-48 sm:h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-60px] sm:bottom-[-120px] right-[-60px] sm:right-[-120px] w-64 sm:w-[500px] h-64 sm:h-[500px] bg-purple-600/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight">
            Let’s{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 text-gray-400 text-base sm:text-lg max-w-md mx-auto md:mx-0">
            I’m always open to discussing new projects, creative ideas,
            or opportunities to build something impactful.
          </p>

          {/* Modern Quote Card */}
          <div className="mt-8 sm:mt-10 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl hover:border-pink-500/30 transition duration-500">
            <p className="text-gray-300 italic text-base sm:text-lg">
              “Code is not just logic — it’s creativity structured.”
            </p>
            <span className="block mt-4 text-pink-500 font-semibold">
              — Software Engineer
            </span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-4 sm:space-y-6">

          {/* Email Card */}
          <a
            href="mailto:umeshsathsarana62@gmail.com"
            className="group flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-4 sm:px-6 py-4 sm:py-6 backdrop-blur-xl hover:scale-[1.02] hover:border-pink-500/40 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-500"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <FaEnvelope className="text-xl sm:text-2xl text-pink-500" />
              <div>
                <h3 className="text-white text-base sm:text-xl font-semibold">Email</h3>
                <p className="text-gray-400 text-sm sm:text-base">umeshsathsarana62@gmail.com</p>
              </div>
            </div>
            <span className="text-pink-500 text-lg sm:text-xl group-hover:translate-x-2 transition">
              →
            </span>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/umesh-sathsarana-80936533b/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-4 sm:px-6 py-4 sm:py-6 backdrop-blur-xl hover:scale-[1.02] hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-500"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <FaLinkedin className="text-xl sm:text-2xl text-purple-500" />
              <div>
                <h3 className="text-white text-base sm:text-xl font-semibold">LinkedIn</h3>
                <p className="text-gray-400 text-sm sm:text-base">Professional Profile</p>
              </div>
            </div>
            <span className="text-purple-500 text-lg sm:text-xl group-hover:translate-x-2 transition">
              →
            </span>
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/UmeshSathsarana"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-4 sm:px-6 py-4 sm:py-6 backdrop-blur-xl hover:scale-[1.02] hover:border-pink-500/40 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-500"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <FaGithub className="text-xl sm:text-2xl text-pink-500" />
              <div>
                <h3 className="text-white text-base sm:text-xl font-semibold">GitHub</h3>
                <p className="text-gray-400 text-sm sm:text-base">Code & Projects</p>
              </div>
            </div>
            <span className="text-pink-500 text-lg sm:text-xl group-hover:translate-x-2 transition">
              →
            </span>
           </a>
           
           {/* Phone Card */}
           <a
            href="tel:+94781210939"
            className="group flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-4 sm:px-6 py-4 sm:py-6 backdrop-blur-xl hover:scale-[1.02] hover:border-pink-500/40 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-500"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <FaPhone className="text-xl sm:text-2xl text-pink-500" />
              <div>
                <h3 className="text-white text-base sm:text-xl font-semibold">Phone Number</h3>
                <p className="text-gray-400 text-sm sm:text-base">078-1210939</p>
              </div>
            </div>
            <span className="text-pink-500 text-lg sm:text-xl group-hover:translate-x-2 transition">
              →
            </span>
           </a>

        </div>

      </div>
    </section>
  );
}