import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const sectionLinks = [
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Certifications', id: 'certifications' },
  { name: 'Expertise', id: 'skills' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const { pathname } = useLocation();
  const onHome = pathname === '/';

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
  }, [pathname]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !onHome
          ? 'bg-bg-primary/85 backdrop-blur-md border-b border-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-wide section-padding">
        <nav className="flex items-center justify-between h-16" aria-label="Main">
          <Link to="/" className="group flex items-baseline gap-1 font-display font-bold text-lg tracking-tight">
            <span className="text-text-primary">Taha Dekmak</span>
            <span className="text-accent transition-transform group-hover:translate-y-[-2px]">/</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {sectionLinks.map((link) => {
              const isActive = onHome && active === link.id;
              return (
                <a
                  key={link.name}
                  href={`/#${link.id}`}
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
            <Link
              to="/blogs"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                pathname.startsWith('/blogs') ? 'text-text-primary' : 'text-text-muted hover:text-text-primary'
              }`}
            >
              Blogs
            </Link>
            <a
              href="/#contact"
              className="px-3 py-2 text-sm font-medium text-text-muted hover:text-text-primary transition-colors"
            >
              Contact
            </a>
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
          {sectionLinks.map((link) => (
            <a
              key={link.name}
              href={`/#${link.id}`}
              onClick={closeMenu}
              className="block px-2 py-3 text-sm font-medium text-text-muted hover:text-accent transition-colors border-b border-border/60"
            >
              {link.name}
            </a>
          ))}
          <Link
            to="/blogs"
            onClick={closeMenu}
            className="block px-2 py-3 text-sm font-medium text-text-muted hover:text-accent transition-colors border-b border-border/60"
          >
            Blogs
          </Link>
          <a
            href="/#contact"
            onClick={closeMenu}
            className="block px-2 py-3 text-sm font-medium text-text-muted hover:text-accent transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
