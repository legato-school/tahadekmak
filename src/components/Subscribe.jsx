import React, { useState } from 'react';
import { FaEnvelopeOpenText, FaCheckCircle } from 'react-icons/fa';
import { subscribeMember } from '../lib/ghost';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [state, setState] = useState('idle'); // idle | loading | success | error
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    const value = email.trim();
    if (!value) return;
    setState('loading');
    setError('');
    try {
      await subscribeMember(value);
      setState('success');
      setEmail('');
    } catch (err) {
      setError(err.message || 'Something went wrong.');
      setState('error');
    }
  };

  return (
    <div id="subscribe" className="scroll-mt-24 rounded-2xl border border-border bg-bg-secondary p-8 lg:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 text-accent mb-2">
            <FaEnvelopeOpenText className="w-4 h-4" />
            <span className="text-xs font-mono uppercase tracking-wider">Newsletter</span>
          </div>
          <h3 className="font-display text-2xl font-bold text-text-primary tracking-tight">
            Get new posts in your inbox
          </h3>
          <p className="text-text-secondary text-sm mt-2 leading-relaxed">
            Occasional writing on AWS, DevSecOps, and Kubernetes. No spam, unsubscribe anytime.
          </p>
        </div>

        <div className="lg:col-span-6">
          {state === 'success' ? (
            <div className="flex items-start gap-3 rounded-lg border border-accent/40 bg-accent/[0.06] p-4">
              <FaCheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-text-primary">Almost there!</p>
                <p className="text-text-secondary text-sm">
                  Check your inbox and click the confirmation link to complete your subscription.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-2">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  id="subscribe-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  aria-label="Email address"
                  className="flex-1 rounded-lg border border-border bg-bg-primary px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition"
                />
                <button
                  type="submit"
                  disabled={state === 'loading'}
                  className="btn-primary whitespace-nowrap disabled:opacity-60"
                >
                  {state === 'loading' ? 'Subscribing…' : 'Subscribe'}
                </button>
              </div>
              {state === 'error' && (
                <p className="text-sm text-red-600 font-medium">{error}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
