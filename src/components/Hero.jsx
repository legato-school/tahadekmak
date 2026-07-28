import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaAws } from 'react-icons/fa';
import { SiTerraform, SiKubernetes, SiDocker } from 'react-icons/si';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden"
    >
      {/* Animated AWS Icons Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <FaAws className="absolute top-20 left-10 text-9xl text-aws-orange animate-float" style={{ animationDelay: '0s' }} />
        <SiTerraform className="absolute top-40 right-20 text-8xl text-aws-blue animate-float" style={{ animationDelay: '1s' }} />
        <SiKubernetes className="absolute bottom-40 left-20 text-7xl text-aws-orange animate-float" style={{ animationDelay: '2s' }} />
        <SiDocker className="absolute bottom-20 right-10 text-8xl text-aws-blue animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Text Content */}
        <div className="space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-aws-orange/10 rounded-full border border-aws-orange/20">
            <div className="w-2 h-2 bg-aws-orange rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-aws-orange">Available for opportunities</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-aws-orange to-aws-blue bg-clip-text text-transparent">
              Taha Dekmak
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-700 font-light">
            AWS Solutions Architect{' '}
            <span className="text-aws-orange font-bold">&</span>{' '}
            DevSecOps Engineer
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            Certified AWS Solutions Architect designing secure, high-performance cloud architectures.
            Expert in automating DevSecOps workflows using Terraform, CFN, and GitHub Actions to
            deliver scalable infrastructure and robust cloud security.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#contact" className="btn-primary">
              <FaEnvelope />
              Get In Touch
            </a>
            <a
              href="/Taha-Dekmak-CV.pdf"
              download
              className="btn-secondary"
            >
              <FaDownload />
              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://www.linkedin.com/in/taha-dekmak/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-aws-dark text-white hover:bg-aws-orange transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="https://github.com/taha-digico"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-aws-dark text-white hover:bg-aws-orange transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="mailto:tahadekmakl4@gmail.com"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-aws-dark text-white hover:bg-aws-orange transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope className="text-xl" />
            </a>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative w-full max-w-md mx-auto">
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-aws-orange to-aws-blue rounded-2xl transform rotate-6 opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-aws-blue to-aws-orange rounded-2xl transform -rotate-6 opacity-20"></div>
            
            {/* Main image container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/profile.jpg"
                alt="Taha Dekmak"
                className="w-full h-auto object-cover"
              />
              
              {/* AWS Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg flex items-center gap-3">
                  <FaAws className="text-3xl text-aws-orange" />
                  <div>
                    <p className="text-sm font-bold text-aws-dark">12x AWS Certified</p>
                    <p className="text-xs text-gray-600">Solutions Architect Professional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-aws-orange rounded-full flex justify-center">
          <div className="w-1 h-3 bg-aws-orange rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
