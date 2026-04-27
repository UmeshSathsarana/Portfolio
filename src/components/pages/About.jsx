
import profileImg from "../../assets/profile.jpg";
import cvFile from "../../assets/Umesh-CV.pdf";

function About() {
  return (
    <div id="about" className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-12 sm:px-6 scroll-mt-16">

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* LEFT SIDE - IMAGE */}
        <div className="flex justify-center order-1 md:order-1">
          <div className="relative group">

            {/* Glow Background */}
            <div className="absolute -inset-2 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition duration-500"></div>

            <img
              src={profileImg}
              alt="Umesh"
              className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-3xl border-4 border-pink-500 shadow-2xl transform group-hover:scale-105 transition duration-500"
            />

          </div>
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div className="order-2 md:order-2 text-center md:text-left">

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500">
            About Me
          </h2>

          {/* Text */}
          <p className="text-gray-300 leading-relaxed mb-4 text-base sm:text-lg">
            Hi, I'm <span className="text-pink-400 font-semibold">Umesh Sathsarana</span> 👋  
            A passionate <span className="text-purple-400 font-semibold">Software Engineer</span> 
            who loves building modern, responsive and user-friendly web applications.
          </p>

          <p className="text-gray-400 leading-relaxed mb-4 text-sm sm:text-base">
            I specialize in <span className="text-red-400">React.js</span>, 
            <span className="text-pink-400"> Node.js</span>, and modern UI design.  
            My goal is to create clean, scalable, and impactful digital solutions.
          </p>

          <p className="text-gray-500 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
            I enjoy solving complex problems, learning new technologies, and 
            continuously improving my skills to become a future Tech Leader 🚀
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            {/* Download CV */}
            <a
              href={cvFile}
              download
              className="px-6 sm:px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 hover:scale-105 hover:shadow-xl transition duration-300 text-center"
            >
              Download CV
            </a>

            

          </div>

        </div>

      </div>

    </div>
  );
}

export default About;