import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.25, 0.1, 0.25, 1];
const VIEWPORT = { once: true, margin: '-80px' };

const benefits = [
  {
    title: 'Strategic Networking',
    description: 'Build lasting relationships with high-calibre peers who elevate your thinking and open doors that matter.',
    path: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    accent: 'text-teal-600 bg-teal-50 border-teal-100',
  },
  {
    title: 'Investor Access',
    description: 'Direct introductions to curated angels, family offices, and VCs actively looking for aligned opportunities.',
    path: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    accent: 'text-blue-600 bg-blue-50 border-blue-100',
  },
  {
    title: 'Founder Circles',
    description: 'Join intimate peer groups of founders at similar stages who share learnings, accountability, and support.',
    path: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
    accent: 'text-violet-600 bg-violet-50 border-violet-100',
  },
  {
    title: 'Mentorship & Guidance',
    description: 'Access experienced operators and domain experts who offer structured guidance at your current stage.',
    path: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    accent: 'text-amber-600 bg-amber-50 border-amber-100',
  },
  {
    title: 'Curated Opportunities',
    description: 'From co-investment deals to GTM partnerships, access deal flow and opportunities unavailable elsewhere.',
    path: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
    accent: 'text-rose-600 bg-rose-50 border-rose-100',
  },
  {
    title: 'Private Events & Experiences',
    description: 'Invite-only roundtables, dinners, and immersive retreats designed for meaningful off-screen connection.',
    path: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    accent: 'text-slate-600 bg-slate-100 border-slate-200',
  },
];

export default function BenefitsGrid() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-3">Member Benefits</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Why Join Beyond
          </h2>
          <p className="mt-3 text-slate-500 text-base max-w-xl mx-auto">
            An ecosystem engineered for compounding relationships and long-term collaborative growth.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.08 }}
              whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(0,0,0,0.08)' }}
              className="bg-white border border-slate-100 rounded-2xl p-7 shadow-sm flex flex-col gap-4 transition-all duration-300 cursor-default group"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 ${b.accent}`}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={b.path} />
                </svg>
              </div>
              {/* Content */}
              <div>
                <h3 className="text-base font-semibold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors duration-200">
                  {b.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{b.description}</p>
              </div>
              {/* Bottom accent */}
              <div className="h-[2px] w-8 bg-teal-400 rounded-full mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
