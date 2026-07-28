import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import useReveal from '../hooks/useReveal';

const EMAIL = 'tahadekmak14@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/taha-dekmak/';
// Opens Gmail compose in a new tab (reliable even when no default mail app is set)
const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;

const Contact = () => {
  const [ref, visible] = useReveal();

  return (
    <section
      id="contact"
      ref={ref}
      className={`section-band-alt reveal ${visible ? 'reveal-visible' : ''}`}
    >
      <div className="container-max section-padding">
        <header className="section-head">
          <p className="section-eyebrow">05 · Contact</p>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-lead">
            Whether you need an AWS architect, want to discuss a cloud project, or just want to talk
            infrastructure, I'd love to hear from you.
          </p>
        </header>

        <div className="contact-band">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ready to Work Together?</h3>
              <p className="text-white/75 leading-relaxed max-w-xl">
                I'm always open to discussing new opportunities, cloud migrations, and DevSecOps
                collaborations. Whether you're a startup adopting AWS or an enterprise hardening your
                cloud, let's talk.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={GMAIL_COMPOSE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-text-primary font-medium py-3 px-6 rounded-lg hover:bg-bg-secondary transition-colors"
                >
                  <FaEnvelope className="w-4 h-4" />
                  Send Email
                </a>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/30 text-white font-medium py-3 px-6 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <FaLinkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
              <div className="inline-flex items-center gap-2 pt-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-300 text-sm font-medium">Available for new opportunities</span>
              </div>
            </div>

            <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/20 pt-8 lg:pt-0 lg:pl-10 space-y-6">
              <a href={GMAIL_COMPOSE} target="_blank" rel="noopener noreferrer" className="block group">
                <p className="text-white/50 text-xs font-mono uppercase tracking-wider mb-1">Email</p>
                <p className="font-medium group-hover:text-accent transition-colors break-all">{EMAIL}</p>
              </a>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="block group">
                <p className="text-white/50 text-xs font-mono uppercase tracking-wider mb-1">LinkedIn</p>
                <p className="font-medium group-hover:text-accent transition-colors">Taha Dekmak</p>
              </a>
              <div>
                <p className="text-white/50 text-xs font-mono uppercase tracking-wider mb-1">Location</p>
                <p className="font-medium">Beirut, Lebanon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
