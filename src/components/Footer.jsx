import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const socials = [
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/taha-dekmak/', label: 'LinkedIn' },
  {
    icon: FaEnvelope,
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=tahadekmak14@gmail.com',
    label: 'Email',
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-bg-primary">
      <div className="container-max section-padding py-12 lg:py-14">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <div className="max-w-md">
            <p className="text-2xl font-bold text-text-primary tracking-tight mb-2">Taha Dekmak</p>
            <p className="text-text-secondary text-sm leading-relaxed">
              AWS Solutions Architect &amp; DevSecOps Engineer specializing in cloud architecture,
              automation, and secure infrastructure. AWStronaut &amp; Kubestronaut. Based in Beirut.
            </p>
          </div>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-colors"
              >
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-text-muted text-sm">© {new Date().getFullYear()} Taha Dekmak. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="/#about" className="text-text-muted hover:text-accent transition-colors">About</a>
            <a href="/#experience" className="text-text-muted hover:text-accent transition-colors">Experience</a>
            <Link to="/blogs" className="text-text-muted hover:text-accent transition-colors">Blogs</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
