import { useState, useEffect } from "react";
import bgVideo from "../../assets/11.mp4";

function Home() {

  const names = [
    "React Developer",
    "Software Engineer",
    "Frontend Developer",
    "UI UX Designer",
    "Backend Developer",
    "Graphic Designer",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = names[index];

    if (charIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentWord[charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setText("");
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % names.length);
      }, 1500);
    }
  }, [charIndex, index]);

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden scroll-mt-16">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">

        {/* Typing Text */}
        <h1 className="text-2xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 drop-shadow-lg">
          {text}
          <span className="text-white animate-pulse">|</span>
        </h1>

        {/* Subtitle */}
        <h3 className="mt-6 text-base md:text-2xl text-white tracking-widest font-semibold">
          Umesh Sathsarana | Software Engineer
        </h3>

      </div>

    </div>
  );
}

export default Home;