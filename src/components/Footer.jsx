const FOOTER_LINKS = [
  { href: '#about', label: 'Giới thiệu' },
  { href: '#projects', label: 'Dự án' },
  { href: '#certificates', label: 'Chứng chỉ' },
  { href: '#contact', label: 'Liên hệ' },
];

export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative py-8 border-t border-white/5">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md border border-white/15 flex items-center justify-center">
              <span className="font-mono font-bold text-xs">&lt;/&gt;</span>
            </div>
            <span className="text-xs text-white/40">© 2024 DevPortfolio. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-5">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-xs text-white/30 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
