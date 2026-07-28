import React, { useState, useEffect } from 'react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Expertise', href: '#skills' },
  { name: 'Blogs', href: 'https://blogs.tahadekmak.com' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'experience', 'certifications', 'skills', 'contact'];
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const y = window.scrollY + 130;
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/85 backdrop-blur-md border-b border-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-wide section-padding">
        <nav className="flex items-center justify-between h-16" aria-label="Main">
          <a href="#home" className="group flex items-baseline gap-1 font-display font-bold text-lg tracking-tight">
            <span className="text-text-primary">Taha Dekmak</span>
            <span className="text-accent transition-transform group-hover:translate-y-[-2px]">/</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = link.href.startsWith('#') && active === id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-text-primary' : 'text-text-muted hover:text-text-primary'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-accent rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          <button
            className="md:hidden p-2 -mr-2 text-text-secondary hover:text-text-primary"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <div className="w-5 h-3.5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current transition-all ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 border-b border-border ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-transparent'
        }`}
      >
        <div className="container-wide section-padding py-3 bg-bg-primary/95 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-2 py-3 text-sm font-medium text-text-muted hover:text-accent transition-colors border-b border-border/60 last:border-0"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
