function Services() {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description:
        "Modern, responsive websites built with React, Tailwind CSS, and clean, maintainable code.",
    },
    {
      icon: "🚀",
      title: "Landing Pages",
      description:
        "High-converting landing pages designed for performance, accessibility, and fast load times.",
    },
    {
      icon: "🎨",
      title: "Graphic Design",
      description:
        "Custom graphics, logos, and visual assets that enhance your brand identity and website aesthetics.",
    },
    {
      icon: "🎨",
      title: "UI / UX Design",
      description:
        "Clean design systems and user-centered interfaces that look polished on all devices.",
    },
    {
      icon: "💻",
      title: "Software Development",
      description:
        "Full-stack development services using modern technologies like React, Node.js, Express, and MongoDB to build scalable web applications.",
    },
    
  ];

  return (
    <section id="services" className="relative min-h-screen bg-black text-white py-20 px-4 md:px-6 overflow-hidden scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 leading-tight">
            Services
          </h1>
          <div className="w-28 h-1 mx-auto mt-4 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I deliver web experiences that combine strong visuals, responsive layouts, and fast performance.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-[#111] border border-white/10 rounded-3xl p-8 transition duration-500 hover:border-pink-500/40 hover:shadow-lg hover:shadow-pink-500/10"
            >
              <span className="inline-flex items-center justify-center w-14 h-14 mb-6 text-xl font-bold rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-black">
                {service.icon}
              </span>
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
