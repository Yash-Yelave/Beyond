import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.25, 0.1, 0.25, 1];

const badges = [
  { label: 'Curated Community', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { label: 'High-Trust Network', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
  { label: 'Founder-Led Ecosystem', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
  { label: 'Strategic Connections', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
];

const orbitItems = [
  { label: 'Founders', angle: 0, color: 'bg-teal-50 border-teal-100 text-teal-700' },
  { label: 'Investors', angle: 60, color: 'bg-blue-50 border-blue-100 text-blue-700' },
  { label: 'Mentors', angle: 120, color: 'bg-violet-50 border-violet-100 text-violet-700' },
  { label: 'Creators', angle: 180, color: 'bg-amber-50 border-amber-100 text-amber-700' },
  { label: 'Operators', angle: 240, color: 'bg-slate-50 border-slate-200 text-slate-700' },
  { label: 'Experts', angle: 300, color: 'bg-rose-50 border-rose-100 text-rose-700' },
];

export default function MembershipHero() {
  return (
    <section className="relative bg-white pt-16 pb-24 overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(15,118,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,118,110,1) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />
      {/* Glow blob */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[380px] rounded-full opacity-[0.06] blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #14b8a6 0%, #6366f1 60%, transparent 100%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: EASE }}
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span className="text-xs font-semibold text-teal-700 tracking-wide uppercase">Membership</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-slate-900 leading-[1.12] tracking-tight mb-6">
              Become Part of{' '}
              <span className="text-teal-600">Beyond</span>
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-lg">
              Join a curated ecosystem of visionary founders, investors, creators, and operators building meaningful growth together.
            </p>

            {/* Trust badges grid */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {badges.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.25 + i * 0.08 }}
                  className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3"
                >
                  <svg className="w-4 h-4 text-teal-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={b.icon} />
                  </svg>
                  <span className="text-xs font-semibold text-slate-600">{b.label}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.55 }}
            >
              <motion.a
                href="#membership-form"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold text-sm shadow-lg shadow-slate-900/10 hover:bg-slate-800 transition-colors"
              >
                Apply for Membership
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <motion.a
                href="#/"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-semibold text-sm hover:bg-slate-50 transition-colors"
              >
                Explore Ecosystem
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── Right: orbit illustration ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.1 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-80 h-80">
              {/* Concentric rings */}
              {[300, 230, 160, 90].map((size, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-100"
                  style={{ width: size, height: size }}
                />
              ))}
              {/* Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72px] h-[72px] bg-slate-900 rounded-2xl flex items-center justify-center shadow-xl shadow-slate-900/20 z-10">
                <span className="text-white font-bold text-2xl tracking-widest">B</span>
              </div>
              {/* Orbit nodes */}
              {orbitItems.map(({ label, angle, color }, i) => {
                const r = 130;
                const rad = ((angle - 90) * Math.PI) / 180;
                const x = 50 + (r / 1.6) * Math.cos(rad);
                const y = 50 + (r / 1.6) * Math.sin(rad);
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1, ease: EASE }}
                    className={`absolute border rounded-xl px-3 py-1.5 text-xs font-semibold shadow-sm z-10 ${color}`}
                    style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%,-50%)' }}
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
