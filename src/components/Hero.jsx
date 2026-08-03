import React from 'react';
import { FaEnvelope, FaDownload, FaArrowDown } from 'react-icons/fa';

const stats = [
  { value: '19', label: 'Certifications' },
  { value: '5+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Delivered' },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background motifs */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.4]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(10,10,10,0.07) 1px, transparent 0)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)',
        }}
      />
      <div
        className="absolute -top-32 -right-32 w-[36rem] h-[36rem] -z-10 rounded-full opacity-[0.12]"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle, #FF9900 0%, transparent 70%)' }}
      />

      <div className="container-max section-padding w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="lg:col-span-7 space-y-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-primary/60 px-3 py-1.5 font-mono text-xs text-text-secondary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Beirut, Lebanon · Available for opportunities
            </div>

            <h1 className="font-display text-[clamp(2.75rem,8vw,5.25rem)] font-bold leading-[0.98] tracking-tight text-text-primary">
              Taha Dekmak
            </h1>

            <p className="text-2xl sm:text-3xl text-text-secondary font-light tracking-tight">
              <span className="relative inline-block font-medium text-text-primary">
                Senior Solutions Architect
                <span className="absolute left-0 -bottom-1 h-3 w-full bg-accent/25 -z-10 rounded" />
              </span>
            </p>

            <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
              Certified AWS Solutions Architect specializing in secure, cost-efficient, and
              high-performing cloud architecture. I bring DevSecOps automation, Infrastructure as
              Code, and operational excellence to teams that need to scale reliably, without
              compromising security or overspending.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <a href="#contact" className="btn-primary">
                <FaEnvelope className="w-4 h-4" />
                Get In Touch
              </a>
              <a href="/TahaDekmak-SSA.pdf" download="TahaDekmak-SSA.pdf" className="btn-secondary">
                <FaDownload className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </div>

          {/* Image with framed treatment + floating badges */}
          <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: '0.15s' }}>
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 lg:ml-auto w-full">
              {/* corner frame accents */}
              <span className="absolute -top-2 -left-2 w-10 h-10 border-t-2 border-l-2 border-accent rounded-tl-lg" aria-hidden="true" />
              <span className="absolute -bottom-2 -right-2 w-10 h-10 border-b-2 border-r-2 border-accent rounded-br-lg" aria-hidden="true" />

              <div className="relative h-full w-full overflow-hidden rounded-lg border border-border bg-bg-tertiary">
                <img
                  src="/taha.jpeg"
                  alt="Taha Dekmak - AWS Solutions Architect"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-14 lg:mt-24 pt-8 border-t border-border flex flex-wrap items-center gap-x-8 sm:gap-x-12 gap-y-6">
          {stats.map((s) => (
            <div key={s.label} className="flex items-baseline gap-2 sm:gap-3">
              <p className="font-display text-3xl sm:text-4xl font-bold text-text-primary tabular-nums">
                {s.value}
              </p>
              <p className="text-text-muted text-xs sm:text-sm font-mono max-w-[6rem] sm:max-w-[7rem] leading-tight">
                {s.label}
              </p>
            </div>
          ))}
          <a
            href="#about"
            className="ml-auto hidden sm:inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors text-xs font-mono uppercase tracking-widest"
          >
            Scroll <FaArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
