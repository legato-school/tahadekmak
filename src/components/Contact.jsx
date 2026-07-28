import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'tahadekmakl4@gmail.com',
      href: 'mailto:tahadekmakl4@gmail.com',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+961 70 356 025',
      href: 'tel:+96170356025',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Beirut, Lebanon',
      href: null,
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: '/in/taha-dekmak',
      href: 'https://www.linkedin.com/in/taha-dekmak/',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="section-title">Get In Touch</h2>
            <p className="text-gray-600 text-lg">
              Let's discuss your next cloud project
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <div className="space-y-6 animate-slide-up">
              <div>
                <h3 className="text-2xl font-bold text-aws-dark mb-4">Contact Information</h3>
                <p className="text-gray-600 mb-6">
                  I'm always open to discussing new opportunities, collaborations, or AWS cloud architecture projects. Feel free to reach out!
                </p>
              </div>

              {/* Contact Items */}
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-aws-orange/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-xl text-aws-orange" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.label === 'LinkedIn' ? '_blank' : undefined}
                          rel={item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                          className="text-aws-dark hover:text-aws-orange transition-colors font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-aws-dark font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <p className="text-sm text-gray-500 mb-4">Connect with me</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/taha-dekmak/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-lg bg-aws-dark text-white hover:bg-aws-orange transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a
                    href="https://github.com/taha-digico"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-lg bg-aws-dark text-white hover:bg-aws-orange transition-all duration-300 hover:scale-110"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: CTA Card */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="card bg-gradient-to-br from-aws-orange/5 to-aws-blue/5 border-aws-orange">
                <h3 className="text-2xl font-bold text-aws-dark mb-4">Ready to Build Something Amazing?</h3>
                <p className="text-gray-600 mb-6">
                  Whether you're looking to migrate to AWS, optimize your cloud infrastructure, or implement DevSecOps best practices, I'd love to hear about your project.
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-aws-orange rounded-full"></div>
                    <span>AWS Cloud Architecture & Migration</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-aws-orange rounded-full"></div>
                    <span>DevSecOps & CI/CD Implementation</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-aws-orange rounded-full"></div>
                    <span>Infrastructure as Code (Terraform)</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-aws-orange rounded-full"></div>
                    <span>Cloud Security & Compliance</span>
                  </li>
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="mailto:tahadekmakl4@gmail.com" className="btn-primary flex-1 justify-center">
                    <FaEnvelope />
                    Send Email
                  </a>
                  <a href="/Taha-Dekmak-CV.pdf" download className="btn-secondary flex-1 justify-center">
                    Download CV
                  </a>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="card text-center">
                  <p className="text-3xl font-bold text-aws-orange">24h</p>
                  <p className="text-sm text-gray-600 mt-1">Response Time</p>
                </div>
                <div className="card text-center">
                  <p className="text-3xl font-bold text-aws-blue">100%</p>
                  <p className="text-sm text-gray-600 mt-1">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
