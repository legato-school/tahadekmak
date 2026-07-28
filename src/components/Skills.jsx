import React from 'react';
import { FaCloud, FaShieldAlt, FaCubes, FaInfinity } from 'react-icons/fa';
import useReveal from '../hooks/useReveal';

const focus = [
  {
    icon: FaCloud,
    title: 'Cloud Architecture',
    desc: 'Designing secure, cost-efficient AWS architectures with Landing Zones, multi-account governance and Well-Architected best practices.',
  },
  {
    icon: FaInfinity,
    title: 'DevSecOps & Automation',
    desc: 'Building CI/CD pipelines with security baked in: automated testing, compliance auditing, and GitOps-driven delivery.',
  },
  {
    icon: FaCubes,
    title: 'Infrastructure as Code',
    desc: 'Shipping modular, reusable Terraform to make enterprise deployments repeatable and reviewable.',
  },
  {
    icon: FaShieldAlt,
    title: 'Container Orchestration',
    desc: 'Running production workloads on Kubernetes and ECS/EKS with Helm, autoscaling, and security hardening (CKA/CKAD/CKS).',
  },
];

const Skills = () => {
  const [ref, visible] = useReveal();

  return (
    <section
      id="skills"
      ref={ref}
      className={`section-band reveal ${visible ? 'reveal-visible' : ''}`}
    >
      <div className="container-max section-padding">
        <header className="section-head">
          <p className="section-eyebrow">04 · Expertise</p>
          <h2 className="section-title">What I Do</h2>
          <p className="section-lead">
            Four areas where I bring the most value, from architecture and automation to
            running resilient workloads in production.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {focus.map((f) => (
            <div
              key={f.title}
              className="group rounded-lg border border-border bg-bg-primary p-6 lg:p-8 transition-all duration-200 hover:border-accent/50 hover:shadow-md hover:shadow-black/[0.04]"
            >
              <div className="w-11 h-11 rounded-lg bg-bg-tertiary flex items-center justify-center mb-4 transition-colors group-hover:bg-accent/10">
                <f.icon className="w-5 h-5 text-text-secondary transition-colors group-hover:text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">{f.title}</h3>
              <p className="text-text-secondary text-[0.95rem] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
