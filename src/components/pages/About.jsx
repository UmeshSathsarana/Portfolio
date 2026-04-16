
import profileImg from "../../assets/profile.jpg";
import cvFile from "../../assets/Umesh-CV.pdf";

function About() {
  return (
    <div id="about" className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20 scroll-mt-28">

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE - IMAGE */}
        <div className="flex justify-center">
          <div className="relative group">

            {/* Glow Background */}
            <div className="absolute -inset-2 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition duration-500"></div>

            <img
              src={profileImg}
              alt="Umesh"
              className="relative w-72 h-72 object-cover rounded-3xl border-4 border-pink-500 shadow-2xl transform group-hover:scale-105 transition duration-500"
            />

          </div>
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500">
            About Me
          </h2>

          {/* Text */}
          <p className="text-gray-300 leading-relaxed mb-6 text-lg">
            Hi, I'm <span className="text-pink-400 font-semibold">Umesh Sathsarana</span> 👋  
            A passionate <span className="text-purple-400 font-semibold">Software Engineer</span> 
            who loves building modern, responsive and user-friendly web applications.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            I specialize in <span className="text-red-400">React.js</span>, 
            <span className="text-pink-400"> Node.js</span>, and modern UI design.  
            My goal is to create clean, scalable, and impactful digital solutions.
          </p>

          <p className="text-gray-500 leading-relaxed mb-8">
            I enjoy solving complex problems, learning new technologies, and 
            continuously improving my skills to become a future Tech Leader 🚀
          </p>

          {/* Buttons */}
          <div className="flex gap-4">

            {/* Download CV */}
            <a
              href={cvFile}
              download
              className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 hover:scale-105 hover:shadow-xl transition duration-300"
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