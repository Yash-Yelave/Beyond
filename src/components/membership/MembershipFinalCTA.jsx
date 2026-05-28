import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.25, 0.1, 0.25, 1];
const VIEWPORT = { once: true, margin: '-60px' };

export default function MembershipFinalCTA() {
  return (
    <section className="bg-slate-900 py-24 relative overflow-hidden">
      {/* Teal glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[320px] rounded-full opacity-[0.10] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #14b8a6 0%, transparent 70%)' }}
      />
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.85, ease: EASE }}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-xs font-semibold text-slate-300 tracking-wide uppercase">Beyond Ecosystem</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
            Build Relationships Beyond Transactions
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            Join a network designed for meaningful collaboration, long-term growth, and trusted connections that compound over time.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#membership-form"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-teal-500 text-white px-9 py-4 rounded-xl font-semibold text-sm shadow-lg shadow-teal-500/20 hover:bg-teal-400 transition-colors"
            >
              Apply for Membership
            </motion.a>
            <motion.a
              href="#/submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white/10 border border-white/10 text-white px-9 py-4 rounded-xl font-semibold text-sm hover:bg-white/15 transition-colors"
            >
              Submit Opportunity
            </motion.a>
          </div>

          {/* Trust micro-badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
            {[
              'Application-based · curated',
              'Confidential & high-trust',
              'Founder-led community',
              'No spam. Ever.',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5 text-xs text-slate-500">
                <span className="w-1 h-1 rounded-full bg-teal-500" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
