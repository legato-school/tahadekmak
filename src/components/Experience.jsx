import React from 'react';
import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Solutions Architect',
      company: 'Digico Solutions',
      location: 'Beirut, Lebanon (Hybrid)',
      period: 'July 2025 - Present',
      highlights: [
        'Led a cross-functional team of 8 DevOps and AI Engineers to deliver 5+ end-to-end solutions for startups and SMBs',
        'Managed the full SDLC and enforced turnaround SLAs, resulting in 10+ on-time delivery increase and consistent adherence to high-quality production standards',
        'Spearheaded presales technical discovery for 10+ high-value startups',
        'Accelerated AWS cloud adoption by positioning services on the AWS Marketplace and securing Service Delivery Programs',
        'Streamlined enterprise deployments by developing modular Terraform and CloudFormation templates',
        'Secure client environments through Landing Zones, security hardening and automated cloud operations',
      ],
      technologies: ['AWS', 'Terraform', 'CloudFormation', 'Landing Zones', 'DevSecOps'],
    },
    {
      title: 'DevSecOps Engineer',
      company: 'Neo Mena Technologies',
      location: 'Beirut, Lebanon (Hybrid)',
      period: 'December 2023 - July 2025',
      highlights: [
        'Gained experience in configuring Github workflows for unit testing, linting, security testing and deployments',
        'Tackled 60+ infrastructure and API security items assessed internally by 3rd party auditors (Vanta, Drata, Panacea, Archer)',
        'Planned and implemented a Grafana/Prometheus monitoring solution using terraform, SSM documents and docker-compose',
        'Applied cloud cost-optimization measures resulting in 15% cost cut, including EC2/RDS reservations and Fargate/spot instances',
        'Configured various automation tools including Slack to GH deployments, GH to Jira issues mapping and GH to Cypress integration',
        'Deployed 20+ Batch jobs and Lambda functions leveraging SAM and EventBridge',
      ],
      technologies: ['GitHub Actions', 'Terraform', 'Grafana', 'Prometheus', 'AWS Lambda', 'Docker'],
    },
    {
      title: 'Technical Support Specialist',
      company: 'EXFO',
      location: 'Quebec, Canada (Remote)',
      period: 'May 2021 - October 2023',
      highlights: [
        'Ensured 99.9%+ uptime for high-traffic telecom platforms by resolving over 200 critical production incidents',
        'Streamlined CI/CD and container orchestration via Kubernetes and Helm',
        'Led cross-functional patching initiatives between DevOps and R&D',
      ],
      technologies: ['Kubernetes', 'Helm', 'CI/CD', 'Production Support'],
    },
    {
      title: 'Full Stack Developer',
      company: 'PropertyCard.com',
      location: 'London, UK (Remote)',
      period: 'December 2020 - May 2021',
      highlights: [
        'Architected a GCP-based microservices backend (5+ services) using Express.js to manage a 1M+ property dataset',
        'Implemented an indexing strategy between PostgreSQL and Elasticsearch',
        'Leveraged Next.js Server-Side Rendering (SSR) for a 1M+ listing catalog',
      ],
      technologies: ['GCP', 'Express.js', 'PostgreSQL', 'Elasticsearch', 'Next.js'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="section-title">Experience</h2>
            <p className="text-gray-600 text-lg">
              My professional journey in cloud architecture and DevSecOps
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-aws-orange to-aws-blue"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative animate-slide-up ${
                    index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-aws-orange rounded-full border-4 border-white shadow-lg"></div>

                  {/* Content Card */}
                  <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <div className="card hover:border-aws-orange">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <h3 className="text-2xl font-bold text-aws-dark">{exp.title}</h3>
                          <span className="aws-badge">
                            <FaBriefcase className="text-sm" />
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-aws-orange font-semibold text-lg">{exp.company}</p>
                        <p className="text-gray-500 text-sm flex items-center gap-2 mt-1">
                          <FaMapMarkerAlt className="text-aws-blue" />
                          {exp.location}
                        </p>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2 mb-4">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-600 text-sm">
                            <span className="w-1.5 h-1.5 bg-aws-orange rounded-full mt-2 flex-shrink-0"></span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium hover:bg-aws-orange/10 hover:text-aws-orange transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
