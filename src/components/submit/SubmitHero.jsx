import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.25, 0.1, 0.25, 1];
const VIEWPORT = { once: true, margin: '-80px' };

const trustBadges = [
  {
    icon: (
      <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    text: 'Curated Ecosystem',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    text: 'Founder-First Approach',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    text: 'Confidential Review',
  },
  {
    icon: (
      <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    text: 'Strategic Introductions',
  },
];

export default function SubmitHero() {
  return (
    <section className="relative w-full bg-white pt-16 pb-24 overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(15,118,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,118,110,1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Soft radial blob */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full opacity-[0.07] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #14b8a6 0%, #3b82f6 60%, transparent 100%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-500" />
              <span className="text-xs font-semibold text-teal-700 tracking-wide uppercase">Submit Opportunity</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight mb-6">
              Bring Your Vision{' '}
              <span className="text-teal-600">Beyond</span>
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-xl">
              Submit your startup, idea, or opportunity to connect with investors, mentors, operators, and strategic collaborators inside the Beyond ecosystem.
            </p>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {trustBadges.map((badge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3"
                >
                  {badge.icon}
                  <span className="text-sm font-medium text-slate-700">{badge.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#submit-form"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold text-sm shadow-lg shadow-slate-900/10 hover:bg-slate-800 transition-colors"
            >
              Submit Opportunity
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Right — Abstract visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-full max-w-sm aspect-square">
              {/* Concentric rings */}
              {[280, 220, 160, 100].map((size, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-100"
                  style={{ width: size, height: size }}
                />
              ))}

              {/* Center badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-slate-900 rounded-2xl flex items-center justify-center shadow-xl shadow-slate-900/20">
                <span className="text-white font-bold text-xl tracking-widest">B</span>
              </div>

              {/* Floating orbit nodes */}
              {[
                { label: 'Funding', angle: 0, color: 'bg-teal-50 border-teal-100 text-teal-700' },
                { label: 'Mentors', angle: 72, color: 'bg-blue-50 border-blue-100 text-blue-700' },
                { label: 'Network', angle: 144, color: 'bg-slate-50 border-slate-200 text-slate-700' },
                { label: 'Growth', angle: 216, color: 'bg-amber-50 border-amber-100 text-amber-700' },
                { label: 'Partners', angle: 288, color: 'bg-violet-50 border-violet-100 text-violet-700' },
              ].map(({ label, angle, color }, i) => {
                const radius = 110;
                const rad = ((angle - 90) * Math.PI) / 180;
                const x = 50 + (radius / 1.4) * Math.cos(rad);
                const y = 50 + (radius / 1.4) * Math.sin(rad);
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className={`absolute border rounded-xl px-3 py-1.5 text-xs font-semibold shadow-sm ${color}`}
                    style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
                  >
                    {label}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
