import React from 'react';
import { FaAws, FaDocker, FaGithub } from 'react-icons/fa';
import { SiTerraform, SiKubernetes } from 'react-icons/si';

const About = () => {
  const stats = [
    { value: '12+', label: 'AWS Certifications' },
    { value: '4+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Delivered' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="section-title">About Me</h2>
            <p className="text-gray-600 text-lg">
              Transforming cloud infrastructure with AWS expertise
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Profile Image */}
            <div className="relative animate-fade-in">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/profile-about.jpg"
                  alt="Taha Dekmak at work"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              {/* Floating icons */}
              <div className="absolute -top-4 -right-4 bg-aws-orange text-white p-4 rounded-full shadow-lg animate-float">
                <FaAws className="text-3xl" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-aws-blue text-white p-4 rounded-full shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <SiTerraform className="text-3xl" />
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I'm a <span className="text-aws-orange font-semibold">Certified AWS Solutions Architect</span> with
                  a passion for designing secure, high-performance cloud architectures that drive business success.
                </p>
                <p>
                  Currently leading a cross-functional team of 8+ DevOps and AI Engineers at{' '}
                  <span className="font-semibold text-aws-dark">Digico Solutions</span>, delivering 5+ end-to-end
                  solutions for startups and SMBs while managing the full SDLC and enforcing best practices.
                </p>
                <p>
                  My expertise spans <span className="font-semibold">AWS cloud architecture</span>,{' '}
                  <span className="font-semibold">DevSecOps automation</span>,{' '}
                  <span className="font-semibold">Infrastructure as Code (Terraform)</span>, and{' '}
                  <span className="font-semibold">CI/CD pipelines</span>. I've successfully accelerated AWS cloud
                  adoption by positioning services on the AWS Marketplace and securing Service Delivery Programs.
                </p>
                <p className="text-aws-blue font-medium">
                  I thrive on exploring new technologies and understanding how systems work at a fundamental level.
                </p>
              </div>

              {/* Tech Icons */}
              <div className="flex gap-4 pt-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-aws-orange/10 text-aws-orange hover:bg-aws-orange hover:text-white transition-all duration-300">
                  <FaAws className="text-2xl" />
                </div>
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-aws-blue/10 text-aws-blue hover:bg-aws-blue hover:text-white transition-all duration-300">
                  <SiTerraform className="text-2xl" />
                </div>
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-aws-dark/10 text-aws-dark hover:bg-aws-dark hover:text-white transition-all duration-300">
                  <FaDocker className="text-2xl" />
                </div>
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-aws-blue/10 text-aws-blue hover:bg-aws-blue hover:text-white transition-all duration-300">
                  <SiKubernetes className="text-2xl" />
                </div>
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-aws-dark/10 text-aws-dark hover:bg-aws-dark hover:text-white transition-all duration-300">
                  <FaGithub className="text-2xl" />
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-gray-200">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-aws-orange to-aws-blue bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-sm md:text-base text-gray-600 mt-2 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
