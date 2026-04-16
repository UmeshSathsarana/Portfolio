import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#Skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Certifications", href: "#licenses" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 animate-pulse">
          Umesh.dev
        </a>

        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {navLinks.map((item) => (
            <li key={item.href} className="relative group">
              <a
                href={item.href}
                className="transition duration-300 group-hover:text-pink-400"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-red-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden text-white text-2xl cursor-pointer"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-lg text-white text-center py-6 space-y-4">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-lg font-medium hover:text-pink-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
