import React from 'react';
import { FaAws, FaTrophy, FaExternalLinkAlt } from 'react-icons/fa';
import { SiKubernetes } from 'react-icons/si';
import useReveal from '../hooks/useReveal';

const CREDLY = 'https://www.credly.com/badges';
const IMG = 'https://images.credly.com/images';

const tierColor = {
  Professional: 'text-amber-700',
  Associate: 'text-blue-700',
  Specialty: 'text-purple-700',
  Foundational: 'text-emerald-700',
  Kubernetes: 'text-[#326CE5]',
  HashiCorp: 'text-[#7B42BC]',
  Anthropic: 'text-[#D97757]',
  'AI Business': 'text-amber-700',
};

const credentials = [
  // AWS Foundational
  {
    tier: 'Foundational', name: 'Cloud Practitioner', code: 'CLF-C02', date: '2021',
    url: `${CREDLY}/780976a4-fd29-481e-aa12-3f5cabf59a3f`,
    img: `${IMG}/00634f82-b07f-4bbd-a6bb-53de397fc3a6/linkedin_thumb_image.png`,
  },
  {
    tier: 'Foundational', name: 'AI Practitioner', code: 'AIF-C01', date: '2024',
    url: `${CREDLY}/3fe0df79-c416-4fe2-8456-aef245bc0b99`,
    img: `${IMG}/4d4693bb-530e-4bca-9327-de07f3aa2348/linkedin_thumb_image.png`,
  },
  // AWS Associate
  {
    tier: 'Associate', name: 'Solutions Architect Associate', code: 'SAA-C03', date: '2021',
    url: `${CREDLY}/3e15c59b-e187-4949-979f-75d63765cd9f`,
    img: `${IMG}/0e284c3f-5164-4b21-8660-0d84737941bc/linkedin_thumb_image.png`,
  },
  {
    tier: 'Associate', name: 'Developer Associate', code: 'DVA-C02', date: '2022',
    url: `${CREDLY}/771491e6-2805-4c85-b3d2-687b9ca65d09`,
    img: `${IMG}/b9feab85-1a43-4f6c-99a5-631b88d5461b/linkedin_thumb_image.png`,
  },
  {
    tier: 'Associate', name: 'SysOps Administrator Associate', code: 'SOA-C02', date: '2022',
    url: `${CREDLY}/d4073416-3ba4-45e6-8784-2cb98e701307`,
    img: `${IMG}/f0d3fbb9-bfa7-4017-9989-7bde8eaf42b1/linkedin_thumb_image.png`,
  },
  {
    tier: 'Associate', name: 'Data Engineer Associate', code: 'DEA-C01', date: '2024',
    url: `${CREDLY}/95b45533-0d7e-4920-a9ba-628a0d88d4cc`,
    img: `${IMG}/e5c85d7f-4e50-431e-b5af-fa9d9b0596e7/linkedin_thumb_image.png`,
  },
  {
    tier: 'Associate', name: 'Machine Learning Associate', code: 'MLA-C01', date: '2024',
    url: `${CREDLY}/26070100-bcb8-441e-8537-8f2d153d1f43`,
    img: `${IMG}/1a634b4e-3d6b-4a74-b118-c0dcb429e8d2/linkedin_thumb_image.png`,
  },
  // AWS Professional
  {
    tier: 'Professional', name: 'Solutions Architect Professional', code: 'SAP-C02', date: '2023',
    url: `${CREDLY}/5190959e-dbdc-4504-b256-80486d8ca5d1`,
    img: `${IMG}/2d84e428-9078-49b6-a804-13c15383d0de/linkedin_thumb_image.png`,
  },
  {
    tier: 'Professional', name: 'DevOps Engineer Professional', code: 'DOP-C02', date: '2023',
    url: `${CREDLY}/6946f357-22fc-491f-a9db-e1aef25585be`,
    img: `${IMG}/bd31ef42-d460-493e-8503-39592aaf0458/linkedin_thumb_image.png`,
  },
  // AWS Specialty
  {
    tier: 'Specialty', name: 'Advanced Networking Specialty', code: 'ANS-C01', date: '2023',
    url: `${CREDLY}/b399180c-c12a-4524-a841-1a41b34cf86f`,
    img: `${IMG}/4d08274f-64c1-495e-986b-3143f51b1371/linkedin_thumb_image.png`,
  },
  {
    tier: 'Specialty', name: 'Machine Learning Specialty', code: 'MLS-C01', date: '2024',
    url: `${CREDLY}/efc33bd7-7ec9-4abd-801a-3e809c5dd700`,
    img: `${IMG}/778bde6c-ad1c-4312-ac33-2fa40d50a147/linkedin_thumb_image.png`,
  },
  {
    tier: 'Specialty', name: 'Security Specialty', code: 'SCS-C02', date: '2024',
    url: `${CREDLY}/ad278905-bed8-40a1-87c4-57ff5526282c`,
    img: `${IMG}/53acdae5-d69f-4dda-b650-d02ed7a50dd7/linkedin_thumb_image.png`,
  },
  // Kubernetes (Kubestronaut)
  {
    tier: 'Kubernetes', name: 'Certified Kubernetes Administrator', code: 'CKA', date: '2025',
    url: `${CREDLY}/577987ae-ad51-4012-82d6-5ef69d347035`,
    img: `${IMG}/8b8ed108-e77d-4396-ac59-2504583b9d54/linkedin_thumb_cka_from_cncfsite__281_29.png`,
  },
  {
    tier: 'Kubernetes', name: 'Kubernetes Application Developer', code: 'CKAD', date: '2025',
    url: `${CREDLY}/c74fc80a-2ccc-4d20-b5c5-9e5ded86b91b`,
    img: `${IMG}/cc8adc83-1dc6-4d57-8e20-22171247e052/linkedin_thumb_blob`,
  },
  {
    tier: 'Kubernetes', name: 'Kubernetes Security Specialist', code: 'CKS', date: '2025',
    url: `${CREDLY}/6ac84ae5-f8c1-40f3-a5f2-9e21d970815c`,
    img: `${IMG}/9945dfcb-1cca-4529-85e6-db1be3782210/linkedin_thumb_kubernetes-security-specialist-logo2.png`,
  },
  {
    tier: 'Kubernetes', name: 'Kubernetes & Cloud Native Associate', code: 'KCNA', date: '2025',
    url: `${CREDLY}/8c3a260f-3f55-4fc7-9bbb-ad048a0ed46e`,
    img: `${IMG}/f28f1d88-428a-47f6-95b5-7da1dd6c1000/linkedin_thumb_KCNA_badge.png`,
  },
  {
    tier: 'Kubernetes', name: 'Cloud Native Security Associate', code: 'KCSA', date: '2026',
    url: `${CREDLY}/38a2ffaa-1525-4858-b6dd-3521783c224d`,
    img: `${IMG}/67dd8a95-8876-4051-9cb9-3d97c204f85a/linkedin_thumb_image.png`,
  },
  // HashiCorp
  {
    tier: 'HashiCorp', name: 'Terraform Certified Associate', code: '003', date: '2023',
    url: `${CREDLY}/e2c03898-86a2-4861-a985-0c3292b0ed94`,
    img: `${IMG}/0dc62494-dc94-469a-83af-e35309f27356/linkedin_thumb_blob`,
  },
  // Anthropic
  {
    tier: 'Anthropic', name: 'Claude Certified Architect - Professional', code: 'Anthropic', date: '2026',
    url: `${CREDLY}/006f4b38-7243-47ce-8452-a0059dbda948`,
    img: `${IMG}/7583afbc-4aab-4c7d-8af4-d9af72786ab3/linkedin_thumb_blob`,
  },
  // AWS AI Business
  {
    tier: 'AI Business', name: 'AI Business Strategist (Early Adopter)', code: 'AWS', date: '2026',
    url: `${CREDLY}/0e166b7a-c5e1-46cc-80d7-827bd4d64297`,
    img: `${IMG}/b7716dcd-7fd1-4cb2-bcc8-23685f1bcdd8/linkedin_thumb_blob`,
  },
];

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
            20 active certifications. Every badge links to its Credly verification.
          </p>
        </header>

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
              <h3 className="text-lg font-bold text-text-primary mt-1">AWS Golden Jacket · 13x Certified</h3>
              <p className="text-text-secondary text-sm mt-1 leading-relaxed">
                Holder of every active AWS certification across Foundational, Associate, Professional, Specialty, and AI Business.
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
            <a
              key={c.url}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="credential-cell group flex gap-3 min-w-0"
            >
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center mt-0.5">
                <img
                  src={c.img}
                  alt={`${c.name} badge`}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="min-w-0">
                <p className={`text-xs font-mono font-medium mb-1 ${tierColor[c.tier]}`}>{c.tier}</p>
                <h3 className="text-sm font-semibold text-text-primary leading-snug mb-0.5 group-hover:text-accent transition-colors flex items-center gap-1.5">
                  {c.name}
                  <FaExternalLinkAlt className="w-2.5 h-2.5 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </h3>
                <p className="text-text-muted text-xs font-mono">
                  {c.code}
                  <span className="text-text-muted/60"> · {c.date}</span>
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
