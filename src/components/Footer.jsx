import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart, FaAws } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-aws-dark text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            {/* Brand Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-aws-orange to-white bg-clip-text text-transparent">
                Taha Dekmak
              </h3>
              <p className="text-gray-400 mb-4">
                AWS Solutions Architect & DevSecOps Engineer crafting secure, scalable cloud solutions.
              </p>
              <div className="flex items-center gap-2 text-aws-orange">
                <FaAws className="text-2xl" />
                <span className="text-sm font-medium">12x AWS Certified</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-aws-orange transition-colors duration-300 inline-flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-aws-orange rounded-full"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="/blogs"
                    className="text-gray-400 hover:text-aws-orange transition-colors duration-300 inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-aws-orange rounded-full"></span>
                    Blogs
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="space-y-3 mb-6">
                <a
                  href="mailto:tahadekmakl4@gmail.com"
                  className="text-gray-400 hover:text-aws-orange transition-colors duration-300 block"
                >
                  tahadekmakl4@gmail.com
                </a>
                <a
                  href="tel:+96170356025"
                  className="text-gray-400 hover:text-aws-orange transition-colors duration-300 block"
                >
                  +961 70 356 025
                </a>
                <p className="text-gray-400">Beirut, Lebanon</p>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/taha-dekmak/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-aws-orange transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-lg" />
                </a>
                <a
                  href="https://github.com/taha-digico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-aws-orange transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-lg" />
                </a>
                <a
                  href="mailto:tahadekmakl4@gmail.com"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-aws-orange transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <FaEnvelope className="text-lg" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                © {currentYear} Taha Dekmak. Made with <FaHeart className="text-aws-orange" /> and React
              </p>
              <p className="flex items-center gap-2">
                Hosted on <FaAws className="text-aws-orange" /> AWS Amplify
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
