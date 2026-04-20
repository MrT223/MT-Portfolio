export default function Hero() {
  const techStack = ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker'];

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center grid-lines">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/2 blur-[100px] animate-glow-pulse pointer-events-none" />

      <div className="relative z-10 section-container w-full text-center py-20">
        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8 opacity-0"
          style={{ animation: 'fade-in 1s ease-out 0.2s forwards' }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-white/60">Sẵn sàng cho cơ hội mới</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
          <span
            className="block opacity-0"
            style={{ animation: 'slide-up 0.8s ease-out 0.2s forwards' }}
          >
            Xin chào, tôi là
          </span>
          <span
            className="block gradient-text opacity-0 mt-2"
            style={{ animation: 'slide-up 0.8s ease-out 0.4s forwards' }}
          >
            Nguyễn Văn A
          </span>
        </h1>

        {/* Subtitle */}
        <div className="opacity-0" style={{ animation: 'slide-up 0.8s ease-out 0.6s forwards' }}>
          <p className="text-lg sm:text-xl text-white/50 font-light mb-3">
            Full-Stack Developer
          </p>
          <p className="text-sm sm:text-base text-white/35 font-light max-w-md mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crafting digital experiences with clean code &amp; modern design.
          </p>
        </div>

        {/* Tech stack */}
        <div
          className="flex flex-wrap justify-center gap-2.5 mt-8 opacity-0"
          style={{ animation: 'slide-up 0.8s ease-out 0.8s forwards' }}
        >
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-white/50 hover:border-white/25 hover:text-white/80 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 opacity-0"
          style={{ animation: 'slide-up 0.8s ease-out 1s forwards' }}
        >
          <a
            href="#projects"
            onClick={(e) => scrollTo(e, '#projects')}
            className="px-7 py-3 rounded-full bg-white text-black font-semibold text-sm hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] transition-all duration-300"
          >
            Xem dự án
          </a>
          <a
            href="#about"
            onClick={(e) => scrollTo(e, '#about')}
            className="group px-7 py-3 rounded-full border border-white/20 text-sm font-medium hover:border-white/40 transition-all duration-300 flex items-center gap-2"
          >
            Tìm hiểu thêm
            <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float-custom">
        <div className="w-5 h-8 rounded-full border-2 border-white/20 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-white/40 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
