import React from 'react';
import { FaAws, FaCertificate, FaCheckCircle } from 'react-icons/fa';
import { SiKubernetes, SiTerraform } from 'react-icons/si';

const Certifications = () => {
  const certifications = [
    {
      name: 'AWS Golden Jacket (12x Certified)',
      issuer: 'Amazon Web Services',
      year: '2025',
      icon: FaAws,
      color: 'from-aws-orange to-yellow-500',
      featured: true,
    },
    {
      name: 'Kubestronaut (5x Kubernetes Certified)',
      issuer: 'CNCF',
      year: '2026',
      icon: SiKubernetes,
      color: 'from-blue-500 to-blue-700',
      featured: true,
    },
    {
      name: 'HashiCorp Terraform Certified Associate',
      issuer: 'HashiCorp',
      year: '2024',
      icon: SiTerraform,
      color: 'from-purple-500 to-purple-700',
      featured: false,
    },
  ];

  const awsCertifications = [
    'Solutions Architect - Professional',
    'DevOps Engineer - Professional',
    'Solutions Architect - Associate',
    'Developer - Associate',
    'SysOps Administrator - Associate',
    'Security - Specialty',
    'Advanced Networking - Specialty',
    'Database - Specialty',
    'Data Analytics - Specialty',
    'Machine Learning - Specialty',
    'SAP on AWS - Specialty',
    'Cloud Practitioner',
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="section-title">Certifications</h2>
            <p className="text-gray-600 text-lg">
              Professional certifications demonstrating expertise
            </p>
          </div>

          {/* Featured Certifications */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className={`card hover:border-aws-orange transform hover:-translate-y-2 ${
                  cert.featured ? 'md:col-span-1' : ''
                } animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  {/* Icon */}
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${cert.color} flex items-center justify-center text-white shadow-lg`}>
                    <cert.icon className="text-4xl" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-aws-dark mb-2">{cert.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">{cert.issuer}</p>
                  <p className="text-xs text-gray-500">{cert.year}</p>

                  {cert.featured && (
                    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-aws-orange/10 text-aws-orange rounded-full text-xs font-medium">
                      <FaCheckCircle />
                      Featured
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* AWS Certifications List */}
          <div className="bg-gradient-to-br from-aws-orange/5 to-aws-blue/5 rounded-2xl p-8 border border-gray-200 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <FaAws className="text-4xl text-aws-orange" />
              <div>
                <h3 className="text-2xl font-bold text-aws-dark">AWS Certifications</h3>
                <p className="text-gray-600 text-sm">Complete collection of 12 AWS certifications</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {awsCertifications.map((cert, index) => (
                <div
                  key={cert}
                  className="flex items-start gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow animate-slide-up"
                  style={{ animationDelay: `${0.05 * index}s` }}
                >
                  <FaCertificate className="text-aws-orange text-xl mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-700 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-16 grid md:grid-cols-1 gap-8">
            <div className="card animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl font-bold text-aws-dark mb-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-aws-blue/10 flex items-center justify-center">
                  <FaCertificate className="text-aws-blue text-xl" />
                </div>
                Education
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-aws-dark">
                    Bachelor in Computer and Communication Engineering
                  </h4>
                  <p className="text-aws-orange font-medium">Islamic University of Lebanon</p>
                  <p className="text-gray-600 text-sm">2015-2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
