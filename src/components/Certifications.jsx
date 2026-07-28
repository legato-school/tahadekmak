import React from 'react';
import { FaAws, FaTrophy } from 'react-icons/fa';
import { SiKubernetes, SiTerraform } from 'react-icons/si';
import useReveal from '../hooks/useReveal';

const tierColor = {
  Professional: 'text-amber-700',
  Associate: 'text-blue-700',
  Specialty: 'text-purple-700',
  Foundational: 'text-emerald-700',
  Kubernetes: 'text-[#326CE5]',
  HashiCorp: 'text-[#7B42BC]',
};

const summary = [
  { count: 2, label: 'Foundational', color: 'text-emerald-700' },
  { count: 5, label: 'Associate', color: 'text-blue-700' },
  { count: 2, label: 'Professional', color: 'text-amber-700' },
  { count: 3, label: 'Specialty', color: 'text-purple-700' },
  { count: 5, label: 'Kubernetes', color: 'text-[#326CE5]' },
];

const credentials = [
  // AWS Foundational
  { tier: 'Foundational', name: 'Cloud Practitioner', code: 'CLF-C02', icon: 'aws', date: '2021' },
  { tier: 'Foundational', name: 'AI Practitioner', code: 'AIF-C01', icon: 'aws', date: '2024' },
  // AWS Associate
  { tier: 'Associate', name: 'Solutions Architect Associate', code: 'SAA-C03', icon: 'aws', date: '2021' },
  { tier: 'Associate', name: 'Developer Associate', code: 'DVA-C02', icon: 'aws', date: '2022' },
  { tier: 'Associate', name: 'SysOps Administrator Associate', code: 'SOA-C02', icon: 'aws', date: '2022' },
  { tier: 'Associate', name: 'Data Engineer Associate', code: 'DEA-C01', icon: 'aws', date: '2024' },
  { tier: 'Associate', name: 'Machine Learning Associate', code: 'MLA-C01', icon: 'aws', date: '2024' },
  // AWS Professional
  { tier: 'Professional', name: 'Solutions Architect Professional', code: 'SAP-C02', icon: 'aws', date: '2023' },
  { tier: 'Professional', name: 'DevOps Engineer Professional', code: 'DOP-C02', icon: 'aws', date: '2023' },
  // AWS Specialty
  { tier: 'Specialty', name: 'Advanced Networking Specialty', code: 'ANS-C01', icon: 'aws', date: '2023' },
  { tier: 'Specialty', name: 'Machine Learning Specialty', code: 'MLS-C01', icon: 'aws', date: '2024' },
  { tier: 'Specialty', name: 'Security Specialty', code: 'SCS-C02', icon: 'aws', date: '2024' },
  // Kubernetes (Kubestronaut)
  { tier: 'Kubernetes', name: 'Certified Kubernetes Administrator', code: 'CKA', icon: 'k8s', date: '2025' },
  { tier: 'Kubernetes', name: 'Kubernetes Application Developer', code: 'CKAD', icon: 'k8s', date: '2025' },
  { tier: 'Kubernetes', name: 'Kubernetes Security Specialist', code: 'CKS', icon: 'k8s', date: '2025' },
  { tier: 'Kubernetes', name: 'Kubernetes & Cloud Native Associate', code: 'KCNA', icon: 'k8s', date: '2025' },
  { tier: 'Kubernetes', name: 'Cloud Native Security Associate', code: 'KCSA', icon: 'k8s', date: '2026' },
  // HashiCorp
  { tier: 'HashiCorp', name: 'Terraform Certified Associate', code: '003', icon: 'terraform', date: '2023' },
];

const CredIcon = ({ type }) => {
  if (type === 'k8s') return <SiKubernetes className="w-6 h-6 text-[#326CE5]" />;
  if (type === 'terraform') return <SiTerraform className="w-6 h-6 text-[#7B42BC]" />;
  return <FaAws className="w-6 h-6 text-accent" />;
};

const Certifications = () => {
  const [ref, visible] = useReveal();

  return (
    <section
      id="certifications"
      ref={ref}
      className={`section-band-alt reveal ${visible ? 'reveal-visible' : ''}`}
    >
      <div className="container-max section-padding">
        <header className="section-head">
          <p className="section-eyebrow">03 · Certifications</p>
          <h2 className="section-title">Certified, end to end</h2>
          <p className="section-lead">
            Validated depth across the full AWS stack and the cloud-native ecosystem, spanning
            18 active certifications and counting.
          </p>
        </header>

        {/* Summary strip */}
        <dl className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8">
          {summary.map((s) => (
            <div key={s.label} className="rounded-lg border border-border bg-bg-primary px-5 py-4">
              <dt className={`text-2xl font-bold tabular-nums ${s.color}`}>{s.count}</dt>
              <dd className="text-text-muted text-xs mt-0.5 font-mono">{s.label}</dd>
            </div>
          ))}
        </dl>

        {/* Elite achievement tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="rounded-lg border border-accent/40 bg-gradient-to-br from-accent/[0.07] to-transparent p-6 flex items-start gap-4">
            <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-accent/10 flex items-center justify-center">
              <FaAws className="w-7 h-7 text-accent" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <FaTrophy className="w-3.5 h-3.5 text-accent" />
                <p className="text-xs font-mono uppercase tracking-wider text-accent">AWStronaut</p>
              </div>
              <h3 className="text-lg font-bold text-text-primary mt-1">AWS Golden Jacket · 12x Certified</h3>
              <p className="text-text-secondary text-sm mt-1 leading-relaxed">
                Holder of every active AWS certification across Foundational, Associate, Professional and Specialty.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-[#326CE5]/40 bg-gradient-to-br from-[#326CE5]/[0.07] to-transparent p-6 flex items-start gap-4">
            <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-[#326CE5]/10 flex items-center justify-center">
              <SiKubernetes className="w-7 h-7 text-[#326CE5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <FaTrophy className="w-3.5 h-3.5 text-[#326CE5]" />
                <p className="text-xs font-mono uppercase tracking-wider text-[#326CE5]">Kubestronaut</p>
              </div>
              <h3 className="text-lg font-bold text-text-primary mt-1">CNCF · 5x Kubernetes Certified</h3>
              <p className="text-text-secondary text-sm mt-1 leading-relaxed">
                CKA, CKAD, CKS, KCNA and KCSA, the complete CNCF Kubernetes certification set.
              </p>
            </div>
          </div>
        </div>

        {/* Credential grid */}
        <div className="border-t border-l border-border rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-bg-primary">
          {credentials.map((c) => (
            <div key={c.code + c.name} className="credential-cell flex gap-3 min-w-0">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center mt-0.5">
                <CredIcon type={c.icon} />
              </div>
              <div className="min-w-0">
                <p className={`text-xs font-mono font-medium mb-1 ${tierColor[c.tier]}`}>{c.tier}</p>
                <h3 className="text-sm font-semibold text-text-primary leading-snug mb-0.5">{c.name}</h3>
                <p className="text-text-muted text-xs font-mono">
                  {c.code}
                  <span className="text-text-muted/60"> · {c.date}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
