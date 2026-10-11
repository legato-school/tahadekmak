import React from 'react';
import useReveal from '../hooks/useReveal';

const skillGroups = [
  { label: 'Cloud & AWS', items: ['AWS', 'Landing Zones', 'Control Tower', 'Organizations', 'Well-Architected'] },
  { label: 'IaC & DevOps', items: ['Terraform', 'SAM', 'GitHub Actions', 'Docker'] },
  { label: 'Containers & K8s', items: ['Kubernetes', 'EKS', 'Karpenter', 'Helm', 'ArgoCD'] },
  { label: 'Observability & Sec', items: ['Grafana', 'Prometheus', 'DevSecOps', 'Trivy', 'Tetragon'] },
];

const About = () => {
  const [ref, visible] = useReveal();

  return (
    <section
      id="about"
      ref={ref}
      className={`section-band-alt reveal ${visible ? 'reveal-visible' : ''}`}
    >
      <div className="container-max section-padding">
        <header className="section-head">
          <p className="section-eyebrow">01 · About</p>
          <h2 className="section-title">The engineer behind the certs</h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Journey */}
          <div className="lg:col-span-7">
            <h3 className="text-xl font-semibold text-text-primary mb-4">My Journey</h3>
            <div className="space-y-4 text-text-secondary leading-relaxed text-[1.05rem]">
              <p>
                I earned my BSc in Computer and Communication Engineering from the Islamic University
                of Lebanon, where my fascination with how systems work under the hood took root.
              </p>
              <p>
                Over the past few years I've grown from full-stack development and production support
                into DevSecOps and cloud architecture. Today I lead a cross-functional team of 8 DevOps
                and AI engineers at Digico Solutions, leading cloud migrations and generative AI delivery
                for startups and SMBs across the region.
              </p>
              <p>
                What sets me apart is a relentless curiosity paired with breadth: I hold the full{' '}
                <span className="text-accent font-medium">AWS Golden Jacket (13x certified)</span> and am a{' '}
                <span className="text-accent font-medium">Kubestronaut (5x Kubernetes certified)</span>, proof
                of a commitment to going deep across cloud and cloud-native ecosystems.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-border">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Education</h3>
              <h4 className="font-semibold text-text-primary">
                BSc in Computer &amp; Communication Engineering
              </h4>
              <a
                href="https://www.iul.edu.lb/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline text-sm font-medium"
              >
                Islamic University of Lebanon
              </a>
              <p className="text-text-muted text-sm mt-1">Software &amp; Hardware Engineering · 2015–2020</p>
            </div>
          </div>

          {/* Skills */}
          <div className="lg:col-span-5">
            <h3 className="text-xl font-semibold text-text-primary mb-5">Skills &amp; Technologies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-xs font-mono uppercase tracking-wider text-accent mb-2">
                    {group.label}
                  </p>
                  <ul className="space-y-1">
                    {group.items.map((item) => (
                      <li key={item} className="skill-tag list-none">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
