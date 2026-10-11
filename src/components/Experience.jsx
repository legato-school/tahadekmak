import React from 'react';
import useReveal from '../hooks/useReveal';

const experiences = [
  {
    title: 'Senior Solutions Architect',
    company: 'Digico Solutions',
    location: 'Beirut, Lebanon (Hybrid)',
    period: 'Jul 2025 – Present',
    highlights: [
      'Led a cross-functional team of 8 DevOps and AI engineers delivering 5+ end-to-end solutions for startups and SMBs; owned the full SDLC and enforced delivery SOPs, raising on-time delivery by 20%.',
      "Built the team's delivery stack on Linear (cycles and estimates), Notion, Slack, and Claude, standardizing planning, documentation, communication, and agentic workflows.",
      'Led presales and project management for multiple migrations from GCP, Azure, Hetzner, and on-premises data centers to AWS, using AWS MGN, AWS DMS, Terraform, and GitHub Actions CI/CD.',
      'Led delivery of an agentic AI solution on Amazon Bedrock AgentCore with managed knowledge bases, built to responsible AI principles.',
      'Ran presales technical discovery for 15+ companies, producing solution architectures, cost estimates, and AWS funding proposals that converted into delivery engagements.',
      'Standardized enterprise deployments with modular Terraform templates and GitHub Actions CI/CD for containerized workloads on Amazon ECS and EKS.',
      'Secured client environments with Landing Zones, security hardening, and automated operations — monitoring, patching, and cost optimization — reducing operational overhead.',
    ],
    tech: ['AWS', 'Terraform', 'GitHub Actions', 'Bedrock AgentCore', 'Landing Zones', 'DevSecOps'],
  },
  {
    title: 'DevSecOps Engineer',
    company: 'Neo Mena Technologies',
    location: 'Beirut, Lebanon (Hybrid)',
    period: 'Dec 2023 – Jul 2025',
    highlights: [
      'Built GitHub Actions workflows for unit testing, linting, security testing, and deployments across multiple environments.',
      'Remediated 60+ infrastructure and API security findings from internal and third-party assessments (Deloitte, Panacea).',
      'Provisioned multiple isolated environments (dev, staging, production) on Amazon ECS and AWS App Runner.',
      'Designed and deployed a Grafana/Prometheus monitoring stack using Terraform, SSM documents, and Docker Compose.',
      'Cut cloud spend 15% through EC2/RDS reservations, Fargate, and Spot Instances.',
      'Automated Slack-to-GitHub deployments, GitHub-to-Jira issue mapping, and GitHub-to-Cypress integration; deployed 20+ batch jobs and Lambda functions with SAM and EventBridge.',
    ],
    tech: ['GitHub Actions', 'Terraform', 'Grafana', 'Prometheus', 'Lambda', 'ECS', 'App Runner'],
  },
  {
    title: 'Technical Support Specialist',
    company: 'EXFO',
    location: 'Quebec, Canada (Remote)',
    period: 'May 2021 – Oct 2023',
    highlights: [
      'Maintained 99.9% uptime for high-traffic telecom platforms serving millions of active users by resolving 200+ critical production incidents.',
      'Streamlined CI/CD and container orchestration with Kubernetes and Helm; built observability dashboards that shortened the incident feedback loop by 30%.',
      'Led cross-functional patching initiatives between DevOps and R&D, standardizing troubleshooting and cutting manual intervention by 15 hours per week.',
    ],
    tech: ['Kubernetes', 'Helm', 'CI/CD', 'Production Support'],
  },
  {
    title: 'Full Stack Developer',
    company: 'PropertyCard.com',
    location: 'London, UK (Remote)',
    period: 'Dec 2020 – May 2021',
    highlights: [
      'Architected a GCP-based microservices backend (5+ Express.js services) over a 1M+ property dataset, with a PostgreSQL–Elasticsearch indexing strategy holding sub-200ms search latency under concurrent load.',
      'Implemented Next.js server-side rendering to make a 1M+ listing catalog crawlable for SEO and improve First Contentful Paint, using React, Redux Toolkit, and MUI.',
    ],
    tech: ['GCP', 'Express.js', 'PostgreSQL', 'Elasticsearch', 'Next.js', 'React', 'Redux Toolkit'],
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
