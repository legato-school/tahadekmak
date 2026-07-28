import React from 'react';
import useReveal from '../hooks/useReveal';

const experiences = [
  {
    title: 'Senior Solutions Architect',
    company: 'Digico Solutions',
    location: 'Beirut, Lebanon',
    period: 'Jul 2025 – Present',
    highlights: [
      'Leading a cross-functional team of 8 DevOps and AI engineers to deliver 5+ end-to-end solutions for startups and SMBs.',
      'Managing the full SDLC and enforcing turnaround SLAs, driving consistent on-time delivery at production-grade quality.',
      'Spearheading presales technical discovery for 10+ high-value startups.',
      'Accelerating AWS adoption by positioning services on the AWS Marketplace and securing Service Delivery Programs.',
      'Streamlining enterprise deployments with modular, reusable Terraform templates.',
      'Securing client environments through Landing Zones, security hardening and automated cloud operations.',
    ],
    tech: ['AWS', 'Terraform', 'Landing Zones', 'DevSecOps'],
  },
  {
    title: 'DevSecOps Engineer',
    company: 'Neo Mena Technologies',
    location: 'Beirut, Lebanon',
    period: 'Dec 2023 – Jul 2025',
    highlights: [
      'Configured GitHub workflows for unit testing, linting, security testing and deployments.',
      'Resolved 60+ infrastructure and API security items assessed by 3rd-party auditors (Vanta, Drata, Panacea, Archer).',
      'Designed a Grafana/Prometheus monitoring stack using Terraform, SSM documents and docker-compose.',
      'Applied cost-optimization measures cutting spend 15% via EC2/RDS reservations and Fargate/spot instances.',
      'Automated Slack→GitHub deploys, GitHub→Jira issue mapping and GitHub→Cypress integration.',
      'Deployed 20+ batch jobs and Lambda functions leveraging SAM and EventBridge.',
    ],
    tech: ['GitHub Actions', 'Terraform', 'Grafana', 'Prometheus', 'Lambda', 'Docker'],
  },
  {
    title: 'Technical Support Specialist',
    company: 'EXFO',
    location: 'Quebec, Canada (Remote)',
    period: 'May 2021 – Oct 2023',
    highlights: [
      'Ensured 99.9%+ uptime for high-traffic telecom platforms by resolving 200+ critical production incidents.',
      'Streamlined CI/CD and container orchestration via Kubernetes and Helm.',
      'Led cross-functional patching initiatives between DevOps and R&D.',
    ],
    tech: ['Kubernetes', 'Helm', 'CI/CD', 'Production Support'],
  },
  {
    title: 'Full Stack Developer',
    company: 'PropertyCard.com',
    location: 'London, UK (Remote)',
    period: 'Dec 2020 – May 2021',
    highlights: [
      'Architected a GCP-based microservices backend (5+ services) with Express.js to manage a 1M+ property dataset.',
      'Implemented an indexing strategy between PostgreSQL and Elasticsearch.',
      'Leveraged Next.js SSR for a 1M+ listing catalog.',
    ],
    tech: ['GCP', 'Express.js', 'PostgreSQL', 'Elasticsearch', 'Next.js'],
  },
];

const Experience = () => {
  const [ref, visible] = useReveal();

  return (
    <section
      id="experience"
      ref={ref}
      className={`section-band reveal ${visible ? 'reveal-visible' : ''}`}
    >
      <div className="container-max section-padding">
        <header className="section-head">
          <p className="section-eyebrow">02 · Experience</p>
          <h2 className="section-title">Where I've Worked</h2>
          <p className="section-lead">
            My journey through cloud architecture, DevSecOps, and software engineering, from
            full-stack development to leading solutions teams.
          </p>
        </header>

        <div className="max-w-3xl">
          <div className="timeline-track space-y-12">
            {experiences.map((exp) => (
              <article key={`${exp.company}-${exp.period}`} className="timeline-entry">
                <span className="timeline-dot" aria-hidden="true" />
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-text-primary">{exp.title}</h3>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                  <div className="sm:text-right text-sm">
                    <p className="text-text-secondary font-mono">{exp.period}</p>
                    <p className="text-text-muted">{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2.5 mt-4">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-secondary leading-relaxed text-[0.95rem]">
                      <span className="w-1 h-1 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-bg-tertiary text-text-secondary text-xs font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
